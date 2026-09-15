import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { templateViews } from "@/db/schema";
import { getTemplate } from "@/lib/catalog";

export async function POST(request: Request) {
  try {
    const { slug } = (await request.json()) as { slug?: string };
    if (!slug || !getTemplate(slug)) {
      return NextResponse.json({ error: "Unknown template" }, { status: 400 });
    }
    const [row] = await db
      .insert(templateViews)
      .values({ slug, views: 1 })
      .onConflictDoUpdate({
        target: templateViews.slug,
        set: { views: sql`${templateViews.views} + 1`, updatedAt: new Date() },
      })
      .returning({ views: templateViews.views });
    return NextResponse.json({ ok: true, views: row.views });
  } catch (error) {
    console.error("View tracking failed", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
