import { ArrowRight, CalendarDays, Clock3, Search } from "lucide-react";
import { useState } from "react";
import "./Blog.css";
import Footer from "./Footer";

const blogImages = import.meta.glob("../assets/blogs/*.webp", {
  eager: true,
  import: "default",
});

const getBlogImage = (filename) => blogImages[`../assets/blogs/${filename}`];

const heroImage = getBlogImage("blog-hero.webp");
const featuredImage = getBlogImage("featured-website.webp");

const posts = [
  {
    id: 1,
    category: "Web Development",
    title: "5 Website Mistakes That Make Your Business Look Unprofessional",
    excerpt:
      "Small website mistakes can quietly hurt trust, conversions and your brand. Here are five things worth fixing.",
    readTime: "4 min read",
    date: "Sep 5, 2026",
    type: "mistakes",
    image: getBlogImage("website-mistakes.webp"),
  },
  {
    id: 2,
    category: "UI/UX Design",
    title: "UI/UX Design: Why Good Design Is More Than Just Pretty",
    excerpt:
      "Good design is not only about appearance. It helps people understand, navigate and trust your business.",
    readTime: "5 min read",
    date: "Sep 4, 2026",
    type: "design",
    image: getBlogImage("uiux-designs.webp"),
  },
  {
    id: 3,
    category: "Social Media",
    title: "How Social Media Can Actually Grow Your Business",
    excerpt:
      "A consistent social strategy can turn attention into trust, conversations and real business growth.",
    readTime: "6 min read",
    date: "Sep 3, 2026",
    type: "social",
    image: getBlogImage("socialmedia.webp"),
  },
  {
    id: 4,
    category: "Digital Growth",
    title: "E-Commerce Website: What Your Store Needs to Convert",
    excerpt:
      "From product pages to checkout, discover the website elements that can make an online store easier to buy from.",
    readTime: "5 min read",
    date: "Sep 2, 2026",
    type: "ecommerce",
    image: getBlogImage("ecommblog.webp"),
  },
  {
    id: 5,
    category: "Web Development",
    title: "Mobile-First Design: Why Your Website Must Work on Every Screen",
    excerpt:
      "Most visitors experience your business through a phone. Here is why mobile-first thinking matters.",
    readTime: "4 min read",
    date: "Sep 1, 2026",
    type: "mobile",
    image: getBlogImage("mobiledesign.webp"),
  },
  {
    id: 6,
    category: "Business",
    title: "SEO Basics Every Small Business Should Know",
    excerpt:
      "You do not need to be an SEO expert to improve your visibility. Start with these practical basics.",
    readTime: "6 min read",
    date: "Aug 30, 2026",
    type: "seo",
    image: getBlogImage("seo-basics.webp"),
  },
];

const categories = [
  "All Posts",
  "Web Development",
  "UI/UX Design",
  "Social Media",
  "Digital Growth",
  "Business",
];

const POSTS_PER_PAGE = 6;

function PostIllustration({ type, image, alt, featured = false }) {
  return (
    <div className={`blog-illustration blog-illustration--${type} ${featured ? "is-featured" : ""}`}>
      {image ? (
        <img
          className="blog-manual-image"
          src={image}
          alt={alt}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <>
      {type === "mistakes" && (
        <>
          <div className="ill-browser">
            <div className="ill-browser-top">
              <i />
              <i />
              <i />
            </div>
            <div className="ill-warning">!</div>
            <div className="ill-line ill-line--1" />
            <div className="ill-line ill-line--2" />
          </div>
          <div className="ill-dot ill-dot--a" />
          <div className="ill-dot ill-dot--b" />
        </>
      )}

      {type === "design" && (
        <>
          <div className="ill-browser ill-browser--design">
            <div className="ill-browser-top">
              <i />
              <i />
              <i />
            </div>
            <div className="ill-panel">
              <div />
              <div />
              <div />
            </div>
            <div className="ill-cursor" />
          </div>
        </>
      )}

      {type === "social" && (
        <>
          <div className="ill-megaphone">
            <div className="ill-megaphone-mouth" />
            <div className="ill-megaphone-handle" />
          </div>
          <div className="ill-social-badge">◎</div>
          <div className="ill-social-badge ill-social-badge--two">▶</div>
          <div className="ill-social-badge ill-social-badge--three">♥</div>
        </>
      )}

      {type === "ecommerce" && (
        <>
          <div className="ill-cart">
            <div className="ill-cart-basket" />
            <div className="ill-cart-wheel one" />
            <div className="ill-cart-wheel two" />
          </div>
          <div className="ill-bag">
            <div />
          </div>
        </>
      )}

      {type === "mobile" && (
        <>
          <div className="ill-phone">
            <div className="ill-phone-screen">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="ill-orb ill-orb--one" />
          <div className="ill-orb ill-orb--two" />
        </>
      )}

      {type === "seo" && (
        <>
          <div className="ill-seo-page">
            <strong>SEO</strong>
            <span />
            <span />
          </div>
          <div className="ill-search-glass" />
        </>
      )}
        </>
      )}
    </div>
  );
}

function FeaturedIllustration() {
  return (
    <div className="blog-featured-art">
      <div className="featured-window">
        <div className="featured-window__top">
          <i />
          <i />
          <i />
        </div>

        <div className="featured-chart">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="featured-question">?</div>
      </div>

      <div className="featured-person">
        <div className="person-head" />
        <div className="person-hair" />
        <div className="person-body" />
        <div className="person-hand" />
      </div>

      <div className="featured-orb orb-one" />
      <div className="featured-orb orb-two" />
    </div>
  );
}

export default function Blog({ onOpenContact, onOpenArticle, onOpenUiUxArticle, onOpenSocialMediaArticle, onOpenSeoArticle, onOpenMobileFirstArticle, onOpenEcommerceArticle }) {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState(null);

  const categoryPosts = selectedCategory === "All Posts"
    ? posts
    : posts.filter((post) => post.category === selectedCategory);
  const normalizedQuery = searchQuery.toLowerCase().replace(/[\s-]+/g, "");
  const filteredPosts = normalizedQuery
    ? categoryPosts.filter((post) => {
        const searchableContent = [
          post.title,
          post.excerpt,
          post.category,
          ...(post.tags || []),
        ]
          .join(" ")
          .toLowerCase()
          .replace(/[\s-]+/g, "");
        return searchableContent.includes(normalizedQuery);
      })
    : categoryPosts;
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setNewsletterMessage({ type: "error", text: "Please enter your email address." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setNewsletterMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setNewsletterMessage({ type: "success", text: "You're subscribed!" });
  };

  return (
    <>
      <div className="blog-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero__grid">
            <div className="blog-hero__content">
              <span className="blog-eyebrow">THE 404 BLOG</span>

              <h1>
                Ideas, insights &{" "}
                <span>digital solutions.</span>
              </h1>

              <p>
                Tips, trends and practical ideas to help you build,
                grow and scale your business in the digital world.
              </p>

              <div className="blog-search">
                <Search size={19} />
                <input
                  type="search"
                  placeholder="Search articles, topics..."
                  aria-label="Search articles"
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="blog-hero__visual">
              {heroImage ? (
                <img
                  className="blog-hero-image"
                  src={heroImage}
                  alt="Blog illustration"
                />
              ) : (
                <>
              <div className="hero-speech">
                <span>Good</span>
                <span>Ideas</span>
                <span>Build</span>
                <span>Better</span>
                <span>Businesses.</span>
                <b />
              </div>

              <div className="hero-robot">
                <div className="robot-antenna" />
                <div className="robot-head">
                  <div className="robot-face">
                    <i />
                    <i />
                    <b>⌣</b>
                  </div>
                  <div className="robot-ear left" />
                  <div className="robot-ear right" />
                </div>

                <div className="robot-body">
                  <div className="robot-arm left" />
                  <div className="robot-arm right" />
                </div>
              </div>

              <div className="hero-laptop">
                <div className="laptop-screen">404</div>
                <div className="laptop-base" />
              </div>

              <div className="hero-books">
                <span>Ideas</span>
                <span>Strategy</span>
                <span>Growth</span>
              </div>

              <div className="hero-plant">
                <i />
                <i />
                <i />
              </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ===================================================== */}
      <section className="blog-categories">
        <div className="container">
          <div className="blog-category-list">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`blog-category ${
                  selectedCategory === category ? "blog-category--active" : ""
                }`}
                aria-pressed={selectedCategory === category}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED
      ===================================================== */}
      <section className="blog-featured-section">
        <div className="container">
          <article className="blog-featured-card">
            <div className="blog-featured-image">
              {featuredImage ? (
                <img
                  className="blog-manual-image"
                  src={featuredImage}
                  alt="Featured blog illustration"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <FeaturedIllustration />
              )}
            </div>

            <div className="blog-featured-content">
              <span className="featured-label">FEATURED</span>

              <h2>
                Why Your Website Gets
                <br />
                Visitors but No Customers
              </h2>

              <p>
                You&apos;re getting traffic, but sales aren&apos;t growing?
                Let&apos;s break down the real reasons and how to fix them.
              </p>

              <div className="blog-meta">
                <span>
                  <span className="meta-icon">⌑</span>
                  Web Development
                </span>

                <span>
                  <Clock3 size={14} />
                  6 min read
                </span>

                <span>
                  <CalendarDays size={14} />
                  Sep 5, 2026
                </span>
              </div>

              <button className="blog-read-btn" onClick={onOpenArticle}>
                Read Article
                <ArrowRight size={17} />
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          POSTS
      ===================================================== */}
      <section className="blog-posts-section">
        <div className="container">
          <div className="blog-post-grid">
            {visiblePosts.length > 0 ? visiblePosts.map((post) => (
              <article className="blog-post-card" key={post.id}>
                <PostIllustration
                  type={post.type}
                  image={post.image}
                  alt={post.title}
                />

                <div className="blog-post-card__body">
                  <h3>{post.title}</h3>

                  <div className="blog-post-meta">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <button
                    type="button"
                    className="blog-post-link"
                    onClick={post.title === "5 Website Mistakes That Make Your Business Look Unprofessional" ? onOpenArticle : post.title === "UI/UX Design: Why Good Design Is More Than Just Pretty" ? onOpenUiUxArticle : post.title === "How Social Media Can Actually Grow Your Business" ? onOpenSocialMediaArticle : post.title === "SEO Basics Every Small Business Should Know" ? onOpenSeoArticle : post.title === "Mobile-First Design: Why Your Website Must Work on Every Screen" ? onOpenMobileFirstArticle : post.title === "E-Commerce Website: What Your Store Needs to Convert" ? onOpenEcommerceArticle : undefined}
                  >
                    Read Article
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            )) : (
              <p className="blog-empty-state">No articles found.</p>
            )}
          </div>

          {/* =====================================================
              PAGINATION
          ===================================================== */}
          {totalPages > 1 && (
            <div className="blog-pagination">
            <button
              type="button"
              className="pagination-arrow"
              aria-label="Previous page"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            >
              <ArrowRight size={17} className="pagination-arrow--previous" />
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={`pagination-number ${
                  currentPage === page ? "pagination-number--active" : ""
                }`}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className="pagination-arrow"
              aria-label="Next page"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            >
              <ArrowRight size={17} />
            </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ===================================================== */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-icon">✉</div>

            <div className="newsletter-copy">
              <h3>Get the latest insights</h3>
              <p>
                Subscribe to our newsletter and never miss an update.
              </p>
            </div>

            <div className="newsletter-actions">
              <form
                className="newsletter-form"
                onSubmit={handleNewsletterSubmit}
                noValidate
              >
                <label className="sr-only" htmlFor="blog-newsletter-email">
                  Email address
                </label>
                <input
                  id="blog-newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (newsletterMessage) setNewsletterMessage(null);
                  }}
                  aria-invalid={newsletterMessage?.type === "error"}
                  aria-describedby="blog-newsletter-message"
                />

                <button type="submit" aria-label="Subscribe to newsletter">
                  Subscribe
                </button>
              </form>
              <p
                id="blog-newsletter-message"
                className={`newsletter-message newsletter-message--${newsletterMessage?.type || "hidden"}`}
                role={newsletterMessage?.type === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {newsletterMessage?.text || ""}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="blog-bottom-cta">
        <div className="container">
          <div className="blog-bottom-cta__card">
            <div className="cta-circle cta-circle--one" />
            <div className="cta-circle cta-circle--two" />

            <div>
              <h2>
                Have a project in mind?
                <br />
                Let&apos;s build it together.
              </h2>
            </div>

            <button
              className="blog-cta-button"
              onClick={onOpenContact}
            >
              Start a Project
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
      </div>
      <Footer onOpenContact={onOpenContact} />
    </>
  );
}
