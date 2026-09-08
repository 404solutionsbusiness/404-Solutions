import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

/* Sections the scroll-spy can track (Blog has no section; Contact is a modal) */
const spySections = navLinks
  .filter((l) => !["Blog", "Contact"].includes(l.label))
  .map((l) => ({ label: l.label, id: l.href.slice(1) }));

export default function Navbar({
  onOpenContact,
  onOpenBlog,
  isBlogPage,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(() => (isBlogPage ? "Blog" : "Home"));

  useEffect(() => {
    if (isBlogPage) return;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      /* Near the top the hero and the next section both sit in the spy band,
         so pin Home explicitly rather than letting the observer decide. */
      if (y < 120) setActive("Home");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBlogPage]);

  /* Highlight the section actually in view rather than the last one clicked. */
  useEffect(() => {
    const targets = spySections
      .map(({ label, id }) => {
        const el = document.getElementById(id);
        return el ? { label, el } : null;
      })
      .filter(Boolean);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const match = targets.find((t) => t.el === visible.target);
        if (match) setActive(match.label);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    targets.forEach((t) => observer.observe(t.el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleTalkClick = (e) => {
    if (onOpenContact) {
      e.preventDefault();
      onOpenContact();
    }
  };

  return (
    <>
      <motion.header
        className={`sticky inset-x-0 top-0 z-100 backdrop-blur-[14px]
                    transition-all duration-300 ease-clay ${
                      scrolled
                        ? "bg-bg/96 py-3 shadow-nav"
                        : "bg-bg/88 py-4"
                    }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-page items-center justify-between px-5 md:px-8 lg:px-12">
          {/* Logo */}
          <a href={isBlogPage ? "/" : "#home"} className="group flex items-center no-underline" aria-label="404 Solution Home">
            <img
              src="/logo.png"
              alt="404 Solution Logo"
              width={1024}
              height={467}
              fetchPriority="high"
              className="h-13.5 w-auto object-contain drop-shadow-logo
                         transition-[translate,scale,rotate] duration-250 ease-clay group-hover:scale-105"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={
                  link.label === "Blog"
                    ? link.href
                    : isBlogPage
                      ? `/${link.href}`
                      : link.href
                }
                className={`relative pb-1.5 text-nav no-underline transition-colors
                            duration-200 ease-clay hover:text-ink ${
                              active === link.label
                                ? "font-bold text-ink"
                                : "font-semibold text-ink-mid"
                            }`}
                onClick={(e) => {
                  setActive(link.label);
                  if (link.label === "Blog" && onOpenBlog) {
                    e.preventDefault();
                    onOpenBlog();
                  }
                  if (link.label === "Contact" && onOpenContact) {
                    e.preventDefault();
                    onOpenContact();
                  }
                }}
              >
                {link.label}
                {active === link.label && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-0.5 left-1/2 block size-1.25
                               -translate-x-1/2 rounded-full bg-brand"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            onClick={handleTalkClick}
            className="hidden items-center gap-3 rounded-full bg-ink-deep py-2 pr-2.5 pl-5.5
                       text-sm font-bold text-white no-underline shadow-nav-cta
                       transition-all duration-250 ease-clay hover:-translate-y-0.5
                       hover:bg-ink-deep-hover hover:shadow-nav-cta-hover active:translate-y-px lg:inline-flex"
          >
            <span>Let&rsquo;s Talk</span>
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full
                         bg-brand-gradient shadow-inset-hi"
              aria-hidden="true"
            >
              <ArrowUpRight size={14} />
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex cursor-pointer rounded-btn border border-hairline-warm
                       bg-white p-2 text-ink shadow-hairline-lift
                       transition-[translate,scale,rotate] duration-250 ease-clay active:scale-95 lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-x-0 top-18 z-99 border-b-2 border-cream-deep
                       bg-cream-card px-6 py-7 shadow-drawer lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={
                    link.label === "Blog"
                      ? link.href
                      : isBlogPage
                        ? `/${link.href}`
                        : link.href
                  }
                  className="block border-b border-black/5 py-3 text-lg font-bold
                             text-ink no-underline transition-[color,padding-left]
                             duration-200 ease-clay hover:pl-2 hover:text-brand"
                  onClick={(e) => {
                    setActive(link.label);
                    if (link.label === "Blog" && onOpenBlog) {
                      e.preventDefault();
                      onOpenBlog();
                    }
                    if (link.label === "Contact" && onOpenContact) {
                      e.preventDefault();
                      onOpenContact();
                    }
                    setMobileOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="btn-primary mt-6 w-full justify-center py-3.75 text-base"
                onClick={(e) => {
                  handleTalkClick(e);
                  setMobileOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
              >
                Let&rsquo;s Talk <ArrowUpRight size={16} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
