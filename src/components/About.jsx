import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Code2,
  FileText,
  Handshake,
  Heart,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import AboutFAQ from "./AboutFAQ";
import {
  whatWeDo,
  ourApproachSteps,
  whyChoose404,
  teamMembers,
  successMetrics,
  ourValues,
  contactJourneySteps,
} from "../data/about";
import aboutHeroImg from "../assets/about/about page hero.webp";
import aboutStoryImg from "../assets/about/about page 404 solution.webp";
import aboutRocketImg from "../assets/about/rocket about.webp";
import sudipProfileImg from "../assets/profile images/sudip.png";
const shell = "mx-auto w-full max-w-page px-5 md:px-8 lg:px-12";
const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
};
const approachIcons = [Search, FileText, Code2, BarChart3];
const approachDescriptionLines = {
  "01": ["Understand your business,", "audience and goals."],
  "02": ["Turn insights into a clear strategy", "and direction."],
  "03": ["Design and develop an experience", "that works."],
  "04": ["Improve, optimize and help", "your business move forward."],
};
const whyIcons = { Heart, Target, TrendingUp, Handshake };
const whyTitleLines = {
  "client-first": ["Client", "First"],
  "strategic-thinking": ["Strategic", "Thinking"],
  "result-oriented": ["Result-", "Oriented"],
  partnership: ["Long-Term", "Partnership"],
};
const successIcons = { Users, Activity, Award, ShieldCheck };
const successTitleLines = {
  leads: ["More", "Leads"],
  engagement: ["Higher", "Engagement"],
  brand: ["Stronger Brand", "Presence"],
  growth: ["Sustainable", "Growth"],
};
const teamAssets = import.meta.glob("../assets/about/team/*", {
  eager: true,
  query: "?url",
  import: "default",
});
const teamAssetFor = (name) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const assetEntries = Object.entries(teamAssets);
  if (name.toLowerCase().includes("sudip")) return sudipProfileImg;
  return assetEntries.find(([path]) =>
    path.toLowerCase().includes(`/team/${slug}.`),
  )?.[1];
};
function Label({ children }) {
  return (
    <span className="inline-flex rounded-full bg-brand-pale px-3 py-1 text-[10px] font-extrabold tracking-[.12em] text-brand">
      {children}
    </span>
  );
}
function Title({ label, title, copy, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Label>{label}</Label>
      <h2 className="mt-2 font-black text-h2 leading-[1.06] text-ink">
        {title}
      </h2>
      {copy && (
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{copy}</p>
      )}
    </div>
  );
}
function AboutCompactCTA({ onOpenContact }) {
  const handleClick = (e) => {
    e.preventDefault();
    onOpenContact?.();
  };
  return (
    <section className="py-5 lg:py-7">
      <div className={shell}>
        <div className="relative flex min-h-[360px] flex-col items-start gap-4 overflow-hidden rounded-2xl bg-cta-gradient px-5 py-5 text-white shadow-cta sm:min-h-[300px] sm:px-7 sm:py-6 md:min-h-[220px] md:grid md:grid-cols-[150px_minmax(0,1fr)_auto] md:items-center md:gap-4 md:px-6 md:py-4 lg:min-h-[92px] lg:grid-cols-[280px_minmax(0,1fr)_auto_150px] lg:gap-6 lg:px-9">
          <div className="relative z-20 flex h-10 w-fit shrink-0 items-center md:h-12 md:w-[150px] lg:w-[280px]">
            <img
              src="/logo.png"
              alt="404 Solutions"
              className="h-9 w-auto brightness-0 invert sm:h-11"
            />
          </div>
          <div className="pointer-events-none absolute bottom-0 left-auto right-4 z-10 h-24 w-24 translate-y-2 sm:right-8 sm:h-28 sm:w-28 md:left-16 md:right-auto md:h-28 md:w-28 lg:left-28 lg:h-32 lg:w-32 lg:translate-y-3">
            <img
              src={aboutRocketImg}
              alt=""
              className="h-full w-auto object-contain object-bottom"
            />
          </div>
          <div className="relative z-10 min-w-0 w-full max-w-[275px] px-0 md:w-auto md:max-w-none md:px-0 lg:flex-1 lg:px-9">
            <h2 className="text-xl font-black leading-tight sm:text-xl md:text-lg lg:text-xl">
              Ready to Build
              <br />
              Something Better?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-snug text-white/80 sm:text-xs lg:text-sm">
              Let’s create a digital experience that looks great, works
              beautifully, and helps your business grow.
            </p>
          </div>
          <a
            href="#contact"
            onClick={handleClick}
            className="relative z-20 inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-bold md:px-4 md:text-[10px] text-white no-underline sm:px-5"
          >
            Get a Free Consultation <ArrowRight size={13} />
          </a>
          <div className="hidden shrink-0 -rotate-6 md:hidden lg:block text-center text-sm font-semibold italic leading-none sm:block sm:text-lg lg:text-2xl">
            <span className="block">Better</span>
            <span className="block">Businesses</span>
            <span className="block">Ahead.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function About({ onOpenContact, onNavigate }) {
  const talk = (e) => {
    e?.preventDefault();
    onOpenContact?.();
  };
  const work = (e) => {
    e?.preventDefault();
    onNavigate?.("/#work");
  };
  return (
    <div className="about-page bg-bg text-ink">
      <section className="relative pt-7 pb-10 lg:pt-12 lg:pb-8">
        <div
          className={`${shell} grid items-center gap-8 lg:grid-cols-[.92fr_1.08fr] lg:gap-3`}
        >
          <motion.div {...reveal} className="relative z-10">
            <Label>ABOUT 404 SOLUTIONS</Label>
            <h1 className="mt-3 max-w-[680px] font-black text-hero leading-[.96] tracking-[-.055em]">
              We Build Digital Experiences That Move{" "}
              <span className="text-brand">Businesses Forward.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-soft lg:text-base">
              We’re a creative digital agency helping businesses build stronger
              brands, better websites, and digital experiences that turn
              attention into real results.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={talk}
                className="btn-primary inline-flex items-center gap-2 px-5 py-3 text-sm font-bold no-underline"
              >
                Let’s Talk <ArrowRight size={15} />
              </a>
              <a
                href="#work"
                onClick={work}
                className="btn-secondary inline-flex items-center gap-2 px-5 py-3 text-sm font-bold no-underline"
              >
                Explore Our Work <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src={aboutHeroImg}
              alt="404 Solutions creative team"
              width="1659"
              height="948"
              className="h-auto w-full max-w-[720px] object-contain"
            />
          </motion.div>
        </div>
      </section>
      <section className="py-8 lg:py-12">
        <div className={shell}>
          <motion.div
            {...reveal}
            className="grid items-center gap-7 rounded-[28px] bg-cream-card p-5 shadow-clay-card md:grid-cols-2 md:p-8 lg:gap-12 lg:p-10"
          >
            <div>
              <Title
                label="OUR STORY"
                title={
                  <>
                    More Than Just a<br className="hidden md:block" /> Digital
                    Agency.
                  </>
                }
              />
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
                <p>
                  404 Solutions started with a simple idea — to help businesses
                  grow through meaningful digital experiences.
                </p>
                <p>
                  We believe a website should do more than look good. It should
                  communicate clearly, create trust, and help turn visitors into
                  customers.
                </p>
                <p>
                  That’s why we combine strategy, design, development, and
                  digital growth under one roof.
                </p>
              </div>
            </div>
            <img
              src={aboutStoryImg}
              alt="Turning ideas into impact"
              width="1944"
              height="809"
              className="h-auto w-full rounded-2xl object-contain"
            />
          </motion.div>
        </div>
      </section>
      <section className="py-8 lg:py-12">
        <div
          className={`${shell} grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-center`}
        >
          <Title
            label="WHAT WE DO"
            title="Everything You Need to Grow Online."
            copy="From your first idea to long-term growth, we bring the essential digital pieces together."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((item) => (
              <motion.article
                {...reveal}
                key={item.id}
                className="group rounded-2xl border border-white/80 bg-white/75 p-5 shadow-tile transition hover:-translate-y-1 hover:shadow-tile-hover"
              >
                <div className="flex h-16 items-center">
                  <img
                    src={item.icon}
                    alt=""
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <h3 className="mt-4 font-extrabold text-base">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  onClick={talk}
                  aria-label={`Talk to us about ${item.title}`}
                  className="mt-4 flex size-7 items-center justify-center rounded-full bg-brand text-white"
                >
                  <ArrowUpRight size={14} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 lg:py-12">
        <div className={shell}>
          <div className="rounded-[28px] bg-white/70 p-5 shadow-clay-card md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
              <Title
                label="OUR APPROACH"
                title={
                  <>
                    A Simple Process.
                    <br />A Clear Path.
                  </>
                }
                copy={
                  <>
                    From your first idea to long-term growth, we keep things
                    simple,
                    <br />
                    strategic, and focused on results.
                  </>
                }
              />
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                {ourApproachSteps.map((s, i) => {
                  const Icon = approachIcons[i];
                  return (
                    <div
                      key={s.number}
                      className="transition-transform duration-300 ease-out hover:scale-105"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-pale text-lg font-black text-brand">
                          {s.number}
                        </div>
                        <Icon className="size-8 text-brand" strokeWidth={2.2} />
                      </div>
                      <div className="mt-3">
                        <h3 className="font-extrabold">{s.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                          {approachDescriptionLines[s.number].map((line) => (
                            <span className="block" key={line}>
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 lg:py-12">
        <div className={shell}>
          <div className="rounded-[28px] bg-brand-pale/70 p-5 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
              <div>
                <Title
                  label="WHY 404 SOLUTIONS?"
                  title={
                    <>
                      Built on Ideas.
                      <br />
                      Driven by Impact.
                    </>
                  }
                  copy={
                    <>
                      We don’t just build websites. We build digital experiences
                      designed to
                      <br />
                      help real businesses grow.
                    </>
                  }
                />
                <a
                  href="#our-values"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-bold text-white no-underline"
                >
                  Our Values <ArrowRight size={14} />
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {whyChoose404.map((v) => {
                  const Icon = whyIcons[v.icon];
                  return (
                    <div
                      key={v.id}
                      className="relative rounded-2xl bg-white/75 p-5 transition-all duration-300 ease-out hover:z-10 hover:scale-105 hover:bg-white hover:shadow-clay-card"
                    >
                      <div className="flex size-12 items-center justify-center rounded-xl bg-brand-pale text-brand">
                        <Icon size={25} strokeWidth={2.2} />
                      </div>
                      <h3 className="mt-4 font-extrabold">
                        {whyTitleLines[v.id].map((line) => (
                          <span className="block" key={line}>
                            {line}
                          </span>
                        ))}
                      </h3>
                      <p className="mt-1 text-xs text-ink-soft">
                        {v.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 lg:py-7">
        <div className={shell}>
          <div className="rounded-[28px] border border-white/80 bg-white/60 p-4 shadow-clay-card md:p-6 lg:p-7">
            <div className="grid gap-6 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
              <Title
                label="OUR TEAM"
                title={
                  <>
                    The People
                    <br />
                    Behind 404.
                  </>
                }
                copy="A small team with big ideas."
              />
              <div className="grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-4 lg:grid-cols-7">
                {teamMembers.slice(0, 7).map((m) => {
                  const image = teamAssetFor(m.name);
                  return (
                    <motion.div
                      {...reveal}
                      key={m.id}
                      className="group min-w-0 text-center"
                    >
                      <div className="relative mx-auto aspect-square w-full max-w-[112px] overflow-hidden rounded-xl bg-brand-pale/60 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-clay-card group-hover:z-10 cursor-pointer">
                        {image ? (
                          <img
                            src={image}
                            alt={m.name}
                            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <span className="flex h-full items-center justify-center text-xl font-black text-brand/50 transition-transform duration-300 ease-out group-hover:scale-110">
                            {m.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 truncate text-xs font-extrabold transition-colors duration-200 group-hover:text-brand">
                        {m.name}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 lg:py-12">
        <div className={shell}>
          <div className="rounded-[28px] bg-brand-pale/70 p-5 md:p-8 lg:p-10">
            <div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
              <Title
                label="HOW WE MEASURE SUCCESS"
                title={
                  <>
                    Real Growth.
                    <br />
                    Real Results.
                  </>
                }
                copy="We measure what matters — and we’re proud of the impact we create."
              />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {successMetrics.map((m) => {
                  const Icon = successIcons[m.icon];
                  return (
                    <div
                      key={m.id}
                      className="relative rounded-2xl border border-white/80 bg-white/75 p-4 transition-all duration-300 ease-out hover:z-10 hover:scale-105 hover:bg-white hover:shadow-clay-card"
                    >
                      <div className="flex size-12 items-center justify-center rounded-xl bg-brand-pale text-brand">
                        <Icon size={25} strokeWidth={2.2} />
                      </div>
                      <h3 className="mt-4 font-extrabold">
                        {successTitleLines[m.id].map((line) => (
                          <span className="block" key={line}>
                            {line}
                          </span>
                        ))}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                        {m.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="our-values" className="py-8 lg:py-12">
        <div className={shell}>
          <div className="grid gap-8 rounded-[28px] bg-cream-card p-5 shadow-clay-card md:p-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:p-10">
            <Title
              label="WHAT WE BELIEVE IN"
              title={
                <>
                  Simple Principles.
                  <br />
                  Better Work.
                </>
              }
              copy="The details matter. So do the relationships behind the work."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {ourValues.map((v, i) => (
                <div key={v.id} className="border-l-2 border-brand/25 pl-4">
                  <span className="text-3xl font-black text-brand/30">
                    0{i + 1}
                  </span>
                  <h3 className="font-extrabold">{v.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 lg:py-12">
        <div className={shell}>
          <div className="grid gap-8 rounded-[28px] bg-white/70 p-5 shadow-clay-card md:p-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:p-10">
            <Title
              label="WHAT HAPPENS AFTER YOU CONTACT US?"
              title="From Conversation to Collaboration."
              copy="A simple journey from your first message to real results."
            />
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
              {contactJourneySteps.map((s, i) => (
                <div
                  key={s.number}
                  className="relative flex gap-4 md:block md:text-center"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-black text-white md:mx-auto">
                    {s.number}
                  </div>
                  <div>
                    <span className="mt-3 block text-[10px] font-black text-brand">
                      {s.number}
                    </span>
                    <h3 className="mt-1 text-sm font-extrabold">{s.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                      {s.description}
                    </p>
                  </div>
                  {i < 4 && (
                    <div className="absolute left-[22px] top-12 h-8 border-l border-dashed border-brand/30 md:left-[calc(100%+4px)] md:top-5 md:h-0 md:w-[calc(100%-8px)] md:border-l-0 md:border-t" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AboutFAQ />
      <AboutCompactCTA onOpenContact={onOpenContact} />
    </div>
  );
}
