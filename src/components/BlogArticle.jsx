import { ArrowLeft, ArrowRight, Lightbulb, MessageSquare, Smartphone, ShieldCheck, Gauge, Target, Users, MousePointerClick, BarChart3, Search } from "lucide-react";
import Footer from "./Footer";
import "./BlogArticle.css";
import mistakesHeroImage from "../assets/blogs/small mistake big impact.webp";
import mistakesCtaImage from "../assets/blogs/5 mistake blog ready to fix your website.webp";
import speakerImage from "../assets/blogs/five mistake speaker.webp";
import conversionHeroImage from "../assets/blogs/featured-website.webp";

const mistakesSections = [
  { id: "outdated-design", title: "Outdated Design", body: "An outdated design instantly makes your business look behind the times. Modern users expect clean layouts, modern typography, and a professional visual identity.", tip: "Use a clean, modern design with consistent branding and colors.", icon: Lightbulb },
  { id: "poor-mobile-experience", title: "Poor Mobile Experience", body: "If your website doesn't work well on mobile devices, you're already losing a large portion of potential customers. A responsive design is no longer optional.", tip: "Make sure your website looks and works great on all screen sizes.", icon: Smartphone },
  { id: "unclear-messaging", title: "Unclear Messaging", body: "Visitors should immediately understand what you do and how you can help them. If your message is confusing, they'll likely leave.", tip: "Use clear headlines, simple language, and a strong call to action.", icon: MessageSquare },
  { id: "slow-loading-speed", title: "Slow Loading Speed", body: "A slow website frustrates users and hurts your credibility. People expect pages to load within a few seconds.", tip: "Optimize images, use clean code, and choose a reliable hosting provider.", icon: Gauge },
  { id: "lack-of-trust-elements", title: "Lack of Trust Elements", body: "Without testimonials, client logos, or real proof of work, your website may look doubtful. Trust elements help visitors feel confident about working with you.", tip: "Add client testimonials, case studies, logos, and clear contact information.", icon: ShieldCheck },
];

const conversionSections = [
  { id: "no-clear-cta", title: "No Clear Call-to-Action", body: "Your visitors land on your site, browse around, and leave without doing anything. Why? Because there is no clear next step. Every page needs a strong, visible call-to-action that tells visitors exactly what to do next.", tip: "Place a clear, compelling CTA above the fold on every key page.", icon: MousePointerClick },
  { id: "weak-value-proposition", title: "Weak Value Proposition", body: "If visitors cannot immediately understand what makes your business different or why they should choose you, they will move on. Your value proposition must be front and center, clearly explaining the benefit you offer.", tip: "State your unique value in one clear sentence visitors can read in seconds.", icon: Target },
  { id: "confusing-navigation", title: "Confusing Navigation", body: "When visitors struggle to find what they need, they leave. A cluttered menu, too many options, or unclear labels create friction that kills conversions. Your navigation should guide visitors effortlessly toward the action you want them to take.", tip: "Keep your navigation simple with clear labels and a logical structure.", icon: Search },
  { id: "no-social-proof", title: "No Social Proof", body: "People trust other people more than they trust businesses. Without testimonials, reviews, case studies, or client logos, your website lacks the credibility needed to convert visitors into customers.", tip: "Add real testimonials, reviews, and case studies to build trust.", icon: Users },
  { id: "ignoring-analytics", title: "Ignoring Analytics", body: "If you are not tracking how visitors behave on your site, you are flying blind. Analytics reveal where visitors drop off, which pages underperform, and what content drives engagement. Without this data, you cannot improve.", tip: "Set up analytics tracking and review visitor behavior regularly.", icon: BarChart3 },
];

const mistakesRelatedArticles = [
  { title: "Why Your Website Gets Visitors but No Customers", category: "Web Development", readTime: "6 min read", image: "featured-website.webp", path: "/blog/website-conversion" },
  { title: "Mobile-First Design: Why Your Website Must Work on Every Screen", category: "Web Development", readTime: "4 min read", image: "mobiledesign.webp", path: "/blog/mobile-first-design" },
  { title: "SEO Basics Every Small Business Should Know", category: "Digital Growth", readTime: "6 min read", image: "seo-basics.webp", path: "/blog/seo-basics" },
];

const conversionRelatedArticles = [
  { title: "5 Website Mistakes That Make Your Business Look Unprofessional", category: "Web Development", readTime: "4 min read", image: "website-mistakes.webp", path: "/blog/website-mistakes" },
  { title: "UI/UX Design: Why Good Design Is More Than Just Pretty", category: "UI/UX Design", readTime: "5 min read", image: "uiux-designs.webp", path: "/blog/ui-ux-design" },
  { title: "E-Commerce Website: What Your Store Needs to Convert", category: "Digital Growth", readTime: "5 min read", image: "ecommblog.webp", path: "/blog/ecommerce-website" },
];

const blogImages = import.meta.glob("../assets/blogs/*.webp", { eager: true, import: "default" });
function navigate(event, path, onNavigate) { event.preventDefault(); onNavigate(path); }
export default function BlogArticle({ onOpenContact, onNavigate, isWebsiteConversion = false }) {
  const sections = isWebsiteConversion ? conversionSections : mistakesSections;
  const relatedArticles = isWebsiteConversion ? conversionRelatedArticles : mistakesRelatedArticles;
  const heroImage = isWebsiteConversion ? conversionHeroImage : mistakesHeroImage;
  const ctaImage = mistakesCtaImage;
  const title = isWebsiteConversion
    ? "Why Your Website Gets Visitors but No Customers"
    : "5 Website Mistakes That Make Your Business Look Unprofessional";
  const excerpt = isWebsiteConversion
    ? <>You&apos;re getting traffic, but sales aren&apos;t growing?<br />Let&apos;s break down the real reasons and how to fix them.</>
    : <>Your website is often the first impression people get of your business.<br />Here are 5 common mistakes that can make your brand look unprofessional — and how to fix them.</>;
  const finalThoughts = isWebsiteConversion
    ? "Your website is a powerful tool for building your brand. Clear messaging, a trustworthy experience, and a strong next step can turn website visitors into actual customers."
    : "Your website is a powerful tool for building your brand. Avoid these common mistakes and create a site that not only looks professional but also helps you grow your business.";

  return <>
    <div className="blog-article-page"><div className="blog-article-container">
      <button type="button" className="blog-article-back" onClick={(event) => navigate(event, "/blog", onNavigate)}><ArrowLeft size={15} /> Back to Blog</button>
      <div className="blog-article-layout"><main className="blog-article-main">
        <header className="blog-article-header"><span className="blog-article-category">WEB DEVELOPMENT</span><h1>{title}</h1><p className="blog-article-excerpt">{excerpt}</p></header>
        <img className="blog-article-hero" src={heroImage} alt={title} />
        <article className="blog-article-content">{sections.map((section, index) => { const Icon = section.icon; return <section id={section.id} key={section.id}><div className="article-section-heading"><span className="article-number">{index + 1}</span><h2>{section.title}</h2></div><p>{section.body}</p><div className="article-tip"><Icon size={16} fill="currentColor" aria-hidden="true" /><span><strong>Tip:</strong> {section.tip}</span></div></section>; })}<section id="final-thoughts" className="article-final-thoughts"><h2>Final Thoughts</h2><p>{finalThoughts}</p></section><section className="article-bottom-cta"><img src={ctaImage} alt="Person giving a thumbs up" /><div><h2>{isWebsiteConversion ? "Ready to Convert More Visitors?" : "Ready to Fix Your Website?"}</h2><p>Let&apos;s build a modern, professional, and high-converting website for your business.</p><button type="button" onClick={onOpenContact}>Start Your Project <ArrowRight size={15} /></button></div></section></article>
      </main><aside className="blog-article-sidebar">
        <div className="article-sidebar-card article-toc"><h2>Table of Contents</h2><ol>{[...sections, { id: "final-thoughts", title: "Final Thoughts" }].map((section, index) => <li className={index === 0 ? "is-active" : ""} key={section.id}><a href={`#${section.id}`}>{index + 1}. &nbsp;{section.title}</a></li>)}</ol></div>
        <div className="article-consultation-card"><img className="consultation-icon" src={speakerImage} alt="" /><h2>Need a Better Website?</h2><p>Let&apos;s build a modern, high-converting website for your business.</p><button type="button" onClick={onOpenContact}>Get a Free Consultation <ArrowRight size={15} /></button></div>
        <div className="article-sidebar-card article-related-sidebar"><h2>Related Articles</h2><div className="article-related-list">{relatedArticles.map((article) => <a href={article.path} key={article.path} onClick={(event) => navigate(event, article.path, onNavigate)}><img src={blogImages[`../assets/blogs/${article.image}`]} alt="" /><span><strong>{article.title}</strong><small>{article.category}<br />{article.readTime}</small></span></a>)}</div><a className="article-view-all" href="/blog" onClick={(event) => navigate(event, "/blog", onNavigate)}>View All Articles <ArrowRight size={15} /></a></div>
        <div className="article-quote-card"><span>&ldquo;</span><blockquote>A great website doesn&apos;t just look good, it works for your business.</blockquote><cite>— 404 Solutions</cite><i /></div>
      </aside></div>
    </div></div><Footer onOpenContact={onOpenContact} />
  </>;
}
