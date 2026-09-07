import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { rise, revealProps } from "./motion";

const WELCOME_AUDIO_SRC = "/audio/welcome-404-solutions.mp3";

export default function CTA({ onOpenContact }) {
  const [isGreeting, setIsGreeting] = useState(false);
  const audioRef = useRef(null);
  const audioPlayingRef = useRef(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (onOpenContact) onOpenContact();
  };

  const playGreeting = () => {
    if (audioPlayingRef.current) return;

    audioPlayingRef.current = true;
    setIsGreeting(true);

    const audio = audioRef.current || new Audio(WELCOME_AUDIO_SRC);
    audioRef.current = audio;

    const finishGreeting = () => {
      audioPlayingRef.current = false;
      setIsGreeting(false);
    };

    audio.addEventListener("ended", finishGreeting, { once: true });
    audio.addEventListener("error", finishGreeting, { once: true });
    audio.currentTime = 0;

    try {
      const playback = audio.play();
      playback?.catch(finishGreeting);
    } catch {
      finishGreeting();
    }
  };

  const handleRobotKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      playGreeting();
    }
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
          <motion.div
            role="button"
            tabIndex={0}
            aria-label="Robot mascot — play welcome message"
            aria-pressed={isGreeting}
            onClick={playGreeting}
            onKeyDown={handleRobotKeyDown}
            animate={isGreeting ? { y: [0, -3, 0], scale: [1, 1.015, 1] } : { y: 0, scale: 1 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            className="group pointer-events-auto absolute right-0 bottom-0 z-100 block h-60 cursor-pointer
                       w-51.25 overflow-visible sm:right-1.25 sm:h-66.25 sm:w-56.25
                       md:right-3.75 md:h-78.75 md:w-71.25 lg:right-10 lg:h-90 lg:w-82.5"
          >
            <motion.span
              aria-hidden="true"
              initial={{ y: 0 }}
              whileInView={{ y: [0, -3, 0] }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
              className="absolute top-28 -left-6 z-2 flex h-10 w-24 items-center justify-center
                         whitespace-nowrap rounded-[20px] border border-brand/20 bg-cream-card px-2
                         text-center text-xs/none font-semibold text-ink
                         shadow-[0_8px_18px_rgb(91_39_229/0.12)]
                         after:pointer-events-none after:absolute after:-bottom-1 after:right-6
                         after:size-2.5 after:rounded-full after:border after:border-brand/20
                         after:bg-cream-card after:shadow-[2px_2px_5px_rgb(91_39_229/0.08)]
                         sm:top-34 sm:-left-8 sm:h-11 sm:w-28 sm:text-[13px]
                         md:top-38 md:-left-10 md:w-[118px] lg:top-40 lg:-left-16 lg:h-12
                         lg:w-32 lg:text-sm"
            >
              <span className="lg:group-hover:hidden">
                {isGreeting ? "Hey! 👋" : "👋 Tap me!"}
              </span>
              <span className="hidden lg:group-hover:inline">
                {isGreeting ? "Hey! 👋" : "Say hi 👋"}
              </span>
            </motion.span>
            <img
              src="/assets/cta-robot.png"
              alt=""
              width={1047}
              height={1086}
              loading="lazy"
              decoding="async"
              className="absolute bottom-0 left-1/2 block h-full w-full max-w-none
                         -translate-x-1/2 object-contain object-bottom origin-bottom
                         drop-shadow-robot"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}