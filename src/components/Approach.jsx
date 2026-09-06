import { motion } from "framer-motion";
import { approachSteps } from "../data/projects";
import { rise, riseSm, stagger, revealProps } from "./motion";

const stepGradients = [
  "linear-gradient(135deg, #8A5BFE 0%, #6835F9 100%)", // 01 Purple
  "linear-gradient(135deg, #FDE68A 0%, #F5BE38 100%)", // 02 Yellow
  "linear-gradient(135deg, #86EFAC 0%, #22C55E 100%)", // 03 Green
  "linear-gradient(135deg, #8A5BFE 0%, #6835F9 100%)", // 04 Purple
];

export default function Approach() {
  return (
    <section id="about" aria-labelledby="approach-heading" className="pt-7.5 pb-11.25">
      <div className="mx-auto w-full max-w-page px-5 md:px-8 lg:px-12">
        <motion.div
          variants={rise}
          {...revealProps}
          className="clay-card grid grid-cols-1 items-center gap-9 bg-cream-card
                     px-9 py-11 xl:grid-cols-[calc(var(--spacing)*90)_1fr] xl:gap-10 xl:px-15 xl:py-14"
        >
          {/* Left heading */}
          <div className="flex flex-col items-start">
            <span className="inline-block text-eyebrow uppercase text-brand">
              Our Approach
            </span>
            <h2
              id="approach-heading"
              className="mt-1.5 mb-4 font-black text-h2 text-ink"
            >
              We keep it simple<br />
              <span className="block">but effective.</span>
            </h2>
            <div className="h-1 w-13 rounded-full bg-brand" aria-hidden="true" />
          </div>

          {/* Right steps with connecting dotted line */}
          <div className="relative w-full">
            <div
              className="pointer-events-none absolute inset-x-0 top-4.5 z-1 hidden h-12.5 md:block"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 760 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="size-full"
              >
                <path
                  d="M 60 40 Q 150 15, 250 40 T 500 40 T 700 40"
                  stroke="#DDD4C6"
                  strokeWidth="3.5"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>

            <motion.div
              variants={stagger(0.1, 0.15)}
              {...revealProps}
              className="relative z-2 grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-4"
            >
              {approachSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  variants={riseSm}
                  className="group flex flex-row items-center gap-4.5 text-left
                             md:flex-col md:gap-0 md:text-center"
                >
                  <div
                    className="flex size-15.5 shrink-0 items-center justify-center
                               rounded-block text-xl font-black text-white shadow-clay-block
                               transition-[translate,scale,rotate] duration-250 ease-clay
                               group-hover:-translate-y-1 group-hover:scale-[1.06]
                               md:mb-4.5"
                    style={{ background: stepGradients[i] }}
                  >
                    <span>{step.number}</span>
                  </div>

                  <div>
                    <h3 className="mb-2 font-extrabold text-step text-ink">
                      {step.title}
                    </h3>
                    <p className="font-medium text-body-sm text-ink-mid md:max-w-35">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
