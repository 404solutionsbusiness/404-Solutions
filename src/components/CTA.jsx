import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { rise, revealProps } from "./motion";

export default function CTA({ onOpenContact }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onOpenContact) onOpenContact();
  };

  return (
    /* overflow-visible throughout: the robot deliberately overhangs the card */
    <section
      aria-label="Call to action"
      className="relative w-full overflow-visible pt-10 pb-18.75 sm:pt-11.25 sm:pb-21.25
                 md:pt-12.5 lg:pt-13.75 lg:pb-22.5 xl:pt-15 xl:pb-25"
    >
      <div className="mx-auto w-full max-w-page px-5 md:px-8 lg:px-12">
        <motion.div
          variants={rise}
          {...revealProps}
          className="relative isolate block h-87.5 w-full overflow-visible rounded-md
                     bg-cta-gradient px-5.25 py-6.75 shadow-cta sm:h-91.25 sm:rounded-cta-sm
                     sm:px-6.25 sm:py-7.5 md:flex md:h-58.75 md:items-center md:rounded-cta-md
                     md:px-9.5 md:py-8.5 lg:h-62.5 lg:rounded-cta lg:px-13 lg:py-9.5"
        >
          {/* Soft light bloom behind the artwork */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[-260px] right-10 -z-1
                       size-112.5 rounded-full bg-cta-glow"
          />

          {/* Left content */}
          <div className="relative z-5 flex w-full flex-col items-start md:w-2/3 md:-translate-y-0.5 lg:w-13/20">
            <h2 className="text-balance font-extrabold text-cta text-white">
              Still seeing 404?
              <br />
              Let&apos;s turn it into a solution.
            </h2>

            <a
              href="#contact"
              onClick={handleClick}
              className="mt-4.5 inline-flex min-h-10.5 items-center justify-center gap-2.75
                         rounded-full bg-white py-1.5 pr-1.75 pl-4.25 font-sans text-xs/none
                         font-extrabold text-ink no-underline shadow-cta-btn
                         transition-[translate,scale,rotate,box-shadow] duration-250 ease-clay
                         hover:-translate-y-0.5 hover:shadow-cta-btn-hover active:translate-y-px
                         sm:mt-5 md:mt-5.75 md:min-h-10.75 md:pl-4.75"
            >
              <span>Start a Project</span>
              <span
                className="flex size-7 shrink-0 items-center justify-center rounded-full
                           bg-brand-btn text-white shadow-inset-hi md:size-7.25"
              >
                <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
              </span>
            </a>
          </div>

          {/* Right 3D robot — overhangs the card bottom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 bottom-0 z-100 block h-60
                       w-51.25 overflow-visible sm:right-1.25 sm:h-66.25 sm:w-56.25
                       md:right-3.75 md:h-78.75 md:w-71.25 lg:right-10 lg:h-90 lg:w-82.5"
          >
            <img
              src="/assets/cta-robot.png"
              alt=""
              width={1047}
              height={1086}
              loading="lazy"
              decoding="async"
              className="absolute -bottom-5.5 left-1/2 block h-full w-full max-w-none
                         -translate-x-1/2 object-contain object-bottom origin-bottom
                         drop-shadow-robot sm:-bottom-6.25 md:-bottom-7 lg:-bottom-1.875"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
