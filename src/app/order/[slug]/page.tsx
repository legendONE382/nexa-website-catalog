import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OrderForm from "@/components/order-form";
import { getTemplate, templates } from "@/lib/catalog";

export function generateStaticParams() {
  return templates.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getTemplate(slug);
  return item ? { title: `Get the ${item.name} | Nexa Websites`, description: `Customise and order the ${item.name} from ${item.price.toLocaleString("en-NG")} naira.` } : {};
}

export default async function OrderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getTemplate(slug);
  if (!item) notFound();
  return <OrderForm item={item}/>;
}
