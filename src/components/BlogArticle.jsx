import {
  ArrowRight,
  Mail,
  MousePointer2,
  Smartphone,
  UserRound,
  Zap,
} from "lucide-react";
import { useState } from "react";
import Footer from "./Footer";
import "./BlogArticle.css";

import articleHeroImage from "../assets/blog artical traffic hero img.png";
import articleSidebarImage from "../assets/no custome artical ideas build better robot.png";
import articleCtaImage from "../assets/turn traffic into customers robot.png";

const blogImages = import.meta.glob("../assets/blogs/*.png", {
  eager: true,
  import: "default",
});

const featuredImage = articleHeroImage;
const articleImages = {
  sidebar: articleSidebarImage,
  cta: articleCtaImage,
};
const sections = [
  { id: "communicate-value", title: "Your Website Doesn’t Communicate Value Clearly", body: "Visitors decide within a few seconds whether to stay or leave. If your value proposition is unclear, they might explore but won’t take action." },
  { id: "user-experience", title: "Poor User Experience (UX)", body: "Slow loading, confusing navigation, or a cluttered design can stop users from converting. A smooth and intuitive experience keeps users engaged." },
  { id: "call-to-action", title: "No Strong Call to Action", body: "If you’re not telling users what to do next, they’ll likely leave. Every important page should have a clear and compelling CTA." },
  { id: "trust-signals", title: "Lack of Trust Signals", body: "People buy from brands they trust. Show testimonials, client logos, case studies, and real results." },
  { id: "right-audience", title: "You’re Attracting the Wrong Audience", body: "Traffic is good, but qualified traffic is better. Focus on targeted content and SEO strategy to attract people who actually need your service." },
  { id: "final-thoughts", title: "Final Thoughts", body: "More traffic is not the finish line. Clear messaging, a trustworthy experience, and a strong next step turn website visitors into actual customers." },
];

const relatedArticles = [
  { title: "5 Website Mistakes That Make Your Business Look Unprofessional", category: "Web Development", readTime: "4 min read", image: "website-mistakes.png", path: "/blog/website-mistakes" },
  { title: "UI/UX Design: Why Good Design Is More Than Just Pretty", category: "UI/UX Design", readTime: "5 min read", image: "uiux-designs.png", path: "/blog/ui-ux-design" },
  { title: "How Social Media Can Actually Grow Your Business", category: "Social Media", readTime: "6 min read", image: "socialmedia.png", path: "/blog/social-media-growth" },
  { title: "SEO Basics Every Small Business Should Know", category: "Business", readTime: "6 min read", image: "seo-basics.png", path: "/blog/seo-basics" },
];

function ArticleFeatureCards() {
  const features = [
    { label: "Fast Loading", icon: Zap },
    { label: "Mobile Friendly", icon: Smartphone },
    { label: "Easy Navigation", icon: MousePointer2 },
    { label: "Clear CTA", icon: UserRound },
  ];

  return (
    <div className="article-feature-grid">
      {features.map(({ label, icon: Icon }) => (
        <div className="article-feature-card" key={label}>
          <span className="article-feature-icon"><Icon size={17} strokeWidth={2.4} aria-hidden="true" /></span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function ArticleImage({ src, alt, className = "" }) {
  if (!src) return null;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

function ArticleNewsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const submit = (event) => {
    event.preventDefault();
    const value = email.trim();
    if (!value) setMessage("Please enter your email address.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) setMessage("Please enter a valid email address.");
    else setMessage("You’re subscribed!");
  };

  return (
    <div className="article-sidebar-newsletter">
      <Mail size={22} aria-hidden="true" />
      <h2>Liked this article?</h2>
      <p>Get more insights like this straight to your inbox.</p>
      <form onSubmit={submit} noValidate>
        <label className="sr-only" htmlFor="article-newsletter-email">Email address</label>
        <input
          id="article-newsletter-email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => { setEmail(event.target.value); setMessage(null); }}
          aria-describedby="article-newsletter-message"
        />
        <button type="submit" aria-label="Subscribe"><ArrowRight size={16} /></button>
      </form>
      <p id="article-newsletter-message" className="article-newsletter-message" role="status" aria-live="polite">{message || ""}</p>
    </div>
  );
}

export default function BlogArticle({ onOpenContact, onNavigate }) {
  const navigateTo = (event, path) => {
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <>
      <div className="blog-article-page">
        <div className="blog-article-container">
          <nav className="blog-article-breadcrumb" aria-label="Breadcrumb">
            <a href="/" onClick={(event) => navigateTo(event, "/")}>Home</a><span>/</span>
            <a href="/blog" onClick={(event) => navigateTo(event, "/blog")}>Blog</a><span>/</span>
            <span>Web Development</span><span>/</span>
            <span>Why Your Website Gets Visitors but No Customers</span>
          </nav>

          <div className="blog-article-layout">
            <main className="blog-article-main">
              <header className="blog-article-header">
                <span className="blog-article-category">WEB DEVELOPMENT</span>
                <h1>Why Your Website Gets Visitors but No Customers</h1>
                <p className="blog-article-excerpt">You&apos;re getting traffic, but sales aren&apos;t growing? Let&apos;s break down the real reasons and how to fix them.</p>
              </header>

              <ArticleImage className="blog-article-hero" src={featuredImage} alt="Why Your Website Gets Visitors but No Customers" />

              <article className="blog-article-content">
                <section id="communicate-value"><h2>1. {sections[0].title}</h2><p>{sections[0].body}</p><blockquote>A clear message turns visitors into potential customers.</blockquote></section>
                <section id="user-experience"><h2>2. {sections[1].title}</h2><p>{sections[1].body}</p><ArticleFeatureCards /></section>
                <section id="call-to-action"><h2>3. {sections[2].title}</h2><p>{sections[2].body}</p><pre className="article-code-block"><code><span className="code-tag">&lt;button</span> <span className="code-attribute">className</span><span className="code-punctuation">=</span><span className="code-string">&quot;btn-primary&quot;</span><span className="code-tag">&gt;</span>{"\n  "}<span className="code-text">Start Your Project →</span>{"\n"}<span className="code-tag">&lt;/button&gt;</span></code></pre></section>
                {sections.slice(3).map((section, index) => <section id={section.id} key={section.id}><h2>{index + 4}. {section.title}</h2><p>{section.body}</p></section>)}
                <section className="blog-article-cta"><ArticleImage className="article-cta-image" src={articleImages.cta} alt="Turn traffic into customers illustration" /><div><h2>Turn Traffic Into <span className="cta-accent">Customers</span></h2><p>Let&apos;s analyze your website and help you optimize it for real business growth.</p><button type="button" onClick={onOpenContact}>Get a Free Consultation <ArrowRight size={16} /></button></div></section>
              </article>
            </main>

            <aside className="blog-article-sidebar">
              <div className="article-sidebar-card">
                <h2>Table of Contents</h2>
                <ol>{sections.map((section, index) => <li className={index === 0 ? "is-active" : ""} key={section.id}><a href={`#${section.id}`}>{index + 1}. {section.title}</a></li>)}</ol>
              </div>
              <ArticleNewsletter />
              <div className="article-sidebar-card article-related-sidebar">
                <h2>Related Articles</h2>
                <div className="article-related-list">{relatedArticles.slice(0, 3).map((article) => <a href={article.path} key={article.path} onClick={(event) => navigateTo(event, article.path)}><img src={blogImages[`../assets/blogs/${article.image}`]} alt="" /><span><strong>{article.title}</strong><small>{article.category}<br />{article.readTime}</small></span></a>)}</div>
                <a className="article-view-all" href="/blog" onClick={(event) => navigateTo(event, "/blog")}>View All Articles <ArrowRight size={15} /></a>
              </div>
              {articleImages.sidebar && <div className="article-sidebar-visual"><ArticleImage src={articleImages.sidebar} alt="Website conversion sidebar illustration" /></div>}
            </aside>
          </div>
        </div>
      </div>
      <Footer onOpenContact={onOpenContact} />
    </>
  );
}
