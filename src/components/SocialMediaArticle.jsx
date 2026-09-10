import { ArrowLeft, ArrowRight, BarChart3, Camera, Link as LinkIcon, MessageCircle, Users } from "lucide-react";
import Footer from "./Footer";
import "./SocialMediaArticle.css";

import heroImage from "../assets/blogs/social media artical hero image.webp";
import ctaImage from "../assets/blogs/5 mistake blog ready to fix your website.webp";

const toc = [
  ["build-brand-awareness", "Build Brand Awareness"], ["connect-audience", "Connect With Your Audience"], ["showcase-work", "Showcase Your Work"], ["drive-traffic", "Drive Website Traffic"], ["leads-sales", "Generate Leads & Sales"], ["consistent-patient", "Be Consistent & Patient"], ["final-thoughts", "Final Thoughts"],
];
const related = [
  { title: "Why Your Website Gets Visitors but No Customers", category: "Web Development", time: "6 min read", image: "featured-website.webp", path: "/blog/website-conversion" },
  { title: "5 Website Mistakes That Make Your Business Look Unprofessional", category: "Web Development", time: "4 min read", image: "website-mistakes.webp", path: "/blog/website-mistakes" },
  { title: "UI/UX Design: Why Good Design Is More Than Just Pretty", category: "UI/UX Design", time: "5 min read", image: "uiux-designs.webp", path: "/blog/ui-ux-design" },
  { title: "E-Commerce Website: What Your Store Needs to Convert", category: "Digital Growth", time: "5 min read", image: "ecommblog.webp", path: "/blog/ecommerce-website" },
];
const blogImages = import.meta.glob("../assets/blogs/*.webp", { eager: true, import: "default" });
function navigate(event, path, onNavigate) { event.preventDefault(); onNavigate(path); }

function Tip({ children, icon: Icon }) { return <div className="social-tip"><Icon size={16} fill="currentColor" /><span><b>Tip:</b> {children}</span></div>; }
function Quote() { return <div className="social-quote"><strong>“</strong><b>Social media is not just a broadcast channel, it’s a conversation.</b><span>— 404 Solutions</span></div>; }

export default function SocialMediaArticle({ onOpenContact, onNavigate }) {
  return <>
    <div className="social-page"><div className="social-container">
      <button type="button" className="social-back" onClick={(event) => navigate(event, "/blog", onNavigate)}><ArrowLeft size={15} /> Back to Blog</button>
      <div className="social-layout"><main className="social-main">
        <header className="social-header"><span className="social-category">SOCIAL MEDIA</span><h1>How Social Media Can Actually <em>Grow Your Business</em></h1><p>Social media isn’t just about likes and followers — it’s a powerful tool that can help you build your brand, attract new customers, and increase revenue. Let’s explore how to use it the right way.</p></header>
        <img className="social-hero" src={heroImage} alt="Social media real growth" />
        <article className="social-content">
          <section id="build-brand-awareness"><div className="social-heading"><i>1</i><h2>Build Brand Awareness</h2></div><p>Social media helps you put your brand in front of the right audience. Consistent posting, a clear visual identity, and valuable content make people remember you.</p><Tip icon={MessageCircle}>Use a clear brand voice and visual style across all platforms.</Tip></section>
          <section id="connect-audience"><div className="social-heading"><i>2</i><h2>Connect With Your Audience</h2></div><p>It’s a two-way conversation. Respond to comments, answer questions, and engage with your followers. People trust brands that actually interact.</p><Quote /></section>
          <section id="showcase-work"><div className="social-heading"><i>3</i><h2>Showcase Your Work</h2></div><p>Share your projects, behind-the-scenes, client testimonials, and success stories. It builds credibility and shows real value.</p><div className="social-features">{[[Camera,"Project Showcase","Let people see what you do."],[Users,"Client Testimonials","Real feedback builds trust."],[MessageCircle,"Behind the Scenes","Show your process and team."],[BarChart3,"Before & After","Highlight real results."]].map(([Icon,title,text]) => <div key={title}><span><Icon size={19} /></span><b>{title}</b><small>{text}</small></div>)}</div></section>
          <section id="drive-traffic"><div className="social-heading"><i>4</i><h2>Drive Website Traffic</h2></div><p>Social media can bring qualified traffic to your website. Share blog posts, service pages, and special offers to turn followers into customers.</p><Tip icon={LinkIcon}>Use clear CTAs like “Visit Our Website” or “Get a Free Quote”.</Tip></section>
          <section id="leads-sales"><div className="social-heading"><i>5</i><h2>Generate Leads &amp; Sales</h2></div><p>With the right strategy — targeted content, lead magnets, and paid ads — social media can directly help you get new clients and increase revenue.</p></section>
          <section id="consistent-patient"><div className="social-heading"><i>6</i><h2>Be Consistent &amp; Patient</h2></div><p>Growth doesn’t happen overnight. Stay consistent, keep experimenting, and focus on providing value. Over time, the results will follow.</p></section>
          <section id="final-thoughts" className="social-final"><div className="social-final-heading"><h2>Final Thoughts</h2></div><p>Social media growth doesn’t happen overnight. Stay consistent, keep experimenting, and focus on providing value. Over time, the results will follow.</p></section>
          <section className="social-bottom-cta"><img src={ctaImage} alt="Person ready to grow your business" /><div><h2>Ready to Grow Your Business with Social Media?</h2><p>Let’s create a strategy that works for your brand.</p></div><button type="button" onClick={onOpenContact}>Get a Free Consultation <ArrowRight size={15} /></button></section>
        </article>
      </main><aside className="social-sidebar">
        <div className="social-card social-toc"><h2>Table of Contents</h2><ol>{toc.map(([id,title],index) => <li className={index === 0 ? "active" : ""} key={id}><a href={`#${id}`}>{index + 1}. &nbsp;{title}</a></li>)}</ol></div>
        <div className="social-newsletter"><h2>Get more insights like this<br />straight to your inbox.</h2><form onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="social-email">Email address</label><input id="social-email" type="email" placeholder="Enter your email" /><button type="submit" aria-label="Subscribe"><ArrowRight size={16} /></button></form></div>
        <div className="social-card social-related"><h2>Related Articles</h2><div>{related.map((article) => <a href={article.path} key={article.path} onClick={(event) => navigate(event, article.path, onNavigate)}><img src={blogImages[`../assets/blogs/${article.image}`]} alt="" /><span><b>{article.title}</b><small>{article.category}<br />{article.time}</small></span></a>)}</div><a className="social-view-all" href="/blog" onClick={(event) => navigate(event, "/blog", onNavigate)}>View All Articles <ArrowRight size={15} /></a></div>
        <div className="social-card social-sidebar-quote"><strong>“</strong><blockquote>Consistent effort on social media today creates real business opportunities tomorrow.</blockquote><cite>— 404 Solutions</cite><i /></div>
      </aside></div>
    </div></div><Footer onOpenContact={onOpenContact} />
  </>;
}
