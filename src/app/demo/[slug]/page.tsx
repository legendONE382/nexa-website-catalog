import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DemoSite from "@/components/demo-site";
import { getTemplate, templates } from "@/lib/catalog";

export function generateStaticParams() {
  return templates.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getTemplate(slug);
  return item ? { title: `${item.brand} — Live Website Demo | Nexa`, description: item.description } : {};
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getTemplate(slug);
  if (!item) notFound();
  return <DemoSite item={item} />;
}
