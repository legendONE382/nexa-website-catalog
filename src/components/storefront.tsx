"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, formatNaira, templates } from "@/lib/catalog";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3A12.8 12.8 0 0 0 5.12 22.48L3.3 29l6.68-1.75A12.83 12.83 0 1 0 16.04 3Zm0 23.46c-1.9 0-3.76-.5-5.4-1.46l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.62 10.62 0 1 1 8.94 4.91Zm5.82-7.95c-.32-.16-1.88-.93-2.17-1.04-.3-.11-.51-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59a9.6 9.6 0 0 1-1.78-2.21c-.19-.32-.02-.5.14-.65.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.66 0 1.57 1.14 3.08 1.3 3.3.16.21 2.24 3.42 5.43 4.8.76.32 1.35.52 1.81.67.76.24 1.45.2 2 .12.61-.09 1.88-.77 2.14-1.51.27-.75.27-1.39.19-1.52-.08-.14-.3-.22-.62-.38Z"/></svg>;
}

function BrowserPreview() {
  const slides = [templates[0], templates[1], templates[2]];
  return (
    <div className="hero-stage" aria-label="Website design preview montage">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="browser browser-back">
        <img src={slides[2].image} alt="Real estate website preview" />
      </div>
      <div className="browser browser-main">
        <div className="browser-bar"><i/><i/><i/><span>yourbusiness.ng</span></div>
        <div className="browser-screen">
          <video autoPlay muted loop playsInline poster={slides[0].image}>
            <source src={slides[0].video} type="video/mp4" />
          </video>
          <div className="screen-shade" />
          <div className="mock-nav"><b>ÒRÙN</b><span>Menu &nbsp; Our story &nbsp; Visit</span><em>Reserve a table</em></div>
          <div className="mock-copy"><small>CONTEMPORARY NIGERIAN DINING</small><strong>Every plate<br/>tells a story.</strong><button>Explore our menu ↗</button></div>
        </div>
      </div>
      <div className="browser browser-phone">
        <img src={slides[1].image} alt="Fashion website mobile preview" />
        <div><b>ADÁRA</b><small>NEW COLLECTION</small></div>
      </div>
      <div className="sales-chip"><span>✓</span><div><b>Built to sell</b><small>Mobile-first & fast</small></div></div>
    </div>
  );
}

const packages = [
  { name: "Starter", price: "₦50,000+", text: "The fast, polished start your business needs.", items: ["Your chosen ready-made design", "Logo, colours & content setup", "WhatsApp and contact integration", "Mobile responsive website"] },
  { name: "Business", price: "₦75,000+", text: "Everything required to confidently grow online.", featured: true, items: ["Everything in Starter", "Domain and hosting setup", "Up to 7 tailored pages", "Google Maps & basic SEO", "30 days support"] },
  { name: "Premium", price: "₦100,000+", text: "More control for ambitious, growing brands.", items: ["Everything in Business", "Advanced customisation", "Booking, payments or catalog", "Priority delivery & support", "Analytics setup"] },
];

const reviews = [
  { quote: "We stopped sending customers to WhatsApp screenshots. Orders doubled in the first month after launch.", name: "Chinedu A.", role: "Owner, Mama's Kitchen · Lagos", avatar: "https://images.pexels.com/photos/19568392/pexels-photo-19568392.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200" },
  { quote: "I picked the design on Monday and my website was live by Friday. Clients take my business seriously now.", name: "Halima Y.", role: "Founder, Muse Beauty · Abuja", avatar: "https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200" },
  { quote: "Seeing the working demo before paying removed all my doubt. Exactly what I got, no surprises.", name: "Emeka O.", role: "MD, Swiftline Haulage · Onitsha", avatar: "https://images.pexels.com/photos/17060523/pexels-photo-17060523.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200" },
];

const results = [
  { value: "120+", label: "Businesses launched" },
  { value: "5–10", label: "Days to go live" },
  { value: "4.9/5", label: "Client rating" },
  { value: "36", label: "States served" },
];

const ticker = ["Restaurant website ordered · Lekki", "Beauty salon website delivered · Abuja", "Real estate website ordered · Ikoyi", "Logistics website delivered · Onitsha", "Fashion store ordered · Port Harcourt", "Hotel website delivered · Calabar"];

export default function Storefront({ views = {} }: { views?: Record<string, number> }) {
  const [active, setActive] = useState("all");
  const filtered = useMemo(() => active === "all" ? templates : templates.filter(t => t.category === active), [active]);
  const whatsapp = "https://wa.me/2348167956087?text=Hello%20Nexa%2C%20I%27d%20like%20help%20choosing%20a%20website.";

  return <main>
    <header className="site-nav shell">
      <Link href="/" className="logo"><span>N</span>NEXA<small>WEBSITES</small></Link>
      <nav><a href="#websites">Websites</a><a href="#how">How it works</a><a href="#pricing">Pricing</a></nav>
      <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon/> Chat with us</a>
    </header>

    <section className="hero shell">
      <div className="hero-copy">
        <div className="eyebrow"><span>●</span> PREMIUM READY-MADE WEBSITES</div>
        <h1>See your business<br/><em>online</em> before<br/>you buy it.</h1>
        <p>Choose a professionally designed website, make it yours, and launch—without the agency headache.</p>
        <div className="hero-actions"><a className="button primary" href="#websites">Browse websites <Arrow/></a><a className="text-link" href="#how"><span>▶</span> See how it works</a></div>
        <div className="proof"><div className="avatar-stack"><span>AO</span><span>NK</span><span>TI</span><span>+</span></div><div><b>Trusted by 120+ Nigerian businesses</b><small><i>★★★★★</i> 4.9 average rating</small></div></div>
      </div>
      <BrowserPreview/>
    </section>

    <div className="trust-strip"><span>Built for Nigerian businesses</span><b>⚡ Launch in 5–10 days</b><b>◆ Mobile-first design</b><b>● WhatsApp ready</b><b>✓ Secure & reliable</b></div>

    <section className="catalog-section shell" id="websites">
      <div className="section-head"><div><span className="section-kicker">THE WEBSITE STORE</span><h2>Find the one that feels<br/>like <em>your business.</em></h2></div><p>Every design is complete, responsive and ready to be customised with your own brand, content and business details.</p></div>
      <div className="category-row" role="tablist" aria-label="Filter websites by industry">
        {categories.map(cat => <button key={cat.value} onClick={() => setActive(cat.value)} className={active === cat.value ? "active" : ""} role="tab" aria-selected={active === cat.value}>{cat.label}</button>)}
      </div>
      <div className="catalog-grid">
        {filtered.map((item, i) => <article className="product-card" key={item.slug} style={{animationDelay: `${i * 60}ms`}}>
          <Link href={`/demo/${item.slug}`} className="product-media" aria-label={`View ${item.name} demo`}>
            {item.video ? <video muted loop playsInline poster={item.image} onMouseEnter={e => e.currentTarget.play()} onMouseLeave={e => {e.currentTarget.pause(); e.currentTarget.currentTime = 0;}}><source src={item.video}/></video> : <img src={item.image} alt={`${item.name} preview`}/>} 
            <span className="industry-tag">{item.categoryLabel}</span><span className="live-tag"><i/> LIVE DEMO</span>
            <span className="views-tag">👁 {(views[item.slug] ?? 0).toLocaleString("en-NG")} views</span>
            <div className="website-overlay"><b>{item.brand}</b><small>{item.tagline}</small></div>
          </Link>
          <div className="product-content">
            <div className="product-title"><div><h3>{item.name}</h3><p>{item.description}</p></div><span><small>FROM</small>{formatNaira(item.price)}</span></div>
            <div className="feature-list">{item.features.map(f => <span key={f}>✓ {f}</span>)}</div>
            <div className="card-actions"><Link className="demo-btn" href={`/demo/${item.slug}`}>View live demo <Arrow diagonal/></Link><Link className="get-btn" href={`/order/${item.slug}`}>Get this website <Arrow/></Link></div>
          </div>
        </article>)}
      </div>
    </section>

    <section className="process" id="how"><div className="shell">
      <div className="section-head light"><div><span className="section-kicker">SIMPLE BY DESIGN</span><h2>From “I like this”<br/>to <em>“We’re live.”</em></h2></div><p>We removed the long meetings, confusing proposals and surprise fees. Your new website is only three steps away.</p></div>
      <div className="steps"><div><span>01</span><i>⌁</i><h3>Pick your website</h3><p>Explore real, working demos and choose the design that fits your business best.</p></div><div><span>02</span><i>✦</i><h3>Make it yours</h3><p>Send your logo, colours, photos and content. We customise every detail around your brand.</p></div><div><span>03</span><i>↗</i><h3>Launch & grow</h3><p>Review your website, approve it, and go live—typically in just 5 to 10 working days.</p></div></div>
    </div></section>

    <section className="results shell"><div className="results-band">{results.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>

    <section className="reviews shell">
      <div className="section-head"><div><span className="section-kicker">REAL BUSINESSES, REAL RESULTS</span><h2>They picked a design.<br/>Then <em>everything changed.</em></h2></div><p>Nigerian business owners who stopped looking unprofessional online—and started winning the customers they deserve.</p></div>
      <div className="review-row">{reviews.map(r => <article key={r.name}><div className="stars">★★★★★</div><p>“{r.quote}”</p><div className="review-person"><img src={r.avatar} alt={r.name}/><div><b>{r.name}</b><small>{r.role}</small></div></div></article>)}</div>
    </section>

    <div className="ticker"><div className="ticker-track">{[...ticker, ...ticker].map((entry, i) => <span key={i}><i/> {entry}</span>)}</div></div>

    <section className="pricing shell" id="pricing">
      <div className="pricing-intro"><span className="section-kicker">CLEAR, HONEST PRICING</span><h2>A package for<br/>every <em>ambition.</em></h2><p>Start with what you need today. Every package comes with a professionally designed, mobile-ready website.</p></div>
      <div className="price-grid">{packages.map(pkg => <article key={pkg.name} className={pkg.featured ? "featured" : ""}>{pkg.featured && <span className="popular">MOST POPULAR</span>}<h3>{pkg.name}</h3><p>{pkg.text}</p><strong>{pkg.price}</strong><small>one-time project fee</small><ul>{pkg.items.map(item => <li key={item}>✓ <span>{item}</span></li>)}</ul><a href={whatsapp} target="_blank" rel="noreferrer">Choose {pkg.name} <Arrow/></a></article>)}</div>
    </section>

    <section className="cta-shell shell"><div className="final-cta"><div><span>YOUR BUSINESS DESERVES BETTER</span><h2>Ready to look<br/><em>the part?</em></h2><p>Let’s give your business a website customers trust—and remember.</p><div><a className="button lime" href="#websites">Browse all websites <Arrow/></a><a href={whatsapp} target="_blank" rel="noreferrer" className="cta-chat"><WhatsAppIcon/> Chat on WhatsApp</a></div></div><div className="cta-art"><div className="mini-browser"><div>● ● ●</div><img src={templates[4].image} alt="Premium beauty website preview"/><b>MUSE<small>BEAUTY, REFINED.</small></b></div><span className="float-badge">✓<b>Ready in<br/>5–10 days</b></span></div></div></section>

    <footer><div className="shell footer-main"><div><Link href="/" className="logo inverted"><span>N</span>NEXA<small>WEBSITES</small></Link><p>Professional websites for Nigerian<br/>businesses—without the agency headache.</p></div><div><b>Explore</b><a href="#websites">Website catalog</a><a href="#how">How it works</a><a href="#pricing">Pricing</a></div><div><b>Popular industries</b><a href="#websites">Restaurants</a><a href="#websites">Real estate</a><a href="#websites">Fashion & beauty</a></div><div><b>Talk to us</b><a href={whatsapp}>WhatsApp</a><a href="mailto:hello@nexa.ng">hello@nexa.ng</a><span>Lagos, Nigeria 🇳🇬</span></div></div><div className="shell footer-bottom"><span>© 2026 Nexa Websites. All rights reserved.</span><span>Built for bold Nigerian businesses.</span></div></footer>
    <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><WhatsAppIcon/><span>Let’s talk</span></a>
  </main>;
}
