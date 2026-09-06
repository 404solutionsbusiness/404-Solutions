import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { rise, revealProps } from "./motion";

import socialMediaImage from "../assets/social-media.png";

export default function SocialMedia({ onOpenContact }) {
  const openContact = (e) => {
    if (!onOpenContact) return;
    e.preventDefault();
    onOpenContact();
  };

  return (
    /* overflow stays visible everywhere: the artwork deliberately escapes the card */
    <section id="social-media" className="w-full overflow-visible pt-4.5 pb-11.25 sm:pt-6 lg:pt-7 lg:pb-13.75 xl:pt-8 xl:pb-15.5">
      <div className="mx-auto w-full max-w-page px-5 md:px-8 lg:px-12">
        <motion.div
          variants={rise}
          {...revealProps}
          className="relative flex min-h-102.5 flex-col items-stretch overflow-visible
                     rounded-block border border-hairline-strong bg-card-white px-5 pt-6.25
                     shadow-panel sm:grid sm:min-h-63.75 sm:grid-cols-[0.82fr_1.18fr]
                     sm:items-center sm:rounded-block sm:px-6 sm:py-7 lg:min-h-67.5
                     xl:min-h-71.25 xl:grid-cols-[0.78fr_1.22fr] xl:rounded-md xl:px-7.5 xl:py-8"
        >
          <div className="relative z-5 w-full">
            <div className="mb-3 flex items-center gap-1.25 text-eyebrow-xs uppercase text-brand">
              <span className="size-1 shrink-0 rounded-full bg-brand" />
              Social Media That Connects
            </div>

            <h2 className="font-black text-social text-ink">
              Your brand deserves
              <br />
              more than just a post.
            </h2>

            <p className="mt-3 mb-4.25 font-medium text-social-body text-ink-soft">
              We create content that connects, engages
              <br />
              and converts your audience.
            </p>

            <a
              href="#contact"
              onClick={openContact}
              className="inline-flex h-9 items-center justify-center gap-1.75 rounded-full
                         bg-brand-gradient-cta px-3.75 text-btn-xs font-bold text-white
                         no-underline shadow-social-btn transition-[translate,scale,rotate,box-shadow]
                         duration-200 ease-clay hover:-translate-y-0.5
                         hover:shadow-social-btn-hover active:translate-y-px sm:h-8.75"
            >
              <span>Explore Social Media Services</span>
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>

          {/* Artwork intentionally overflows the card */}
          <div
            className="pointer-events-none absolute -right-4.5 -bottom-12 z-3 flex
                       w-[120%] items-center justify-end sm:top-[-28px] sm:right-[-25px]
                       sm:bottom-auto sm:w-17/25 lg:top-[-38px] xl:top-[-62px] xl:-right-10 xl:w-7/10"
          >
            <img
              src={socialMediaImage}
              alt="Social media marketing"
              width={1448}
              height={1086}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full max-w-none object-contain select-none
                         drop-shadow-social transition-[translate,scale,rotate] duration-300 ease-clay
                         sm:translate-y-1 xl:translate-y-1.75"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
