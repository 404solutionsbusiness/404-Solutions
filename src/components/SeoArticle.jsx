import { ArrowLeft, ArrowRight, BarChart3, Search, ShieldCheck, Target, Users } from "lucide-react";
import Footer from "./Footer";
import "./SeoArticle.css";
import heroImage from "../assets/blogs/seo artical hero image.webp";
import personImage from "../assets/blogs/seo man image.webp";
import rocketImage from "../assets/blogs/cccc.webp";

const toc = [["what-is-seo","What is SEO?"],["why-seo","Why SEO Matters for Small Businesses"],["keywords","Keyword Research Basics"],["on-page","On-Page SEO Tips"],["off-page","Off-Page SEO Basics"],["technical","Technical SEO (Made Simple)"],["tracking","Tracking Your Results"],["final-thoughts","Final Thoughts"]];
const related = [
  { title:"Why Your Website Gets Visitors but No Customers", category:"Web Development", time:"6 min read", image:"featured-website.webp", path:"/blog/website-conversion" },
  { title:"5 Website Mistakes That Make Your Business Look Unprofessional", category:"Web Development", time:"4 min read", image:"website-mistakes.webp", path:"/blog/website-mistakes" },
  { title:"UI/UX Design: Why Good Design Is More Than Just Pretty", category:"UI/UX Design", time:"5 min read", image:"uiux-designs.webp", path:"/blog/ui-ux-design" },
  { title:"How Social Media Can Actually Grow Your Business", category:"Social Media", time:"6 min read", image:"socialmedia.webp", path:"/blog/social-media-growth" },
];
const blogImages = import.meta.glob("../assets/blogs/*.webp", { eager:true, import:"default" });
function navigate(event,path,onNavigate){event.preventDefault();onNavigate(path);}
function Quote(){return <div className="seo-quote"><strong>“</strong><b>Good SEO helps the right people find you at the right time.</b></div>}
function Tip(){return <div className="seo-tip"><Search size={16} fill="currentColor"/><span><b>Tip:</b> Use tools like Google Keyword Planner, Ubersuggest, or Ahrefs.</span></div>}

export default function SeoArticle({onOpenContact,onNavigate}){
 return <><div className="seo-page"><div className="seo-container">
  <button className="seo-back" type="button" onClick={(e)=>navigate(e,"/blog",onNavigate)}><ArrowLeft size={15}/> Back to Blog</button>
  <div className="seo-layout"><main className="seo-main">
   <header className="seo-header"><span className="seo-category">SEO</span><h1><em>SEO Basics</em> Every Small Business Should Know</h1><p>SEO doesn’t have to be complicated. In this guide, we’ll break down the essential SEO basics every small business should know to get more visibility, attract the right audience, and grow online.</p></header>
   <img className="seo-hero" src={heroImage} alt="Small steps, big visibility"/>
   <article className="seo-content">
    <section id="what-is-seo"><div className="seo-heading"><i>1</i><h2>What is SEO?</h2></div><p>SEO (Search Engine Optimization) is the process of improving your website so it ranks higher on search engines like Google. The higher you rank, the more people can find your business.</p><Quote/></section>
    <section id="why-seo"><div className="seo-heading"><i>2</i><h2>Why SEO Matters for Small Businesses</h2></div><p>For small businesses, SEO is one of the most cost-effective ways to get long-term growth. It helps you compete with bigger brands, attract local customers, and build trust.</p><div className="seo-features">{[[Users,"Increases Website Traffic"],[Target,"Attracts the Right Audience"],[ShieldCheck,"Builds Credibility & Trust"],[BarChart3,"Generates Long-Term Growth"]].map(([Icon,title])=><div key={title}><span><Icon size={20}/></span><b>{title}</b></div>)}</div></section>
    <section id="keywords"><div className="seo-heading"><i>3</i><h2>Keyword Research Basics</h2></div><p>Keywords are the words your potential customers search for. Find keywords that match your business, have good search volume, and are not too competitive.</p><Tip/></section>
    <section id="on-page"><div className="seo-heading"><i>4</i><h2>On-Page SEO Tips</h2></div><p>Optimize your website’s content, titles, meta descriptions, images, and internal links. Make sure your content is helpful, relevant, and easy to read.</p></section>
    <section id="off-page"><div className="seo-heading"><i>5</i><h2>Off-Page SEO Basics</h2></div><p>Get backlinks from reputable websites, be active on social media, and get listed in local directories like Google Business Profile.</p></section>
    <section id="technical"><div className="seo-heading"><i>6</i><h2>Technical SEO (Made Simple)</h2></div><p>Ensure your website is mobile-friendly, loads fast, has a secure HTTPS connection, and an XML sitemap.</p></section>
    <section id="tracking"><div className="seo-heading"><i>7</i><h2>Tracking Your Results</h2></div><p>Use Google Analytics and Google Search Console to track your traffic, keyword rankings, and overall performance.</p></section>
    <section id="final-thoughts" className="seo-final"><div className="seo-final-heading"><h2>Final Thoughts</h2></div><p>SEO is a continuous process, not a one-time task. Start with the basics, stay consistent, and keep improving. Over time, your SEO results will grow.</p></section>
    <section className="seo-bottom-cta"><img src={rocketImage} alt="SEO growth rocket"/><div><h2>Ready to Grow Your Business<br/>with SEO?</h2><p>Let’s create a strategy that brings real results.</p></div><button type="button" onClick={onOpenContact}>Get a Free Consultation <ArrowRight size={15}/></button></section>
   </article>
  </main><aside className="seo-sidebar">
   <div className="seo-card seo-toc"><h2>Table of Contents</h2><ol>{toc.map(([id,title],i)=><li className={i===0?"active":""} key={id}><a href={`#${id}`}>{i+1}. &nbsp;{title}</a></li>)}</ol></div>
   <div className="seo-newsletter"><h2>Get more insights like this<br/>straight to your inbox.</h2><form onSubmit={(e)=>e.preventDefault()}><label className="sr-only" htmlFor="seo-email">Email address</label><input id="seo-email" type="email" placeholder="Enter your email"/><button type="submit" aria-label="Subscribe"><ArrowRight size={16}/></button></form></div>
   <div className="seo-card seo-related"><h2>Related Articles</h2><div>{related.map(a=><a href={a.path} key={a.path} onClick={e=>navigate(e,a.path,onNavigate)}><img src={blogImages[`../assets/blogs/${a.image}`]} alt=""/><span><b>{a.title}</b><small>{a.category}<br/>{a.time}</small></span></a>)}</div><a className="seo-view-all" href="/blog" onClick={e=>navigate(e,"/blog",onNavigate)}>View All Articles <ArrowRight size={15}/></a></div>
   <div className="seo-card seo-sidebar-quote"><strong>“</strong><blockquote>SEO is not just about ranking higher. It’s about reaching the right people and creating real opportunities for your business.</blockquote><cite>— 404 Solutions</cite><i/><img src={personImage} alt="SEO growth idea"/></div>
  </aside></div>
 </div></div><Footer onOpenContact={onOpenContact}/></>;
}
