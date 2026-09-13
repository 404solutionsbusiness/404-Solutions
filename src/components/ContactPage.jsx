import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Lock,
  MessageCircle,
  FileText,
  Users,
  Check,
  Zap,
  Heart,
  ChevronDown,
} from "lucide-react";
import {
  WEB3FORMS_ENDPOINT,
  WEB3FORMS_ACCESS_KEY,
  buildSubject,
} from "../config/contact";
import contactHero from "../assets/CONTACT-PAGE/HERO IMAGE.webp";

const services = [
  "Web Development",
  "UI/UX Design",
  "Social Media",
  "Digital Growth",
  "Other",
];
const questions = [
  [
    "How long does it take to get a response?",
    "We usually respond within 24 hours on business days.",
    MessageCircle,
  ],
  [
    "What information should I send?",
    "A brief idea about your goals, timeline, and requirements is enough to get started.",
    FileText,
  ],
  [
    "Do you work with small businesses?",
    "Yes! We work with businesses of all sizes, from startups to established brands.",
    Users,
  ],
  [
    "Can I discuss my project before committing?",
    "Absolutely. The first conversation is free and there’s no obligation.",
    Check,
  ],
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [openQuestion, setOpenQuestion] = useState(null);
  const update = (e) =>
    setForm((old) => ({ ...old, [e.target.name]: e.target.value }));
  const choose = (service) => setForm((old) => ({ ...old, service }));
  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Invalid email";
    if (!form.service) next.service = "Please select a service";
    if (!form.message.trim()) next.message = "Message is required";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", buildSubject(form));
    data.append("from_name", "404 Solution website");
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };
  const input =
    "w-full rounded-xl border border-brand/15 bg-white px-3.5 py-3 text-sm text-ink outline-none focus:border-brand";
  return (
    <main className="bg-bg text-ink">
      <section className="mx-auto grid max-w-page items-center gap-8 px-5 py-10 md:px-8 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-14">
        <div>
          <p className="text-xs font-black tracking-[.28em] text-brand">
            LET&apos;S TALK
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
            Let&apos;s Build
            <br />
            Something Great
            <br />
            <span className="text-brand">Together.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
            Tell us about your business, your goals, and what you&apos;re
            looking to build. We&apos;ll help you figure out the right next
            step.
          </p>
          <div className="mt-7 grid max-w-lg grid-cols-3 gap-4">
            {[
              [
                "Real People",
                "No chatbots, just conversations.",
                MessageCircle,
              ],
              ["Quick Response", "Usually within 24 hours.", Zap],
              ["No Obligation", "Just a friendly discussion.", Heart],
            ].map(([title, text, Icon]) => (
              <div key={title}>
                <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-white text-brand shadow-clay-soft">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-black">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={contactHero}
            alt="404 Solutions robot ready to talk"
            className="h-auto w-full max-w-[600px] object-contain"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-page gap-5 px-5 md:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-12">
        <aside className="rounded-2xl border border-white bg-white/80 p-6 shadow-clay-card">
          <h2 className="text-3xl font-black">Get in Touch</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            We&apos;d love to hear from you. Reach out through any of the
            channels below or
            <br />
            fill out the form and we&apos;ll get back to you soon.
          </p>
          <div className="mt-7 space-y-5">
            {[
              [Mail, "Email", "404solutions.business@gmail.com"],
              [Phone, "Phone", "+91 86378 20298"],
              [MapPin, "Location", "Kolkata, India"],
            ].map(([Icon, title, text]) => (
              <div className="flex items-center gap-3" key={title}>
                <span className="flex size-10 items-center justify-center rounded-full bg-brand text-white">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-black">{title}</h3>
                  <p className="text-sm text-ink-soft">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-6 border-brand/10" />
          <h3 className="font-black">Follow Us</h3>
          <div className="mt-3 flex gap-2.5" aria-label="Social media links">
            <span
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-lg bg-brand-pale text-brand"
            >
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                <path
                  d="M5.2 7.1A2.1 2.1 0 1 0 5.2 3a2.1 2.1 0 0 0 0 4.1ZM3.5 8.7h3.4V20H3.5V8.7Zm5.5 0h3.3v1.55h.05c.46-.87 1.58-1.78 3.26-1.78 3.49 0 4.14 2.3 4.14 5.3V20h-3.4v-5.52c0-1.32-.02-3.01-1.83-3.01-1.83 0-2.11 1.43-2.11 2.92V20H9V8.7Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <a href="https://www.instagram.com/404_solutions_?stkn=MWsxNXphOHU3ZDh1aQ==" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex size-9 items-center justify-center rounded-lg bg-brand-pale text-brand">
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                <rect
                  x="3.2"
                  y="3.2"
                  width="17.6"
                  height="17.6"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4.1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                />
                <circle cx="17.5" cy="6.7" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <span
              aria-label="X"
              className="flex size-9 items-center justify-center rounded-lg bg-brand-pale text-brand"
            >
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                <path
                  d="M5 4h4.2l3.1 4.5L16.1 4H19l-5.3 6.2L19.5 20h-4.2l-3.5-5-4.2 5H4.7l5.5-6.5L5 4Zm3.8 1.9H8l7.5 12.2h.9L8.8 5.9Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span
              aria-label="YouTube"
              className="flex size-9 items-center justify-center rounded-lg bg-brand-pale text-brand"
            >
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                <path
                  d="M21 7.1a2.7 2.7 0 0 0-1.9-1.9C17.4 4.7 12 4.7 12 4.7s-5.4 0-7.1.5A2.7 2.7 0 0 0 3 7.1c-.5 1.7-.5 4.9-.5 4.9s0 3.2.5 4.9a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.1.5 7.1.5s5.4 0 7.1-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.9.5-4.9s0-3.2-.5-4.9Z"
                  fill="currentColor"
                />
                <path d="m10.2 15.3 5-3.3-5-3.3v6.6Z" fill="#f4f0eb" />
              </svg>
            </span>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-brand-pale p-3">
            <Zap
              size={28}
              fill="currentColor"
              className="shrink-0 text-brand"
            />
            <div>
              <p className="font-black">Usually reply within 24 hours.</p>
              <p className="mt-1 text-xs text-ink-soft">
                We&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </aside>

        <section className="rounded-2xl border border-white bg-white/80 p-6 shadow-clay-card">
          <h2 className="text-2xl font-black">Send Us a Message</h2>
          <p className="mt-1 text-sm text-ink-soft">
            Tell us about your project and let&apos;s start a conversation.
          </p>
          {status === "success" ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <CheckCircle size={56} className="text-brand" />
              <h3 className="mt-4 text-2xl font-black">Message Sent!</h3>
              <p className="mt-2 text-ink-soft">
                We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["name", "Full Name", "John Doe"],
                  ["email", "Email Address", "you@example.com"],
                  ["phone", "Phone Number", "+91 86378 20298"],
                  ["company", "Company / Business", "Your Company Name"],
                ].map(([name, label, placeholder]) => (
                  <label className="text-sm font-bold" key={name}>
                    {label}
                    {(name === "name" || name === "email") && (
                      <span className="text-danger"> *</span>
                    )}
                    <input
                      name={name}
                      type={name === "email" ? "email" : "text"}
                      value={form[name]}
                      onChange={update}
                      placeholder={placeholder}
                      className={input + " mt-1.5"}
                    />
                    {errors[name] && (
                      <span className="block text-xs text-danger">
                        {errors[name]}
                      </span>
                    )}
                  </label>
                ))}
              </div>
              <fieldset>
                <legend className="text-sm font-bold">
                  What do you need help with?{" "}
                  <span className="text-danger">*</span>
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => choose(service)}
                      className={
                        "rounded-xl border px-3 py-2 text-xs font-bold " +
                        (form.service === service
                          ? "border-brand bg-brand-pale text-brand"
                          : "border-brand/15 bg-white text-ink")
                      }
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {errors.service && (
                  <span className="mt-1 block text-xs text-danger">
                    {errors.service}
                  </span>
                )}
                <input type="hidden" name="service" value={form.service} />
              </fieldset>
              <label className="block text-sm font-bold">
                Tell us about your project
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={update}
                  placeholder="Share your goals, ideas, timeline or anything else..."
                  className={input + " mt-1.5 resize-none text-left pt-6"}
                />
                {errors.message && (
                  <span className="block text-xs text-danger">
                    {errors.message}
                  </span>
                )}
              </label>
              {status === "error" && (
                <p className="text-sm font-bold text-danger">
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-black text-white disabled:opacity-60"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <ArrowRight size={17} />
                  </>
                )}
              </button>
              <p className="flex justify-center gap-2 text-xs text-ink-soft">
                <Lock size={14} /> Your information is safe with us. We never
                share your data.
              </p>
            </form>
          )}
        </section>
      </section>

      <section className="mx-auto max-w-page px-5 py-16 md:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black tracking-[.28em] text-brand">
              QUICK ANSWERS
            </p>
            <h2 className="mt-3 text-3xl font-black">Got Questions?</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Here are a few common questions about getting in touch.
            </p>
          </div>
        </div>
        <div className="mt-7 grid items-start gap-x-4 gap-y-2 md:grid-cols-2 md:gap-y-3">
          {questions.map(([question, answer, Icon]) => {
            const isOpen = openQuestion === question;
            return (
              <div
                key={question}
                className="min-h-[90px] rounded-2xl border border-white bg-white/80 p-5 shadow-clay-soft md:min-h-[90px]"
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-3 text-left font-black"
                  aria-expanded={isOpen}
                  onClick={() => setOpenQuestion(isOpen ? null : question)}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-pale text-brand">
                    <Icon size={18} />
                  </span>
                  <span>{question}</span>
                  <ChevronDown
                    className={`ml-auto shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 pl-13 text-sm text-ink-soft">{answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
