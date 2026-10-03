const ORIGIN = "https://404solutions.vercel.app";
const SITE_NAME = "404 Solution";
const DEFAULT_IMAGE = `${ORIGIN}/logo.png`;

const siteImages = import.meta.glob("./assets/**/*.{webp,png}", { eager: true, query: "?url", import: "default" });
const siteImage = (name) => Object.entries(siteImages).find(([path]) => path.endsWith(`/${name}`))?.[1] || DEFAULT_IMAGE;

const articles = {
  "/blog/website-conversion": {
    title: "Why Your Website Gets Visitors but No Customers",
    description: "You’re getting traffic, but sales aren’t growing? Let’s break down the real reasons and how to fix them.",
    category: "Web Development",
    image: siteImage("featured-website.webp"),
  },
  "/blog/website-mistakes": {
    title: "5 Website Mistakes That Make Your Business Look Unprofessional",
    description: "Small website mistakes can quietly hurt trust, conversions and your brand. Here are five things worth fixing.",
    category: "Web Development",
    datePublished: "2026-09-05",
    image: siteImage("website-mistakes.webp"),
  },
  "/blog/uiux-design": {
    title: "UI/UX Design: Why Good Design Is More Than Just Pretty",
    description: "Good design is not only about appearance. It helps people understand, navigate and trust your business.",
    category: "UI/UX Design",
    datePublished: "2026-09-04",
    image: siteImage("uiux-designs.webp"),
  },
  "/blog/social-media-growth": {
    title: "How Social Media Can Actually Grow Your Business",
    description: "A consistent social strategy can turn attention into trust, conversations and real business growth.",
    category: "Social Media",
    datePublished: "2026-09-03",
    image: siteImage("socialmedia.webp"),
  },
  "/blog/seo-basics": {
    title: "SEO Basics Every Small Business Should Know",
    description: "You do not need to be an SEO expert to improve your visibility. Start with these practical basics.",
    category: "Business",
    datePublished: "2026-08-30",
    image: siteImage("seo-basics.webp"),
  },
  "/blog/ecommerce-website": {
    title: "E-Commerce Website: What Your Store Needs to Convert",
    description: "From product pages to checkout, discover the website elements that can make an online store easier to buy from.",
    category: "Digital Growth",
    datePublished: "2026-09-02",
    image: siteImage("ecommblog.webp"),
  },
  "/blog/mobile-first-design": {
    title: "Mobile-First Design: Why Your Website Must Work on Every Screen",
    description: "Most visitors experience your business through a phone. Here is why mobile-first thinking matters.",
    category: "Web Development",
    datePublished: "2026-09-01",
    image: siteImage("mobiledesign.webp"),
  },
};

const pages = {
  "/": {
    title: "404 Solution — Web Development, UI/UX & Digital Growth Agency",
    description: "404 Solution builds fast, responsive websites and web apps, designs interfaces users love, and drives social media and digital growth. Asansol, India.",
    image: DEFAULT_IMAGE,
  },
  "/about": {
    title: "About 404 Solution | Digital Solutions Agency",
    description: "Learn about 404 Solution, our approach, services, and how we help businesses build stronger digital experiences and grow online.",
    image: siteImage("about page hero.webp"),
  },
  "/services": {
    title: "Web Development & Digital Services | 404 Solution",
    description: "Explore web development, UI/UX design, social media marketing, SEO, digital growth, branding and other digital services from 404 Solution.",
    image: siteImage("service page hero.webp"),
  },
  "/work": {
    title: "Our Work | Web Design & Development Projects | 404 Solution",
    description: "Explore selected web development, UI/UX and digital projects created by 404 Solution.",
    image: DEFAULT_IMAGE,
  },
  "/blog": {
    title: "Digital Growth & Web Development Blog | 404 Solution",
    description: "Explore practical insights on web development, UI/UX design, SEO, social media, e-commerce and digital growth from 404 Solution.",
    image: siteImage("blog-hero.webp"),
  },
  "/contact": {
    title: "Contact 404 Solution | Let's Build Something Great",
    description: "Get in touch with 404 Solution for web development, UI/UX design, social media, SEO and digital growth solutions.",
    image: siteImage("HERO IMAGE.webp"),
  },
};

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function removeMeta(attribute, key) {
  document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove();
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${ORIGIN}/#organization`,
    name: SITE_NAME,
    url: `${ORIGIN}/`,
    logo: { "@type": "ImageObject", url: DEFAULT_IMAGE, width: 1024, height: 467 },
    email: "404solutions.business@gmail.com",
    telephone: "+91-86378-20298",
    address: { "@type": "PostalAddress", addressLocality: "Asansol", addressRegion: "West Bengal", addressCountry: "IN" },
    contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "404solutions.business@gmail.com", telephone: "+91-86378-20298", areaServed: "Worldwide", availableLanguage: ["en"] },
  };
}

function websiteSchema() {
  return { "@type": "WebSite", "@id": `${ORIGIN}/#website`, url: `${ORIGIN}/`, name: SITE_NAME, description: "Web development, UI/UX design, social media and digital growth agency.", publisher: { "@id": `${ORIGIN}/#organization` }, inLanguage: "en" };
}

function pageSchema(path, metadata) {
  return { "@type": "WebPage", "@id": `${ORIGIN}${path}#webpage`, url: `${ORIGIN}${path}`, name: metadata.title, description: metadata.description, isPartOf: { "@id": `${ORIGIN}/#website` }, about: { "@id": `${ORIGIN}/#organization` }, primaryImageOfPage: { "@type": "ImageObject", url: metadata.image }, inLanguage: "en" };
}

function articleSchema(path, article) {
  const schema = { "@type": "BlogPosting", "@id": `${ORIGIN}${path}#article`, mainEntityOfPage: { "@type": "WebPage", "@id": `${ORIGIN}${path}` }, headline: article.title, description: article.description, image: [article.image], author: { "@id": `${ORIGIN}/#organization` }, publisher: { "@id": `${ORIGIN}/#organization` }, articleSection: article.category, url: `${ORIGIN}${path}`, inLanguage: "en" };
  if (article.datePublished) schema.datePublished = article.datePublished;
  return schema;
}

function professionalServiceSchema() {
  return { "@type": "ProfessionalService", "@id": `${ORIGIN}/#service`, name: SITE_NAME, url: `${ORIGIN}/`, image: DEFAULT_IMAGE, parentOrganization: { "@id": `${ORIGIN}/#organization` }, areaServed: "Worldwide", hasOfferCatalog: { "@type": "OfferCatalog", name: "Digital services", itemListElement: [ ["Web Development", "Fast, responsive and scalable websites & web apps."], ["UI/UX Design", "Beautiful interfaces that your users will love."], ["Social Media", "Content, strategy & management that grows your brand."], ["Digital Growth", "Data-driven strategies to take your business to the next level." ] ].map(([name, description]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, description } })) } };
}

function servicesSchema() {
  return { "@type": "ItemList", "@id": `${ORIGIN}/services#services`, name: "404 Solution digital services", itemListElement: ["Web Development", "UI/UX Design", "SEO & Digital Growth", "Social Media Marketing", "Branding & Identity", "Other Services"].map((name, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Service", name, provider: { "@id": `${ORIGIN}/#organization` }, areaServed: "Worldwide" } })) };
}

function updateStructuredData(path, metadata, article) {
  const existing = document.getElementById("site-structured-data");
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.id = "site-structured-data";
  script.type = "application/ld+json";
  const graph = [organizationSchema(), websiteSchema()];
  if (article) graph.push(articleSchema(path, article));
  else if (path === "/") graph.push(professionalServiceSchema());
  else if (path === "/services") graph.push(servicesSchema());
  else graph.push(pageSchema(path, metadata));
  script.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  document.head.appendChild(script);
}

export function updateSeo(rawPath) {
  const path = rawPath.replace(/\/$/, "") || "/";
  const article = articles[path];
  const metadata = article || pages[path] || pages["/"];
  const canonicalPath = path === "/" ? "/" : path;
  const canonical = `${ORIGIN}${canonicalPath}`;
  const image = metadata.image.startsWith("http") ? metadata.image : `${ORIGIN}${metadata.image}`;
  document.title = metadata.title;
  setCanonical(canonical);
  upsertMeta("name", "description", metadata.description);
  upsertMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:locale", "en_IN");
  upsertMeta("property", "og:type", article ? "article" : "website");
  upsertMeta("property", "og:url", canonical);
  upsertMeta("property", "og:title", metadata.title);
  upsertMeta("property", "og:description", metadata.description);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:image:alt", `${metadata.title} — 404 Solution`);
  upsertMeta("name", "twitter:card", "summary");
  upsertMeta("name", "twitter:title", metadata.title);
  upsertMeta("name", "twitter:description", metadata.description);
  upsertMeta("name", "twitter:image", image);
  upsertMeta("name", "twitter:image:alt", `${metadata.title} — 404 Solution`);
  if (article?.datePublished) upsertMeta("property", "article:published_time", article.datePublished);
  else removeMeta("property", "article:published_time");
  if (article?.category) upsertMeta("property", "article:section", article.category);
  else removeMeta("property", "article:section");
  updateStructuredData(path, metadata, article);
}



