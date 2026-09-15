import { NextResponse } from "next/server";
import { db } from "@/db";
import { websiteOrders } from "@/db/schema";
import { getTemplate } from "@/lib/catalog";

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, string>;
    const item = getTemplate(body.templateSlug);
    if (!item || !body.businessName?.trim() || !body.customerName?.trim() || !body.phone?.trim()) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }
    const [order] = await db.insert(websiteOrders).values({
      templateSlug: item.slug,
      templateName: item.name,
      businessName: body.businessName.trim(),
      customerName: body.customerName.trim(),
      phone: body.phone.trim(),
      email: body.email?.trim() || null,
      industry: body.industry?.trim() || item.categoryLabel,
      packageName: body.packageName || "Business",
      requirements: body.requirements?.trim() || null,
    }).returning({ id: websiteOrders.id });
    return NextResponse.json({ ok: true, orderId: order.id });
  } catch (error) {
    console.error("Order submission failed", error);
    return NextResponse.json({ error: "We could not save your request. Please try WhatsApp." }, { status: 500 });
  }
}
