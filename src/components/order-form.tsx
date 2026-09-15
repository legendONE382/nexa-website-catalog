"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import type { Template } from "@/lib/catalog";
import { formatNaira } from "@/lib/catalog";

export default function OrderForm({ item }: { item: Template }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successUrl, setSuccessUrl] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError("");
    const form = new FormData(e.currentTarget);
    const values = Object.fromEntries(form.entries()) as Record<string, string>;
    try {
      const response = await fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, templateSlug: item.slug }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not submit your request");
      const message = `Hello Nexa! I want to order the ${item.name}.\n\nBusiness: ${values.businessName}\nName: ${values.customerName}\nIndustry: ${values.industry}\nPackage: ${values.packageName}\nRequirements: ${values.requirements || "Let's discuss"}\nOrder reference: ${result.orderId}`;
      const url = `https://wa.me/2348112345678?text=${encodeURIComponent(message)}`;
      setSuccessUrl(url);
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (err) { setError(err instanceof Error ? err.message : "Something went wrong"); }
    finally { setLoading(false); }
  }

  return <main className="order-page">
    <nav className="order-nav"><Link href="/" className="logo"><span>N</span>NEXA<small>WEBSITES</small></Link><Link href={`/demo/${item.slug}`}>← Back to live demo</Link></nav>
    <section className="order-wrap">
      <aside className="order-summary"><span>YOUR SELECTED WEBSITE</span><h1>{item.name}</h1><p>{item.description}</p><div className="order-preview"><img src={item.image} alt={item.name}/><b>{item.brand}</b></div><div className="order-price"><span>Website starting from</span><strong>{formatNaira(item.price)}</strong></div></aside>
      <div className="order-form">
        {successUrl ? <div className="success-box"><span>✓</span><h2>Your request is saved.</h2><p>We’ve opened WhatsApp so you can send the details and get a quick response from our team.</p><a href={successUrl} target="_blank" rel="noreferrer">Continue to WhatsApp →</a></div> : <><h2>Let’s make it yours.</h2><p>Tell us a little about your business. This takes less than 2 minutes.</p>
        <form className="form-grid" onSubmit={submit}>
          <label>YOUR NAME *<input name="customerName" required placeholder="e.g. Ada Okafor"/></label>
          <label>BUSINESS NAME *<input name="businessName" required placeholder="e.g. Ada's Kitchen"/></label>
          <label>PHONE / WHATSAPP *<input name="phone" required type="tel" placeholder="0801 234 5678"/></label>
          <label>EMAIL ADDRESS<input name="email" type="email" placeholder="you@business.com"/></label>
          <label>INDUSTRY *<input name="industry" required defaultValue={item.categoryLabel}/></label>
          <label>WHERE ARE YOU BASED?<input name="location" placeholder="e.g. Lekki, Lagos"/></label>
          <label className="full">CHOOSE A PACKAGE<div className="package-options"><label><input type="radio" name="packageName" value="Starter"/><span>Starter<br/><small>₦50,000+</small></span></label><label><input type="radio" name="packageName" value="Business" defaultChecked/><span>Business<br/><small>₦75,000+</small></span></label><label><input type="radio" name="packageName" value="Premium"/><span>Premium<br/><small>₦100,000+</small></span></label></div></label>
          <label className="full">WHAT DO YOU NEED ON YOUR WEBSITE?<textarea name="requirements" placeholder="Tell us about your services, products, special features or timeline..."/></label>
          {error && <p className="form-note" style={{color:"#b42318"}}>{error}</p>}
          <button className="submit-order" disabled={loading}>{loading ? "Saving your request…" : "Submit & continue on WhatsApp →"}</button>
          <p className="form-note">No payment required now. We’ll confirm your exact scope and price first.</p>
        </form></>}
      </div>
    </section>
  </main>;
}
