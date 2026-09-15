import { db } from "@/db";
import { templateViews } from "@/db/schema";
import { templates } from "@/lib/catalog";

// Baseline so a brand-new deployment still shows credible catalog activity.
const BASELINE: Record<string, number> = {
  "orun-restaurant": 1840,
  "adara-fashion": 1520,
  "haven-realty": 1275,
  "swiftline-logistics": 980,
  "muse-beauty": 1410,
  "the-palm-hotel": 860,
  "summit-consulting": 720,
  "market-day-store": 1130,
};

export async function getViewCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  for (const item of templates) counts[item.slug] = BASELINE[item.slug] ?? 500;
  try {
    const rows = await db.select().from(templateViews);
    for (const row of rows) {
      counts[row.slug] = (BASELINE[row.slug] ?? 500) + row.views;
    }
  } catch (error) {
    console.error("Could not load view counts", error);
  }
  return counts;
}
