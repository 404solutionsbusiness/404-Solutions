import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const footerLinks = {
  Services: ["Web Development", "UI/UX Design", "Social Media", "Digital Growth"],
  Company: ["About Us", "Our Work", "Blog", "Careers"],
  Support: ["Help Center", "FAQ", "Terms & Conditions", "Privacy Policy"],
};

const socials = [
  {
    label: "Facebook",
    icon: (
      <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      >
      <path
      d="M14.2 8.2h2.3V4.5c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.4 2-5.4 5.6v3.1H4.4v4.1h3.5V23h4.3v-5.9h3.5l.6-4.1h-4.1V10.3c0-1.2.3-2.1 2-2.1Z"
      fill="currentColor"
      />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      >
      <path
      d="M5.2 7.1A2.1 2.1 0 1 0 5.2 3a2.1 2.1 0 0 0 0 4.1ZM3.5 8.7h3.4V20H3.5V8.7Zm5.5 0h3.3v1.55h.05c.46-.87 1.58-1.78 3.26-1.78 3.49 0 4.14 2.3 4.14 5.3V20h-3.4v-5.52c0-1.32-.02-3.01-1.83-3.01-1.83 0-2.11 1.43-2.11 2.92V20H9V8.7Z"
      fill="currentColor"
      />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      >
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
      <circle
      cx="17.5"
      cy="6.7"
      r="1.1"
      fill="currentColor"
      />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      >
      <path
      d="M5 4h4.2l3.1 4.5L16.1 4H19l-5.3 6.2L19.5 20h-4.2l-3.5-5-4.2 5H4.7l5.5-6.5L5 4Zm3.8 1.9H8l7.5 12.2h.9L8.8 5.9Z"
      fill="currentColor"
      />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      >
      <path
      d="M21 7.1a2.7 2.7 0 0 0-1.9-1.9C17.4 4.7 12 4.7 12 4.7s-5.4 0-7.1.5A2.7 2.7 0 0 0 3 7.1c-.5 1.7-.5 4.9-.5 4.9s0 3.2.5 4.9a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.1.5 7.1.5s5.4 0 7.1-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.9.5-4.9s0-3.2-.5-4.9Z"
      fill="currentColor"
      />
      <path
      d="m10.2 15.3 5-3.3-5-3.3v6.6Z"
      fill="#f4f0eb"
      />
      </svg>
    ),
  },
];

const linkClass =
  `inline-block font-medium text-body-xs text-ink-soft no-underline
   transition-[color,transform] duration-200 ease-clay
   hover:translate-x-0.5 hover:text-brand-btn sm:text-desc`;

const headingClass = "mt-0.5 mb-4 font-extrabold text-xs text-ink sm:mb-4.75 sm:text-sm";

/* Base geometry only — colour comes from the two variants below, so the two
   `bg-*` utilities never collide (class order in the string does not decide
   which wins; the stylesheet cascade does). */
const socialBase =
  `flex size-9 shrink-0 items-center justify-center rounded-xs border no-underline
   transition-[translate,scale,rotate,background-color,color,box-shadow] duration-200 ease-clay
   hover:-translate-y-0.75 hover:border-transparent hover:bg-brand-btn
   hover:text-white hover:shadow-social-hover active:translate-y-0 sm:size-9.25 sm:rounded-tile
   md:size-9.5 [&>svg]:block [&>svg]:size-4 sm:[&>svg]:size-4.25`;

const socialDefault = `${socialBase} border-hairline-soft bg-social-tile text-ink-mid shadow-social-tile`;
const socialBrand = `${socialBase} border-brand-btn/20 bg-brand-btn text-white shadow-social-brand`;

const contactIconClass =
  "flex size-6.25 shrink-0 items-center justify-center rounded-2xs bg-brand-btn/9 text-brand-btn sm:size-6.75";

export default function Footer({ onOpenContact }) {
  const handleContact = (e) => {
    e.preventDefault();
    if (onOpenContact) onOpenContact();
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Site footer"
      className="relative mt-2.5 w-full overflow-hidden border-t border-hairline-divider
                 bg-footer pt-10.5 pb-5.5 sm:mt-5 sm:pt-12 md:pt-14.5 md:pb-7
                 lg:pt-17 xl:pt-19"
    >
      <div className="mx-auto w-full max-w-page px-5 md:px-8 lg:px-12">

        {/* Main footer */}
        <div
          className="grid grid-cols-2 gap-x-5 gap-y-8.5 pb-9.5 sm:gap-x-6.5 sm:gap-y-9.5
                     md:grid-cols-4 md:gap-9.5 md:pb-12
                     xl:grid-cols-[2.25fr_1fr_1fr_1fr_1.35fr] xl:gap-12.5"
        >
          {/* Brand */}
          <div className="col-span-full flex min-w-0 flex-col items-start xl:col-span-1">
            <a href="#home" className="mb-4 inline-flex items-center no-underline sm:mb-4.5" aria-label="404 Solutions home">
              <img
                src="/logo.png"
                alt="404 Solutions"
                width={1024}
                height={467}
                loading="lazy"
                className="block h-11.25 w-auto max-w-45 object-contain drop-shadow-footer-logo sm:h-12 md:h-13"
              />
            </a>

            <p className="mb-5.25 max-w-72.5 font-medium text-body-xs text-ink-soft sm:mb-6 sm:max-w-82.5 sm:text-xs md:max-w-97.5 md:text-body-sm xl:max-w-70">
              We are a digital solutions company specializing in web development,
              social media and digital growth.
            </p>

            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-2.75" aria-label="Social media links">
              {socials.map((s, i) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className={i === 0 ? socialBrand : socialDefault}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([columnName, links]) => (
            <div key={columnName} className="flex min-w-0 flex-col items-start">
              <h3 className={headingClass}>{columnName}</h3>
              <ul role="list" className="flex list-none flex-col gap-2.5 p-0 sm:gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#contact" className={linkClass} onClick={handleContact}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-full flex min-w-0 flex-col items-start md:col-span-1">
            <h3 className={headingClass}>Contact</h3>
            <ul role="list" className="flex list-none flex-col gap-2.75 p-0 sm:gap-3.5">
              <li className="flex min-w-0 items-center gap-2 sm:gap-2.25">
                <span className={contactIconClass}>
                  <Mail size={14} strokeWidth={2} />
                </span>
                <a href="mailto:404solutions.business@gmail.com" className={`${linkClass} min-w-0 [overflow-wrap:anywhere]`}>
                  404solutions.business@gmail.com
                </a>
              </li>
              <li className="flex min-w-0 items-center gap-2 sm:gap-2.25">
                <span className={contactIconClass}>
                  <Phone size={14} strokeWidth={2} />
                </span>
                <a href="tel:+918637820298" className={`${linkClass} min-w-0 [overflow-wrap:anywhere]`}>
                  +91 86378 20298
                </a>
              </li>
              <li className="flex min-w-0 items-center gap-2 sm:gap-2.25">
                <span className={contactIconClass}>
                  <MapPin size={14} strokeWidth={2} />
                </span>
                <span className={linkClass}>Kolkata, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between gap-5 border-t border-hairline-divider pt-4.25 sm:pt-5.5">
          <p className="font-medium text-copy text-ink-light">
            © {new Date().getFullYear()} 404 Solutions. All rights reserved.
          </p>

          <a
            href="#home"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex size-9 shrink-0 items-center justify-center rounded-full
                       border border-hairline-warm bg-cream-card text-ink no-underline
                       shadow-back-top transition-[translate,scale,rotate,background-color,color]
                       duration-200 ease-clay hover:-translate-y-0.75 hover:bg-brand-btn
                       hover:text-white active:translate-y-0 sm:size-10"
          >
            <ArrowUp size={16} strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </footer>
  );
}
