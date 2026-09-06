import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { rise, stagger, revealProps } from "./motion";

import webDevelopment from "../assets/services/web-development.png";
import uiuxDesign from "../assets/services/uiux-design.png";
import socialMedia from "../assets/services/social-media.png";
import digitalGrowth from "../assets/services/digital-growth.png";

const services = [
  {
    title: "Web Development",
    description: "Fast, responsive and scalable websites & web apps.",
    image: webDevelopment,
    width: 1454,
    height: 1082,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful interfaces that your users will love.",
    image: uiuxDesign,
    width: 1448,
    height: 1086,
  },
  {
    title: "Social Media",
    description: "Content, strategy & management that grows your brand.",
    image: socialMedia,
    width: 1448,
    height: 1086,
  },
  {
    title: "Digital Growth",
    description: "Data-driven strategies to take your business to the next level.",
    image: digitalGrowth,
    width: 1448,
    height: 1086,
  },
];

export default function Services({ onOpenContact }) {
  const openContact = (e) => {
    if (!onOpenContact) return;
    e.preventDefault();
    onOpenContact();
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full pt-2.5 pb-7.5 sm:pt-3.75 lg:pt-4.5 lg:pb-8.5"
    >
      <div className="mx-auto w-full max-w-page px-5 md:px-8 lg:px-12">

        {/* The design has no visible services heading; keep one for crawlers
            and screen readers without changing the layout. */}
        <h2 id="services-heading" className="sr-only">
          Our services
        </h2>

        <motion.div
          variants={stagger(0.09)}
          {...revealProps}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={rise}
              className="group relative flex min-h-40 flex-col overflow-hidden
                         rounded-card border border-hairline-strong bg-service-card
                         p-4 shadow-tile transition-[translate,scale,rotate,box-shadow]
                         duration-250 ease-clay hover:-translate-y-0.75 hover:shadow-tile-hover
                         sm:min-h-45 sm:px-3.5 sm:pt-4.25 sm:pb-3.25 lg:min-h-43.5"
            >
              <div className="mb-1.75 flex h-17.5 w-full items-center justify-start sm:h-19.5 lg:h-19 lg:justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  width={service.width}
                  height={service.height}
                  decoding="async"
                  className="pointer-events-none block h-16.25 w-auto max-w-26.25 select-none
                             object-contain drop-shadow-tile-art transition-[translate,scale,rotate]
                             duration-250 ease-clay group-hover:-translate-y-0.5
                             group-hover:scale-[1.03] sm:h-17.5 sm:max-w-27.5"
                />
              </div>

              <div className="pr-7">
                <h3 className="mb-1.25 font-extrabold text-label-md text-ink sm:text-label">
                  {service.title}
                </h3>
                <p className="max-w-60 font-medium text-micro-md text-ink-soft sm:max-w-46.25 sm:text-micro">
                  {service.description}
                </p>
              </div>

              <a
                href="#contact"
                onClick={openContact}
                aria-label={`Learn more about ${service.title}`}
                className="absolute right-3.25 bottom-3.25 flex size-6.25 items-center
                           justify-center rounded-full bg-brand-gradient-soft text-white
                           no-underline shadow-arrow transition-[translate,scale,rotate,box-shadow]
                           duration-250 ease-clay hover:-translate-y-0.5 hover:rotate-6
                           hover:shadow-arrow-hover active:translate-y-0 sm:right-2.5 sm:bottom-2.5 sm:size-5.25"
              >
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
