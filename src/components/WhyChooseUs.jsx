import { motion } from "framer-motion";
import { rise, stagger, revealProps } from "./motion";
import shieldImage from "../assets/why-shield.png";
import teamImage from "../assets/why-team.png";
import tabletImage from "../assets/why-tablet.png";
import headphonesImage from "../assets/why-headphones.png";

/*
  The PNGs carry transparent padding around the 3D object, so each one is sized
  individually and absolutely positioned inside a fixed-height visual area.
*/
const reasons = [
  {
    id: "built",
    title: "Built for your business",
    description:
      "We don't believe in one-size-fits-all. Solutions tailored to your needs.",
    image: shieldImage,
    width: 2172,
    height: 724,
    imageWidth: "w-62.5 sm:w-68.75 md:w-77.5 xl:w-75",
    alt: "3D purple shield",
  },
  {
    id: "design-dev",
    title: "Design + Development",
    description: "Everything under one roof from idea to deployment.",
    image: teamImage,
    width: 1983,
    height: 793,
    imageWidth: "w-72.5 sm:w-78.75 md:w-90 xl:w-87.5",
    alt: "3D team illustration",
  },
  {
    id: "mobile",
    title: "Mobile First",
    description: "We build responsive experiences that look perfect everywhere.",
    image: tabletImage,
    width: 1704,
    height: 923,
    imageWidth: "w-66.25 sm:w-71.25 md:w-80 xl:w-77.5",
    alt: "3D purple tablet",
  },
  {
    id: "support",
    title: "Long-term Support",
    description: "We're with you even after launch whenever you need us.",
    image: headphonesImage,
    width: 1918,
    height: 820,
    imageWidth: "w-68.75 sm:w-75 md:w-85 xl:w-82.5",
    alt: "3D purple headphones",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" aria-labelledby="why-heading" className="relative pt-8 pb-13.75 sm:pt-10.5 sm:pb-18">
      <div className="mx-auto w-full max-w-page px-5 md:px-8 lg:px-12">

        <h2 id="why-heading" className="mb-4 block text-eyebrow uppercase text-brand sm:mb-4.5">
          Why Choose 404 Solution?
        </h2>

        <motion.div
          variants={stagger(0.09)}
          {...revealProps}
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-5.5"
        >
          {reasons.map((item) => (
            <motion.article
              key={item.id}
              variants={rise}
              className="group relative flex min-h-57.5 flex-col overflow-hidden
                         rounded-why-sm border border-hairline bg-cream-card p-5
                         shadow-why transition-[translate,scale,rotate,box-shadow] duration-300
                         ease-clay hover:-translate-y-1.5 hover:shadow-why-hover
                         sm:min-h-61.25 sm:rounded-why sm:px-5.5 sm:pt-5.5 sm:pb-6
                         md:min-h-66.25 xl:min-h-67.5 xl:px-7 xl:pt-6.5 xl:pb-7"
            >
              {/* 3D image */}
              <div className="relative mb-3 flex h-24.5 w-full items-center justify-center sm:mb-4 sm:h-26.25 md:h-31.25 xl:h-29.5">
                <img
                  src={item.image}
                  alt={item.alt}
                  draggable="false"
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className={`pointer-events-none absolute block h-auto max-w-none
                              select-none object-contain drop-shadow-card-art
                              transition-[translate,scale,rotate] duration-350 ease-clay
                              group-hover:-translate-y-1.75 group-hover:scale-[1.04]
                              ${item.imageWidth}`}
                />
              </div>

              {/* Content */}
              <div className="relative z-2 mt-auto">
                <h3 className="mb-1.75 font-extrabold text-base text-ink sm:mb-2.25 sm:text-card-title">
                  {item.title}
                </h3>
                <p className="max-w-75 font-medium text-xs/normal text-ink-soft sm:max-w-61.25 sm:text-desc">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
