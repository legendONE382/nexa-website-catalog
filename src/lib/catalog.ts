export type Template = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  categoryLabel: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  video?: string;
  accent: string;
  light: string;
  tagline: string;
  location: string;
};

export const categories = [
  { value: "all", label: "All websites" },
  { value: "restaurant", label: "Restaurants" },
  { value: "fashion", label: "Fashion" },
  { value: "real-estate", label: "Real estate" },
  { value: "logistics", label: "Logistics" },
  { value: "beauty", label: "Beauty" },
  { value: "hotel", label: "Hotels" },
  { value: "professional", label: "Professional" },
  { value: "ecommerce", label: "E-commerce" },
];

export const templates: Template[] = [
  {
    slug: "orun-restaurant",
    name: "Modern Restaurant Website",
    brand: "ÒRÙN",
    category: "restaurant",
    categoryLabel: "Restaurant",
    price: 60000,
    description: "An elegant dining website with menu, reservations, gallery, location and WhatsApp ordering.",
    features: ["Digital menu", "Table booking", "WhatsApp orders"],
    image: "https://images.pexels.com/photos/26729400/pexels-photo-26729400.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    video: "https://videos.pexels.com/video-files/12188718/12188718-hd_1920_1080_25fps.mp4",
    accent: "#e09b4d",
    light: "#f7efe5",
    tagline: "An unforgettable taste of Lagos",
    location: "Victoria Island, Lagos",
  },
  {
    slug: "adara-fashion",
    name: "Luxury Fashion Store",
    brand: "ADÁRA",
    category: "fashion",
    categoryLabel: "Fashion",
    price: 75000,
    description: "A bold editorial storefront made for collections, lookbooks, payments and nationwide delivery.",
    features: ["Product catalog", "Lookbook", "Online payments"],
    image: "https://images.pexels.com/photos/14577493/pexels-photo-14577493.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    video: "https://videos.pexels.com/video-files/7779050/7779050-hd_1920_1080_25fps.mp4",
    accent: "#d5ff4f",
    light: "#f3f1ea",
    tagline: "Made to be noticed",
    location: "Lekki Phase 1, Lagos",
  },
  {
    slug: "haven-realty",
    name: "Premium Real Estate Website",
    brand: "HAVEN",
    category: "real-estate",
    categoryLabel: "Real Estate",
    price: 85000,
    description: "A refined property experience with searchable listings, inspections and qualified enquiries.",
    features: ["Property listings", "Inspection booking", "Lead capture"],
    image: "https://images.pexels.com/photos/28681441/pexels-photo-28681441.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "#b69b70",
    light: "#f3f0e9",
    tagline: "Exceptional homes. Expertly selected.",
    location: "Abuja & Lagos, Nigeria",
  },
  {
    slug: "swiftline-logistics",
    name: "Logistics & Haulage Website",
    brand: "SWIFTLINE",
    category: "logistics",
    categoryLabel: "Logistics",
    price: 65000,
    description: "A high-trust logistics website with quote requests, service areas and shipment tracking UI.",
    features: ["Instant quote", "Service areas", "Tracking portal"],
    image: "https://images.pexels.com/photos/12418932/pexels-photo-12418932.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "#ff5b35",
    light: "#edf2f5",
    tagline: "Moving business forward",
    location: "Nationwide delivery",
  },
  {
    slug: "muse-beauty",
    name: "Beauty Salon & Spa Website",
    brand: "MUSE",
    category: "beauty",
    categoryLabel: "Beauty & Spa",
    price: 60000,
    description: "A polished salon site for showcasing services, stylists, prices and taking appointments.",
    features: ["Online booking", "Service menu", "Team profiles"],
    image: "https://images.pexels.com/photos/7960750/pexels-photo-7960750.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "#8b5e52",
    light: "#f8edeb",
    tagline: "Your beauty, beautifully cared for",
    location: "Ikeja GRA, Lagos",
  },
  {
    slug: "the-palm-hotel",
    name: "Boutique Hotel Website",
    brand: "THE PALM",
    category: "hotel",
    categoryLabel: "Hotel",
    price: 90000,
    description: "A luxurious hotel experience with rooms, amenities, gallery and direct reservation flow.",
    features: ["Room booking", "Availability", "Guest experiences"],
    image: "https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "#d4aa62",
    light: "#f6f1e9",
    tagline: "Your private escape in the city",
    location: "Ikoyi, Lagos",
  },
  {
    slug: "summit-consulting",
    name: "Professional Services Website",
    brand: "SUMMIT",
    category: "professional",
    categoryLabel: "Professional Services",
    price: 55000,
    description: "A credible, conversion-focused corporate site for consultants, law firms and specialists.",
    features: ["Service pages", "Case studies", "Consultation form"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "#3b82f6",
    light: "#edf3fa",
    tagline: "Clarity for your next bold move",
    location: "Lagos, Nigeria",
  },
  {
    slug: "market-day-store",
    name: "Modern E-commerce Store",
    brand: "MARKET DAY",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    price: 95000,
    description: "A fast, mobile-first online store designed for products, secure checkout and easy fulfilment.",
    features: ["Secure checkout", "Inventory", "Delivery options"],
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "#f75a3c",
    light: "#fff4e8",
    tagline: "Everyday finds, delivered",
    location: "Delivery across Nigeria",
  },
];

export const formatNaira = (amount: number) => `₦${amount.toLocaleString("en-NG")}`;

export function getTemplate(slug: string) {
  return templates.find((item) => item.slug === slug);
}
