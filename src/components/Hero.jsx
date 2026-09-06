import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { rise, riseSm, stagger, enterProps } from "./motion";
import hero404 from "../assets/hero-404.png";

const clients = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=85",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=85",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=85",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=85",
];

export default function Hero({ onOpenContact }) {
  const openContact = (e) => {
    if (!onOpenContact) return;
    e.preventDefault();
    onOpenContact();
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-bg pt-6 pb-9.5 lg:pt-5.5 lg:pb-6.25">
      <div
        className="mx-auto flex w-full max-w-page flex-col gap-3 px-5 md:grid
                   md:min-h-[clamp(23.75rem,42vh,35rem)] md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-0
                   md:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-3 lg:px-12"
      >
        {/* LEFT */}
        <motion.div
          variants={stagger(0.09, 0.1)}
          {...enterProps}
          className="relative z-5 flex w-full flex-col items-start md:pl-1.25 lg:pl-3"
        >

          <motion.div
            variants={riseSm}
            className="mb-3.75 inline-flex h-6 items-center gap-1.5 rounded-full
                       border border-brand/12 bg-brand-pale px-2.75 text-micro
                       font-extrabold tracking-[0.13em] whitespace-nowrap text-brand
                       md:mb-4.25"
          >
            <span className="size-1.25 shrink-0 rounded-full bg-brand ring-3 ring-brand/8" />
            <span>WE BUILD. YOU GROW.</span>
          </motion.div>

          <motion.h1 variants={riseSm} className="max-w-140 font-black text-hero text-ink">
            Your Digital Problem.
            <br />
            Our <span className="text-brand">404</span> Solutions.
          </motion.h1>

          <motion.p variants={riseSm} className="mt-4.25 mb-5 font-medium text-hero-body text-ink-soft">
            We build modern websites, handle your
            <br />
            social media and create digital solutions
            <br />
            that drive real results.
          </motion.p>

          <motion.div variants={riseSm} className="mb-5.5 flex items-center gap-2.25">
            <a
              href="#contact"
              onClick={openContact}
              className="inline-flex h-9.5 items-center justify-center gap-2 rounded-full
                         bg-brand-gradient-deep px-4.25 text-btn-sm font-bold text-white
                         no-underline shadow-hero-btn transition-[translate,scale,rotate,box-shadow]
                         duration-200 ease-clay hover:-translate-y-0.5 hover:shadow-hero-btn-hover
                         active:translate-y-px"
            >
              <span>Start a Project</span>
              <ArrowRight size={15} strokeWidth={2.8} />
            </a>

            <a
              href="#work"
              className="inline-flex h-9.5 items-center justify-center gap-2 rounded-full
                         border border-hairline-solid bg-white px-3.25 text-btn-sm
                         font-bold text-ink no-underline shadow-hero-btn-alt
                         transition-[translate,scale,rotate,box-shadow] duration-200 ease-clay
                         hover:-translate-y-0.5 hover:shadow-hero-btn-alt-hover active:translate-y-px"
            >
              <span>Explore Our Work</span>
              <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-brand-pale text-brand">
                <Play size={9} fill="currentColor" strokeWidth={0} />
              </span>
            </a>
          </motion.div>

          {/* CLIENTS */}
          <motion.div variants={riseSm} className="flex items-center gap-2.25">
            <div className="flex items-center">
              {clients.map((client, index) => (
                <img
                  key={index}
                  src={client}
                  alt=""
                  width={80}
                  height={80}
                  decoding="async"
                  className="-ml-1.5 size-6.25 shrink-0 rounded-full border-2
                             border-bg object-cover shadow-avatar first:ml-0"
                />
              ))}
              <span
                className="relative z-5 -ml-1.5 flex size-6.25 shrink-0 items-center
                           justify-center rounded-full border-2 border-bg
                           bg-brand-gradient-avatar text-micro font-extrabold
                           text-white shadow-avatar-more"
              >
                50+
              </span>
            </div>

            <div className="flex flex-col gap-px text-micro/tight text-ink-soft">
              <strong className="font-bold text-ink-mid">Happy Clients</strong>
              <span>across the globe</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={rise}
          {...enterProps}
          className="relative mt-0.75 flex w-full items-center justify-center md:mt-0 md:h-full md:min-h-[clamp(23.75rem,42vh,35rem)]">
          {/* Decorative star */}
          <div className="pointer-events-none absolute top-[5%] left-[1%] z-3 size-5.25 text-ink md:top-9.5 md:left-0 md:size-5.75">
            <svg viewBox="0 0 40 40" aria-hidden="true" className="block size-full">
              <path
                d="M20 0L23.5 15.5L40 20L23.5 24.5L20 40L16.5 24.5L0 20L16.5 15.5L20 0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Decorative sparkle */}
          <div className="pointer-events-none absolute top-[8%] right-[2%] z-3 size-3.5 text-brand-light md:top-16.75 md:right-1 md:size-3.75">
            <svg viewBox="0 0 30 30" aria-hidden="true" className="block size-full">
              <path
                d="M15 0L17.5 12.5L30 15L17.5 17.5L15 30L12.5 17.5L0 15L12.5 12.5L15 0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="relative z-2 mx-auto flex w-full max-w-140 items-center justify-center md:max-w-100 lg:max-w-113.75 xl:max-w-120 xl:translate-x-1">
            <img
              src={hero404}
              alt="404 Solutions"
              width={1416}
              height={1111}
              fetchPriority="high"
              decoding="async"
              className="block h-auto w-full max-w-140 object-contain select-none
                         drop-shadow-hero md:max-w-100 lg:max-w-113.75 xl:max-w-120"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
