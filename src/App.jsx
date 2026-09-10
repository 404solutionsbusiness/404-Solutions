import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import BlogArticle from "./components/BlogArticle";
import UiUxArticle from "./components/UiUxArticle";
import SocialMediaArticle from "./components/SocialMediaArticle";
import SeoArticle from "./components/SeoArticle";
import MobileFirstArticle from "./components/MobileFirstArticle";
import EcommerceArticle from "./components/EcommerceArticle";
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
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPath) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo(0, 0);
  };

  const isBlogPage = path.replace(/\/$/, "") === "/blog";
  const normalizedPath = path.replace(/\/$/, "");
  const isUiUxArticlePage = normalizedPath === "/blog/ui-ux-design";
  const isSocialMediaArticlePage = normalizedPath === "/blog/social-media-growth";
  const isSeoArticlePage = normalizedPath === "/blog/seo-basics";
  const isMobileFirstArticlePage = normalizedPath === "/blog/mobile-first-design";
  const isEcommerceArticlePage = normalizedPath === "/blog/ecommerce-website";
  const isBlogArticlePage = ["/blog/website-conversion", "/blog/website-mistakes"].includes(normalizedPath);
  const isBlogRoute = isBlogPage || isBlogArticlePage || isUiUxArticlePage || isSocialMediaArticlePage || isSeoArticlePage || isMobileFirstArticlePage || isEcommerceArticlePage;

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
      <Navbar
        key={isBlogRoute ? "blog" : "home"}
        onOpenContact={() => setContactOpen(true)}
        onOpenBlog={() => navigate("/blog")}
        isBlogPage={isBlogRoute}
      />
      {isBlogPage ? (
        <main id="main-content">
          <Blog
            onOpenContact={() => setContactOpen(true)}
            onOpenArticle={() => navigate("/blog/website-mistakes")}
            onOpenUiUxArticle={() => navigate("/blog/ui-ux-design")}
            onOpenSocialMediaArticle={() => navigate("/blog/social-media-growth")}
            onOpenSeoArticle={() => navigate("/blog/seo-basics")}
            onOpenMobileFirstArticle={() => navigate("/blog/mobile-first-design")}
            onOpenEcommerceArticle={() => navigate("/blog/ecommerce-website")}
          />
        </main>
      ) : isEcommerceArticlePage ? (
        <main id="main-content">
          <EcommerceArticle
            onOpenContact={() => setContactOpen(true)}
            onNavigate={navigate}
          />
        </main>
      ) : isMobileFirstArticlePage ? (
        <main id="main-content">
          <MobileFirstArticle
            onOpenContact={() => setContactOpen(true)}
            onNavigate={navigate}
          />
        </main>
      ) : isSeoArticlePage ? (
        <main id="main-content">
          <SeoArticle
            onOpenContact={() => setContactOpen(true)}
            onNavigate={navigate}
          />
        </main>
      ) : isSocialMediaArticlePage ? (
        <main id="main-content">
          <SocialMediaArticle
            onOpenContact={() => setContactOpen(true)}
            onNavigate={navigate}
          />
        </main>
      ) : isUiUxArticlePage ? (
        <main id="main-content">
          <UiUxArticle
            onOpenContact={() => setContactOpen(true)}
            onNavigate={navigate}
          />
        </main>
      ) : isBlogArticlePage ? (
        <main id="main-content">
          <BlogArticle
            onOpenContact={() => setContactOpen(true)}
            onNavigate={navigate}
            isWebsiteConversion={normalizedPath === "/blog/website-conversion"}
          />
        </main>
      ) : (
        <>
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
        </>
      )}

      {/* Interactive Contact Modal connected to Google Forms */}
      <AnimatePresence>
        {contactOpen && <Contact onClose={() => setContactOpen(false)} />}
      </AnimatePresence>
    </MotionConfig>
  );
}
