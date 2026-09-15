import Storefront from "@/components/storefront";
import { getViewCounts } from "@/lib/views";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const views = await getViewCounts();
  return <Storefront views={views} />;
}
