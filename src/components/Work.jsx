import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { rise, revealProps } from "./motion";

export default function Work({ onOpenContact }) {
  const openContact = (e) => {
    if (!onOpenContact) return;
    e.preventDefault();
    onOpenContact();
  };

  return (
    <section id="work" aria-labelledby="work-heading" className="pt-7.5 pb-11.25">
      <div className="mx-auto w-full max-w-page px-5 md:px-8 lg:px-12">
        <motion.div
          variants={rise}
          {...revealProps}
          className="clay-card grid grid-cols-1 items-center gap-8 bg-cream-card
                     px-6 py-8 md:grid-cols-2 md:px-9 md:py-10
                     xl:grid-cols-[calc(var(--spacing)*70)_calc(var(--spacing)*72.5)_1fr] xl:px-13 xl:py-12"
        >
          {/* Part 1: heading + view all */}
          <div
            className="col-span-full flex flex-col items-start border-hairline-divider
                       pb-6 md:border-b xl:col-span-1 xl:border-r xl:border-b-0
                       xl:pr-6 xl:pb-0"
          >
            <span className="inline-block text-eyebrow uppercase text-brand">Our Work</span>
            <h2 id="work-heading" className="mt-1.5 mb-6 font-black text-h2-sm text-ink">
              Some of our<br />recent work.
            </h2>
            <a href="#contact" onClick={openContact} className="btn-secondary px-5.5 py-3 text-sm">
              <span>View All Projects</span>
              <span
                className="flex size-5.5 items-center justify-center rounded-full
                           bg-brand-gradient text-white"
                aria-hidden="true"
              >
                <ArrowRight size={13} strokeWidth={3} />
              </span>
            </a>
          </div>

          {/* Part 2: project info */}
          <div className="flex flex-col items-start">
            <h3 className="mb-2 font-black text-project text-ink">E-Commerce Platform</h3>
            <span className="mb-4 inline-block rounded-full bg-brand-pale px-2.5 py-1 text-badge uppercase text-brand">
              Web Development
            </span>
            <p className="mb-5.5 font-medium text-sm/relaxed text-ink-mid">
              A modern e-commerce platform with powerful admin &amp; seamless shopping experience.
            </p>
            <a
              href="#contact"
              onClick={openContact}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-brand
                         no-underline transition-[gap] duration-200 ease-clay hover:gap-3"
            >
              <span>View Case Study</span>
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>

          {/* Part 3: laptop preview + next */}
          <div
            className="relative col-span-full flex flex-col items-center justify-center
                       gap-4 md:flex-row xl:col-span-1 xl:justify-between"
          >
            <div className="w-full max-w-110">
              <LaptopMockup />
            </div>
            <button type="button" className="btn-circle size-11.5" aria-label="Next Project">
              <ArrowRight size={19} strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* 3D Clay Laptop with Shopify E-Commerce Store */
function LaptopMockup() {
  return (
    <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full overflow-visible">
      <defs>
        <filter id="laptopShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#604530" floodOpacity="0.18" />
        </filter>
        <linearGradient id="laptopLid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EDE6DC" />
          <stop offset="100%" stopColor="#D5CDC0" />
        </linearGradient>
      </defs>

      {/* Screen Frame */}
      <g filter="url(#laptopShadow)">
        <rect x="35" y="16" width="370" height="240" rx="18" fill="url(#laptopLid)" stroke="#DDD4C6" strokeWidth="2" />
        {/* Inner Screen Bezel */}
        <rect x="43" y="24" width="354" height="224" rx="10" fill="#1C1A27" />

        {/* Browser Page Surface */}
        <rect x="47" y="28" width="346" height="216" rx="6" fill="#F8F6F2" />

        {/* Browser Top Navbar */}
        <rect x="47" y="28" width="346" height="26" fill="#EDE7DD" />
        <circle cx="60" cy="41" r="3.5" fill="#FF5F56" />
        <circle cx="70" cy="41" r="3.5" fill="#FFBD2E" />
        <circle cx="80" cy="41" r="3.5" fill="#27C93F" />
        <rect x="94" y="34" width="160" height="14" rx="7" fill="#FFFFFF" opacity="0.9" />

        {/* E-Commerce Store UI on Screen */}
        {/* Store Brand / Nav */}
        <text x="60" y="70" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" fontSize="11" fill="#12101B">
          Shopify
        </text>
        <rect x="310" y="60" width="65" height="16" rx="8" fill="#6835F9" />
        <text x="342" y="71.5" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="8" fill="#FFFFFF">
          Shop Now
        </text>

        {/* Hero Left Content */}
        <text x="60" y="98" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="13" fill="#12101B">
          Discover Your
        </text>
        <text x="60" y="114" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="13" fill="#12101B">
          Perfect Style
        </text>
        <rect x="60" y="126" width="110" height="6" rx="3" fill="#DDD4C6" />
        <rect x="60" y="136" width="85" height="6" rx="3" fill="#DDD4C6" />

        <rect x="60" y="152" width="60" height="20" rx="6" fill="#12101B" />
        <text x="90" y="165" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="8" fill="#FFFFFF">
          Buy Now
        </text>

        {/* Hero Right Images (2 Fashion Models matching reference) */}
        {/* Model 1 in dark jacket */}
        <rect x="195" y="85" width="75" height="100" rx="8" fill="#EAE3D6" />
        <circle cx="232" cy="110" r="14" fill="#C9BDAA" />
        <rect x="212" y="125" width="40" height="60" rx="6" fill="#2E2B38" />

        {/* Model 2 in yellow/brown coat */}
        <rect x="278" y="85" width="75" height="100" rx="8" fill="#F4EDE0" />
        <circle cx="315" cy="110" r="14" fill="#D9CCB8" />
        <rect x="295" y="125" width="40" height="60" rx="6" fill="#C29452" />

        {/* Bottom Small Product Thumbnails */}
        <rect x="60" y="196" width="38" height="34" rx="6" fill="#EAE3D6" />
        <rect x="105" y="196" width="38" height="34" rx="6" fill="#EAE3D6" />
        <rect x="150" y="196" width="38" height="34" rx="6" fill="#EAE3D6" />
      </g>

      {/* Laptop Base (Clay Aluminum Bottom Surface) */}
      <g filter="url(#laptopShadow)">
        <rect x="15" y="250" width="410" height="16" rx="8" fill="#D5CDC0" />
        <path d="M175 250 L265 250 L260 256 L180 256 Z" fill="#BDB3A4" />
      </g>
    </svg>
  );
}
