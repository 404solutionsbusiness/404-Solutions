import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle, AlertCircle, ChevronDown, Loader, X } from "lucide-react";
import {
  WEB3FORMS_ENDPOINT,
  WEB3FORMS_ACCESS_KEY,
  buildSubject,
} from "../config/contact";
import { EASE_CLAY } from "./motion";

const serviceOptions = [
  "Web Development",
  "UI/UX Design",
  "Social Media",
  "Digital Growth",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const fieldClass = "flex flex-col gap-1.5";
const labelClass = "text-desc font-bold text-ink";
const errorClass = "text-error font-semibold text-danger";

const inputClass = (hasError) =>
  `w-full rounded-btn border-[1.5px] bg-bg-input px-3.5 py-3 font-sans text-nav
   text-ink outline-none transition-colors duration-200 ease-clay
   focus:border-brand focus:bg-white ${hasError ? "border-danger" : "border-transparent"}`;

export default function Contact({ onClose }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceHighlight, setServiceHighlight] = useState(0);
  const [servicePlacement, setServicePlacement] = useState("down");
  const closeRef = useRef(null);
  const serviceRef = useRef(null);
  const serviceButtonRef = useRef(null);
  const serviceMenuRef = useRef(null);

  /* Escape closes, background stops scrolling, focus moves in and is handed
     back to whatever opened the dialog. */
  useEffect(() => {
    const opener = document.activeElement;
    const onKeyDown = (e) => { if (e.key === "Escape") onClose(); };
    const prevOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, [onClose]);

  useEffect(() => {
    if (!serviceOpen) return;

    const closeOnOutsideClick = (e) => {
      if (!serviceRef.current?.contains(e.target)) setServiceOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [serviceOpen]);

  useEffect(() => {
    if (!serviceOpen) return;

    const updateServicePlacement = () => {
      const trigger = serviceButtonRef.current;
      if (!trigger) return;

      const triggerRect = trigger.getBoundingClientRect();
      const menuHeight = serviceMenuRef.current?.getBoundingClientRect().height ?? 260;
      const gap = 4;
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;
      const shouldOpenUp = spaceBelow < menuHeight + gap && spaceAbove > spaceBelow;

      setServicePlacement(shouldOpenUp ? "up" : "down");
    };

    const frame = requestAnimationFrame(updateServicePlacement);
    window.addEventListener("resize", updateServicePlacement);
    window.addEventListener("scroll", updateServicePlacement, true);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateServicePlacement);
      window.removeEventListener("scroll", updateServicePlacement, true);
    };
  }, [serviceOpen]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const selectService = (value) => {
    setForm((prev) => ({ ...prev, service: value }));
    if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
    setServiceOpen(false);
  };

  const handleServiceKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      setServiceOpen(false);
      return;
    }

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!serviceOpen) {
        setServiceHighlight(form.service ? serviceOptions.indexOf(form.service) + 1 : 0);
        setServiceOpen(true);
        return;
      }

      setServiceHighlight((current) => {
        const direction = e.key === "ArrowDown" ? 1 : -1;
        return (current + direction + serviceOptions.length + 1) % (serviceOptions.length + 1);
      });
      return;
    }

    if (e.key === "Home" || e.key === "End") {
      e.preventDefault();
      setServiceHighlight(e.key === "Home" ? 0 : serviceOptions.length);
      setServiceOpen(true);
      return;
    }

    if ((e.key === "Enter" || e.key === " ") && serviceOpen) {
      e.preventDefault();
      selectService(serviceHighlight === 0 ? "" : serviceOptions[serviceHighlight - 1]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    /* Picks up every named field in the form, including the honeypot. */
    const payload = new FormData(e.target);
    payload.append("access_key", WEB3FORMS_ACCESS_KEY);
    payload.append("subject", buildSubject(form));
    payload.append("from_name", "404 Solution website");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: payload,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "We couldn't send that. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error — check your connection and try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        className="absolute inset-0 bg-ink/65 backdrop-blur-lg"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: EASE_CLAY }}
      />

      <motion.div
        className="relative z-2 w-full max-w-155 overflow-visible rounded-lg
                   bg-cream-card px-5.5 py-8 shadow-modal [scrollbar-width:none]
                   [&::-webkit-scrollbar]:hidden sm:px-10 sm:py-6"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.35, ease: EASE_CLAY }}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 flex size-9.5 cursor-pointer items-center
                     justify-center rounded-full border border-hairline-warm bg-white
                     text-ink transition-colors duration-200 ease-clay
                     hover:bg-brand-pale hover:text-brand"
        >
          <X size={20} />
        </button>

        <div
          className="max-h-[calc(100dvh-6.5rem)] overflow-y-auto [scrollbar-width:none]
                     [&::-webkit-scrollbar]:hidden sm:max-h-[calc(100dvh-5.5rem)]
                     lg:max-h-none lg:overflow-visible"
        >
        <h2 id="modal-title" className="mb-3 font-black text-modal text-ink">
          Let&rsquo;s build something<br />
          <span className="text-brand">amazing together.</span>
        </h2>

        <p className="mb-4 text-nav/relaxed text-ink-mid">
          Ready to start your project? Fill in the form and our team will get back to you within 24 hours.
        </p>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center gap-4 px-5 py-7.5 text-center">
            <CheckCircle size={56} className="text-brand" />
            <h3 className="text-2xl font-black text-ink">Message Sent!</h3>
            <p className="text-[15px] text-ink-mid">
              Thank you for reaching out. We&rsquo;ll get back to you shortly.
            </p>
            <button type="button" className="btn-primary" onClick={() => { setStatus("idle"); setErrorMessage(""); }}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
            {/* Spam honeypot: hidden from people, tempting to bots. */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div className={fieldClass}>
                <label htmlFor="name" className={labelClass}>Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={inputClass(errors.name)}
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span className={errorClass}>{errors.name}</span>}
              </div>
              <div className={fieldClass}>
                <label htmlFor="email" className={labelClass}>Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={inputClass(errors.email)}
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className={errorClass}>{errors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div className={fieldClass}>
                <label htmlFor="phone" className={labelClass}>Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={inputClass(false)}
                  placeholder="+91 86378 20298"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={fieldClass}>
                <label htmlFor="company" className={labelClass}>Company (optional)</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className={inputClass(false)}
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div ref={serviceRef} className={`${fieldClass} relative`}>
              <label htmlFor="service" className={labelClass}>Service *</label>
              <input type="hidden" name="service" value={form.service} />
              <button
                id="service"
                ref={serviceButtonRef}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={serviceOpen}
                aria-controls="service-options"
                aria-invalid={Boolean(errors.service)}
                className={`${inputClass(errors.service)} flex cursor-pointer items-center justify-between text-left
                            ${errors.service ? "" : serviceOpen
                              ? "border-brand shadow-[0_0_0_3px_rgb(120_72_254/0.12)]"
                              : "border-brand/25"}`}
                onClick={() => {
                  setServiceHighlight(form.service ? serviceOptions.indexOf(form.service) + 1 : 0);
                  setServiceOpen((open) => !open);
                }}
                onKeyDown={handleServiceKeyDown}
              >
                <span className={form.service ? "text-ink" : "text-ink-mid"}>
                  {form.service || "Select a service"}
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={`shrink-0 text-brand transition-transform duration-200 ease-clay ${serviceOpen ? "rotate-180" : ""}`}
                />
              </button>
              <ul
                id="service-options"
                ref={serviceMenuRef}
                role="listbox"
                aria-labelledby="service"
                aria-hidden={!serviceOpen}
                className={`absolute inset-x-0 z-50 overflow-hidden rounded-[13px]
                           border border-brand/15 bg-cream-card p-1 shadow-[0_10px_24px_rgb(91_39_229/0.10)]
                           transition-[opacity,transform,visibility] duration-150 ease-clay
                           ${servicePlacement === "up" ? "bottom-full top-auto mb-1" : "top-full bottom-auto mt-1"}
                           ${serviceOpen
                             ? "visible translate-y-0 scale-100 opacity-100"
                             : servicePlacement === "up"
                               ? "invisible translate-y-1 scale-[0.98] opacity-0"
                               : "invisible -translate-y-1 scale-[0.98] opacity-0"}`}
              >
                  <li
                    role="option"
                    aria-selected={!form.service}
                    className={`flex h-10.5 min-h-10.5 cursor-pointer items-center justify-between px-4 py-2 text-nav
                                transition-colors duration-150 ease-clay ${
                      serviceHighlight === 0 || !form.service
                        ? "bg-brand-pale/70 text-brand"
                        : "text-ink hover:bg-brand-pale/55 hover:text-brand"
                    }`}
                    onMouseEnter={() => setServiceHighlight(0)}
                    onClick={() => selectService("")}
                  >
                    <span>Select a service</span>
                    <Check
                      size={15}
                      strokeWidth={2.25}
                      aria-hidden="true"
                      className={!form.service || serviceHighlight === 0 ? "text-brand" : "invisible"}
                    />
                  </li>
                  {serviceOptions.map((service, index) => (
                    <li
                      key={service}
                      role="option"
                      aria-selected={form.service === service}
                      className={`flex h-10.5 min-h-10.5 cursor-pointer items-center justify-between px-4 py-2 text-nav
                                  transition-colors duration-150 ease-clay ${
                        serviceHighlight === index + 1 || form.service === service
                          ? "bg-brand-pale/70 text-brand"
                          : "text-ink hover:bg-brand-pale/55 hover:text-brand"
                      }`}
                      onMouseEnter={() => setServiceHighlight(index + 1)}
                      onClick={() => selectService(service)}
                    >
                      <span>{service}</span>
                      <Check
                        size={15}
                        strokeWidth={2.25}
                        aria-hidden="true"
                        className={serviceHighlight === index + 1 || form.service === service ? "text-brand" : "invisible"}
                      />
                    </li>
                  ))}
              </ul>
              {errors.service && <span className={errorClass}>{errors.service}</span>}
            </div>

            <div className={fieldClass}>
              <label htmlFor="message" className={labelClass}>Message *</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className={`${inputClass(errors.message)} min-h-20 resize-none`}
                placeholder="Tell us about your project requirements..."
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <span className={errorClass}>{errors.message}</span>}
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xs bg-danger-bg px-3.5 py-2.5 text-body-sm font-semibold text-danger-ink">
                <AlertCircle size={16} className="shrink-0" />
                {errorMessage || "Something went wrong. Please try again."}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary mt-2 w-full justify-center py-3.75 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight size={17} strokeWidth={2.5} />
                </>
              )}
            </button>
          </form>
        )}
        </div>
      </motion.div>
    </div>
  );
}