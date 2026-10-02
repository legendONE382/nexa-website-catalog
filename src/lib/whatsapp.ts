import { formatNaira, type Template } from "@/lib/catalog";

export const WHATSAPP_NUMBER = "2348167956087";

export function websiteRequestUrl(item: Template, details?: string) {
  const message = [
    "Hello Nexa, I am interested in this website:",
    `Website: ${item.name}`,
    `Starting price: ${formatNaira(item.price)}`,
    "",
    details || "Please share the next steps for making it mine.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
