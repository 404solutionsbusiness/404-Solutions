import { ArrowLeft, ArrowRight, Check, MessageCircle, Target, Users } from "lucide-react";
import Footer from "./Footer";
import "./UiUxArticle.css";

import heroImage from "../assets/blogs/ui ux artical hero image (1).webp";
import bulbImage from "../assets/blogs/ui ux artical bulb image.webp";
import ctaImage from "../assets/blogs/ui ux artical man image.webp";

const sections = [
  { id: "what-is-ui-ux", title: "What is UI/UX Design?" },
  { id: "why-design-matters", title: "Why Good Design Matters" },
  { id: "more-than-aesthetics", title: "More Than Just Aesthetics" },
  { id: "business-benefits", title: "Real Business Benefits" },
  { id: "good-vs-bad", title: "Examples of Good vs Bad Design" },
  { id: "better-ui-ux", title: "Tips for Better UI/UX" },
  { id: "final-thoughts", title: "Final Thoughts" },
];

const relatedArticles = [
  { title: "Why Your Website Gets Visitors but No Customers", category: "Web Development", time: "6 min read", image: "featured-website.webp", path: "/blog/website-conversion" },
  { title: "5 Website Mistakes That Make Your Business Look Unprofessional", category: "Web Development", time: "4 min read", image: "website-mistakes.webp", path: "/blog/website-mistakes" },
  { title: "How Social Media Can Actually Grow Your Business", category: "Social Media", time: "6 min read", image: "socialmedia.webp", path: "/blog/social-media-growth" },
  { title: "E-Commerce Website: What Your Store Needs to Convert", category: "Digital Growth", time: "5 min read", image: "ecommblog.webp", path: "/blog/ecommerce-website" },
];

const blogImages = import.meta.glob("../assets/blogs/*.webp", { eager: true, import: "default" });

function navigate(event, path, onNavigate) { event.preventDefault(); onNavigate(path); }

function TipQuote() {
  return <div className="uiux-quote"><strong>“</strong><b>UI is what people see. UX is how people feel.</b><span>— 404 Solutions</span></div>;
}

export default function UiUxArticle({ onOpenContact, onNavigate }) {
  return <>
    <div className="uiux-page"><div className="uiux-container">
      <button type="button" className="uiux-back" onClick={(event) => navigate(event, "/blog", onNavigate)}><ArrowLeft size={15} /> Back to Blog</button>
      <div className="uiux-layout"><main className="uiux-main">
        <header className="uiux-header"><span className="uiux-category">UI/UX DESIGN</span><h1>UI/UX Design: Why Good Design Is More Than Just Pretty</h1><p>Good design is not just about how it looks — it’s about how it works. In this article, we’ll explore why UI/UX design is essential for your business and how it directly impacts user experience, trust, and growth.</p></header>
        <img className="uiux-hero" src={heroImage} alt="Good design creates better experiences" />
        <article className="uiux-content">
          <section id="what-is-ui-ux"><div className="uiux-heading"><i>1</i><h2>What is UI/UX Design?</h2></div><p>UI (User Interface) design focuses on the visual elements of a product — like layout, colors, typography, and buttons. UX (User Experience) design focuses on the overall journey — how easy, intuitive and enjoyable it is to use.</p><TipQuote /></section>
          <section id="why-design-matters"><div className="uiux-heading"><i>2</i><h2>Why Good Design Matters</h2></div><p>Good design helps users find what they need quickly, builds trust and keeps them coming back. In a world full of options, a better user experience can be the reason someone chooses you over a competitor.</p><div className="uiux-features">{[[Users,"Builds Trust","A clean and professional design makes your brand look reliable."],[Target,"Improves Engagement","Easy to navigate interfaces keep users on your site longer."],[MessageCircle,"Increases Conversions","A smoother experience leads to more sign-ups, sales and inquiries."],[Check,"Creates Lasting Impressions","Great design helps your brand stand out and stay memorable."]].map(([Icon,title,text]) => <div key={title}><span><Icon size={20} /></span><b>{title}</b><small>{text}</small></div>)}</div></section>
          <section id="more-than-aesthetics"><div className="uiux-heading"><i>3</i><h2>More Than Just Aesthetics</h2></div><p>A beautiful design catches attention, but a well-thought-out experience solves problems. Good UI/UX is about understanding your users, reducing friction and guiding them toward their goals.</p><div className="uiux-comparison"><div><h3><span>×</span> Just Pretty</h3><p>Looks good but confusing</p><p>Hard to navigate</p><p>Higher bounce rate</p></div><div><h3><span>✓</span> Good UI/UX</h3><p>Looks great and is easy to use</p><p>Clear navigation</p><p>Higher engagement &amp; conversions</p></div></div></section>
          <section id="business-benefits"><div className="uiux-heading"><i>4</i><h2>Real Business Benefits</h2></div><p>Companies that invest in good UI/UX design see higher customer satisfaction, better brand perception and improved revenue. It’s not an expense — it’s an investment.</p></section>
          <section id="good-vs-bad"><div className="uiux-heading"><i>5</i><h2>Tips for Better UI/UX</h2></div><p>Keep it simple, focus on your users, use clear CTAs, make it mobile-friendly, and always test and iterate.</p></section>
          <section id="final-thoughts" className="uiux-final"><div className="uiux-final-heading"><h2>Final Thoughts</h2></div><p>Good design is more than just pretty — it’s a powerful tool for building trust, solving problems and growing your business. If you’re planning a website or product, make UI/UX a priority from the start.</p></section>
          <section className="uiux-bottom-cta"><img src={ctaImage} alt="Person with a design idea" /><div><h2>Let’s Create a Better Experience<br />for Your Customers.</h2><p>Turn your ideas into beautiful, user-friendly digital products.</p></div><button type="button" onClick={onOpenContact}>Start a Project <ArrowRight size={15} /></button></section>
        </article>
      </main><aside className="uiux-sidebar">
        <div className="uiux-card uiux-toc"><h2>Table of Contents</h2><ol>{sections.map((section,index) => <li className={index === 0 ? "active" : ""} key={section.id}><a href={`#${section.id}`}>{index + 1}. &nbsp;{section.title}</a></li>)}</ol></div>
        <div className="uiux-newsletter"><h2>Get more insights like this<br />straight to your inbox.</h2><form onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="uiux-email">Email address</label><input id="uiux-email" type="email" placeholder="Enter your email" /><button type="submit" aria-label="Subscribe"><ArrowRight size={16} /></button></form></div>
        <div className="uiux-card uiux-related"><h2>Related Articles</h2><div>{relatedArticles.map((article) => <a href={article.path} key={article.path} onClick={(event) => navigate(event, article.path, onNavigate)}><img src={blogImages[`../assets/blogs/${article.image}`]} alt="" /><span><b>{article.title}</b><small>{article.category}<br />{article.time}</small></span></a>)}</div><a className="uiux-view-all" href="/blog" onClick={(event) => navigate(event, "/blog", onNavigate)}>View All Articles <ArrowRight size={15} /></a></div>
        <div className="uiux-card uiux-sidebar-quote"><strong>“</strong><blockquote>Design is not just what it looks like, it’s how it works for people.</blockquote><cite>— Steve Jobs</cite><i /></div>
        <div className="uiux-bulb-card"><img className="uiux-bulb" src={bulbImage} alt="Ideas build better businesses" /></div>
      </aside></div>
    </div></div><Footer onOpenContact={onOpenContact} />
  </>;
}
