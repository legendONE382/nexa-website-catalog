import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const templateViews = pgTable("template_views", {
  slug: text("slug").primaryKey(),
  views: integer("views").notNull().default(0),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const websiteOrders = pgTable("website_orders", {
  id: uuid("id").defaultRandom().primaryKey(),
  templateSlug: text("template_slug").notNull(),
  templateName: text("template_name").notNull(),
  businessName: text("business_name").notNull(),
  customerName: text("customer_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  industry: text("industry").notNull(),
  packageName: text("package_name").notNull(),
  requirements: text("requirements"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
