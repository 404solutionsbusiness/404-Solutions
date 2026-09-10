import { ArrowLeft, ArrowRight, CreditCard, Smartphone, Users, Zap } from "lucide-react";
import Footer from "./Footer";
import "./MobileFirstArticle.css";
import heroImage from "../assets/blogs/why your website  must work on every screen.webp";
import personImage from "../assets/blogs/every screen man image.webp";

const toc = [["devices","People Browse on Multiple Devices"],["experience","Better User Experience"],["search","Higher Visibility in Search"],["conversions","More Leads & Conversions"],["trust","Builds Trust & Credibility"],["cost","Saves Time & Cost"],["final-thoughts","Final Thoughts"]];
const related = [
 {title:"Why Your Website Gets Visitors but No Customers",category:"Web Development",time:"6 min read",image:"featured-website.webp",path:"/blog/website-conversion"},
 {title:"5 Website Mistakes That Make Your Business Look Unprofessional",category:"Web Development",time:"4 min read",image:"website-mistakes.webp",path:"/blog/website-mistakes"},
 {title:"UI/UX Design: Why Good Design Is More Than Just Pretty",category:"UI/UX Design",time:"5 min read",image:"uiux-designs.webp",path:"/blog/ui-ux-design"},
 {title:"How Social Media Can Actually Grow Your Business",category:"Social Media",time:"6 min read",image:"socialmedia.webp",path:"/blog/social-media-growth"},
];
const blogImages=import.meta.glob("../assets/blogs/*.webp",{eager:true,import:"default"});
function navigate(e,path,onNavigate){e.preventDefault();onNavigate(path);}
function Tip(){return <div className="mobile-tip"><Smartphone size={16} fill="currentColor"/><span><b>Tip:</b> Design with a mobile-first approach and test on different devices.</span></div>}
function Quote(){return <div className="mobile-quote"><strong>“</strong><b>A mobile-friendly website is not just good for users, it’s good for SEO too.</b><span>— 404 Solutions</span></div>}

export default function MobileFirstArticle({onOpenContact,onNavigate}){
 return <><div className="mobile-page"><div className="mobile-container">
  <button className="mobile-back" type="button" onClick={e=>navigate(e,"/blog",onNavigate)}><ArrowLeft size={15}/> Back to Blog</button>
  <div className="mobile-layout"><main className="mobile-main">
   <header className="mobile-header"><span className="mobile-category">DIGITAL GROWTH</span><h1>Why Your Mobile Website Must Work on <em>Every Screen</em></h1><p>From smartphones to large desktops, your website needs to deliver a seamless experience everywhere. In this article, we’ll explore why a responsive, mobile-friendly website is essential and how it impacts your business growth.</p></header>
   <img className="mobile-hero" src={heroImage} alt="One website, every screen, more opportunities"/>
   <article className="mobile-content">
    <section id="devices"><div className="mobile-heading"><i>1</i><h2>People Browse on Multiple Devices</h2></div><p>Your customers might find you on a phone, tablet, laptop, or desktop. A responsive website ensures a smooth and consistent experience across all screen sizes.</p><Tip/></section>
    <section id="experience"><div className="mobile-heading"><i>2</i><h2>Better User Experience</h2></div><p>A mobile-friendly website is easier to navigate, faster to load, and more enjoyable to use. Happy visitors are more likely to stay, explore, and take action.</p></section>
    <section id="search"><div className="mobile-heading"><i>3</i><h2>Higher Visibility in Search</h2></div><p>Search engines like Google prioritize mobile-friendly websites. A responsive design helps you rank higher and reach more potential customers.</p><Quote/></section>
    <section id="conversions"><div className="mobile-heading"><i>4</i><h2>More Leads &amp; Conversions</h2></div><p>When your website works well on every screen, visitors can easily find information, contact you, or make a purchase — leading to higher conversions.</p><div className="mobile-features">{[[Smartphone,"Easy Navigation","Helps users find what they need."],[Zap,"Faster Load Times","Keeps visitors engaged."],[CreditCard,"More Sales","Turns visitors into customers."],[Users,"Wider Reach","Accessible on all devices."]].map(([Icon,title,text])=><div key={title}><span><Icon size={19}/></span><b>{title}</b><small>{text}</small></div>)}</div></section>
    <section id="trust"><div className="mobile-heading"><i>5</i><h2>Builds Trust &amp; Credibility</h2></div><p>A well-optimized website shows that you care about your users’ experience. It builds trust and makes your brand look professional.</p></section>
    <section id="cost"><div className="mobile-heading"><i>6</i><h2>Saves Time &amp; Cost</h2></div><p>Instead of managing separate websites for different devices, a responsive website saves time, reduces maintenance, and is more cost-effective in the long run.</p></section>
    <section id="final-thoughts" className="mobile-final"><h2>Final Thoughts</h2><p>A mobile-friendly website isn’t optional anymore — it’s essential. By ensuring your website works on every screen, you can reach more people, provide a better experience, and create more opportunities for your business.</p></section>
    <section className="mobile-bottom-cta"><img src={personImage} alt="Person using a mobile phone"/><div><h2>Ready to Make Your Website Mobile-Friendly?</h2><p>Let’s create a responsive website that works everywhere.</p></div><button type="button" onClick={onOpenContact}>Get a Free Consultation <ArrowRight size={15}/></button></section>
   </article>
  </main><aside className="mobile-sidebar">
   <div className="mobile-card mobile-toc"><h2>Table of Contents</h2><ol>{toc.map(([id,title],i)=><li className={i===0?"active":""} key={id}><a href={`#${id}`}>{i+1}. &nbsp;{title}</a></li>)}</ol></div>
   <div className="mobile-newsletter"><h2>Get more insights like this<br/>straight to your inbox.</h2><form onSubmit={e=>e.preventDefault()}><label className="sr-only" htmlFor="mobile-email">Email address</label><input id="mobile-email" type="email" placeholder="Enter your email"/><button type="submit" aria-label="Subscribe"><ArrowRight size={16}/></button></form></div>
   <div className="mobile-card mobile-related"><h2>Related Articles</h2><div>{related.map(a=><a href={a.path} key={a.path} onClick={e=>navigate(e,a.path,onNavigate)}><img src={blogImages[`../assets/blogs/${a.image}`]} alt=""/><span><b>{a.title}</b><small>{a.category}<br/>{a.time}</small></span></a>)}</div><a className="mobile-view-all" href="/blog" onClick={e=>navigate(e,"/blog",onNavigate)}>View All Articles <ArrowRight size={15}/></a></div>
   <div className="mobile-card mobile-sidebar-quote"><strong>“</strong><blockquote>A website that works on every screen doesn’t just reach more people, it creates more opportunities for your business.</blockquote><cite>— 404 Solutions</cite><i/><img src={personImage} alt="Person using a mobile phone"/></div>
  </aside></div>
 </div></div><Footer onOpenContact={onOpenContact}/></>;
}
