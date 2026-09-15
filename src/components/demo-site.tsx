"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import type { Template } from "@/lib/catalog";
import { formatNaira } from "@/lib/catalog";
import { getDemoContent, px } from "@/lib/demo-content";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.15 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return { ref, className: shown ? "reveal in" : "reveal" };
}

function Reveal({ children, tag = "div", ...rest }: { children: ReactNode; tag?: "div" | "section"; className?: string; id?: string; style?: CSSProperties }) {
  const { ref, className } = useReveal<HTMLDivElement>();
  const Tag = tag;
  return <Tag ref={ref as never} {...rest} className={`${rest.className ?? ""} ${className}`}>{children}</Tag>;
}

function Counter({ value }: { value: string }) {
  const { ref, className } = useReveal<HTMLDivElement>();
  return <div ref={ref} className={`${className} stat-value`}>{value}</div>;
}

export default function DemoSite({ item }: { item: Template }) {
  const content = getDemoContent(item.slug);
  const [scrolled, setScrolled] = useState(false);
  const wa = (msg: string) => `https://wa.me/2348112345678?text=${encodeURIComponent(msg)}`;
  const enquiry = wa(`Hello ${item.brand}, I'd like to make an enquiry from your website.`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    window.addEventListener("scroll", onScroll, { passive: true });
    fetch("/api/views", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug: item.slug }) }).catch(() => {});
    return () => window.removeEventListener("scroll", onScroll);
  }, [item.slug]);

  return (
    <main className="demo-page" style={{ "--demo-accent": item.accent, "--demo-light": item.light } as CSSProperties}>
      <div className="demo-buybar">
        <span>You’re viewing a live demo — <b>{item.name}</b></span>
        <strong className="buybar-price">From {formatNaira(item.price)}</strong>
        <Link href={`/order/${item.slug}`}>Get this website →</Link>
        <Link href="/" className="buybar-back">← All designs</Link>
      </div>

      <nav className={scrolled ? "demo-nav solid" : "demo-nav"}>
        <Link href={`/demo/${item.slug}`} className="demo-brand">{item.brand}</Link>
        <div>
          {content.navLinks.map((link, i) => (
            <a key={link} href={["#story", "#offerings", "#gallery", "#contact"][i]}>{link}</a>
          ))}
          <a href={enquiry} target="_blank" rel="noreferrer" className="demo-nav-cta">{content.actionLabel.split(" ")[0]} now</a>
        </div>
      </nav>

      <section className="demo-hero">
        {item.video ? (
          <video autoPlay muted loop playsInline poster={item.image}><source src={item.video} type="video/mp4" /></video>
        ) : (
          <img src={item.image} alt={`${item.brand}`} />
        )}
        <div className="demo-hero-copy">
          <small>{item.categoryLabel.toUpperCase()} · {item.location.toUpperCase()}</small>
          <h1>{item.tagline}</h1>
          <p>{content.storyBody[0].slice(0, 130)}…</p>
          <div>
            <a href="#offerings">View {content.offerLabel.toLowerCase()} ↗</a>
            <a href={enquiry} target="_blank" rel="noreferrer" className="ghost">{content.actionLabel}</a>
          </div>
        </div>
        <div className="scroll-cue"><span /> SCROLL</div>
      </section>

      <div className="demo-stats">
        {content.stats.map((stat) => (
          <div key={stat.label}><Counter value={stat.value} /><span>{stat.label}</span></div>
        ))}
      </div>

      <Reveal tag="section" className="demo-section demo-intro" id="story">
        <div>
          <span className="demo-kicker">WELCOME TO {item.brand}</span>
          <h2>{content.storyTitle.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h2>
          {content.storyBody.map((para) => <p key={para}>{para}</p>)}
          <div className="intro-badges"><span>✓ Verified business</span><span>✓ {item.location}</span></div>
        </div>
        <div className="demo-photo-grid">
          <img src={px(content.gallery[0], 800, 1000)} alt={`${item.brand} 1`} />
          <img src={px(content.gallery[1], 700, 800)} alt={`${item.brand} 2`} />
        </div>
      </Reveal>

      <section className="demo-section demo-offerings" id="offerings">
        <Reveal className="demo-section-head">
          <p className="demo-kicker center">{content.offerKicker}</p>
          <h2>{content.offerTitle}</h2>
        </Reveal>
        <div className="offer-grid">
          {content.offerings.map((offer, i) => (
            <Reveal key={offer.name} className="offer-card" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <div className="offer-media"><img src={offer.image} alt={offer.name} /><span>{offer.price}</span></div>
              <h3>{offer.name}</h3>
              <p>{offer.desc}</p>
              <a href={wa(`Hello ${item.brand}, I'm interested in: ${offer.name} (${offer.price}).`)} target="_blank" rel="noreferrer">Enquire →</a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="demo-gallery-wrap" id="gallery">
        <Reveal className="demo-section-head light">
          <p className="demo-kicker center">GALLERY</p>
          <h2>{content.galleryTitle}</h2>
        </Reveal>
        <div className="demo-gallery">
          {content.gallery.map((id, i) => (
            <Reveal key={`${id}-${i}`} className="gallery-item" style={{ transitionDelay: `${i * 70}ms` }}>
              <img src={px(id, 700, 700)} alt={`${item.brand} gallery ${i + 1}`} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="demo-section demo-reviews">
        <Reveal className="demo-section-head">
          <p className="demo-kicker center">WHAT PEOPLE SAY</p>
          <h2>Trusted by real customers.</h2>
        </Reveal>
        <div className="review-grid">
          {content.testimonials.map((review, i) => (
            <Reveal key={review.name} className="review-card" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="stars">★★★★★</div>
              <p>“{review.quote}”</p>
              <div className="review-person"><img src={review.avatar} alt={review.name} /><div><b>{review.name}</b><small>{review.role}</small></div></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="demo-contact" id="contact">
        <Reveal className="contact-inner">
          <div>
            <span className="demo-kicker">GET IN TOUCH</span>
            <h2>{content.ctaTitle}</h2>
            <p>{content.ctaText}</p>
            <a className="contact-cta" href={enquiry} target="_blank" rel="noreferrer">{content.actionLabel} →</a>
            <div className="contact-meta"><span>📍 {item.location}</span><span>📞 0811 234 5678</span></div>
          </div>
          <div className="hours-card">
            <b>Opening hours</b>
            {content.hours.map((row) => <div key={row.day}><span>{row.day}</span><em>{row.time}</em></div>)}
            <small>Response usually within 1 hour</small>
          </div>
        </Reveal>
      </section>

      <footer className="demo-footer">
        <b>{item.brand}</b>
        <span>Instagram · Facebook · WhatsApp</span>
        <span>© 2026 {item.brand}. Demo website by Nexa.</span>
      </footer>

      <Link href={`/order/${item.slug}`} className="demo-float">Get this website — {formatNaira(item.price)}</Link>
    </main>
  );
}
