import { useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Work from "./components/Work";
import SocialMedia from "./components/SocialMedia";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    /* reducedMotion="user" makes every Framer animation honour the OS setting */
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="absolute -top-full left-5 z-9999 rounded-full bg-brand px-6 py-3
                   font-bold text-white no-underline transition-[top] duration-200
                   ease-clay focus:top-5"
      >
        Skip to main content
      </a>
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <main id="main-content">
        <Hero onOpenContact={() => setContactOpen(true)} />
        <Services onOpenContact={() => setContactOpen(true)} />
        <Approach />
        <Work onOpenContact={() => setContactOpen(true)} />
        <SocialMedia onOpenContact={() => setContactOpen(true)} />
        <WhyChooseUs />
        <CTA onOpenContact={() => setContactOpen(true)} />
      </main>
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Interactive Contact Modal connected to Google Forms */}
      <AnimatePresence>
        {contactOpen && <Contact onClose={() => setContactOpen(false)} />}
      </AnimatePresence>
    </MotionConfig>
  );
}
