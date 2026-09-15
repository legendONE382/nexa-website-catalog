export const px = (id: number, w = 900, h = 700) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export type Offering = { name: string; desc: string; price: string; image: string };
export type Testimonial = { quote: string; name: string; role: string; avatar: string };

export type DemoContent = {
  navLinks: string[];
  offerLabel: string;
  offerKicker: string;
  offerTitle: string;
  storyTitle: string;
  storyBody: string[];
  stats: { value: string; label: string }[];
  offerings: Offering[];
  gallery: number[];
  galleryTitle: string;
  testimonials: Testimonial[];
  ctaTitle: string;
  ctaText: string;
  actionLabel: string;
  hours: { day: string; time: string }[];
};

const AV = [19568392, 7717254, 17060523];
const avatar = (i: number) => px(AV[i], 200, 200);

export const demoContent: Record<string, DemoContent> = {
  "orun-restaurant": {
    navLinks: ["Our story", "Menu", "Gallery", "Reservations"],
    offerLabel: "Menu",
    offerKicker: "OUR SIGNATURE MENU",
    offerTitle: "Dishes people travel for.",
    storyTitle: "Rooted in tradition.\nPlated for today.",
    storyBody: [
      "Òrùn began with a simple belief: Nigerian food deserves a world-class stage. Every dish on our menu is built on family recipes, then refined by a kitchen that refuses to cut corners.",
      "We source produce from local markets every morning, smoke our own peppers, and cook with the kind of patience you can taste in the very first bite.",
    ],
    stats: [
      { value: "12", label: "Years serving Lagos" },
      { value: "48k", label: "Guests welcomed" },
      { value: "4.9", label: "Average guest rating" },
      { value: "25", label: "Signature dishes" },
    ],
    offerings: [
      { name: "Smoked Jollof Rice", desc: "Party-style jollof finished over firewood, with grilled chicken and plantain.", price: "₦8,500", image: px(18805640) },
      { name: "Òrùn Grill Platter", desc: "Peppered goat meat, suya-spiced beef and chicken with house dipping sauces.", price: "₦14,000", image: px(33434014) },
      { name: "Chef's Tasting Table", desc: "Seven considered courses celebrating the very best of Nigerian cuisine.", price: "₦25,000", image: px(28736727) },
      { name: "Seafood Pepper Soup", desc: "Fresh catch simmered in a fragrant, deeply spiced traditional broth.", price: "₦9,200", image: px(8166269) },
      { name: "Sunday Family Buffet", desc: "An all-you-can-enjoy spread of classics, served every Sunday from 1pm.", price: "₦12,000", image: px(28736731) },
      { name: "Private Dining Experience", desc: "A reserved room, dedicated chef and bespoke menu for your celebration.", price: "From ₦150,000", image: px(12387869) },
    ],
    gallery: [26729400, 32103518, 12387869, 28736731, 18805640],
    galleryTitle: "Inside Òrùn",
    testimonials: [
      { quote: "Easily the best jollof I have had in Lagos. The service made us feel like family from the moment we walked in.", name: "Adaeze N.", role: "Guest, Victoria Island", avatar: avatar(1) },
      { quote: "We hosted our anniversary dinner here. Everything was flawless — the food, the room, the attention to detail.", name: "Tunde A.", role: "Private dining guest", avatar: avatar(0) },
      { quote: "I bring every visiting client here. It always impresses, and the kitchen never has an off day.", name: "Chidi O.", role: "Regular since 2019", avatar: avatar(2) },
    ],
    ctaTitle: "Reserve your table.",
    ctaText: "Walk-ins are welcome, but weekends fill up fast. Book ahead and we'll have everything ready.",
    actionLabel: "Book a table on WhatsApp",
    hours: [{ day: "Monday – Thursday", time: "11:00am – 10:00pm" }, { day: "Friday – Saturday", time: "11:00am – 12:00am" }, { day: "Sunday", time: "1:00pm – 9:00pm" }],
  },
  "adara-fashion": {
    navLinks: ["New in", "Collections", "Lookbook", "Stockists"],
    offerLabel: "Shop",
    offerKicker: "THE NEW COLLECTION",
    offerTitle: "Pieces made to be kept.",
    storyTitle: "Designed in Lagos.\nWorn everywhere.",
    storyBody: [
      "Adára is a contemporary Nigerian label built on craftsmanship. Every piece is cut, sewn and finished by a small team of tailors who have spent decades perfecting their work.",
      "We produce in small runs, use considered fabrics, and design clothing meant to outlive the season it was made in.",
    ],
    stats: [
      { value: "9k+", label: "Orders delivered" },
      { value: "36", label: "States shipped to" },
      { value: "100%", label: "Made in Nigeria" },
      { value: "4.8", label: "Customer rating" },
    ],
    offerings: [
      { name: "The Adára Agbada", desc: "Hand-finished ceremonial agbada in structured premium cotton.", price: "₦145,000", image: px(14577493) },
      { name: "Editorial Silk Set", desc: "A fluid two-piece designed for evenings that deserve attention.", price: "₦89,000", image: px(35421536) },
      { name: "Statement Outerwear", desc: "Sculptural tailoring with a bold, unmistakably modern silhouette.", price: "₦120,000", image: px(10330177) },
      { name: "Everyday Linen Shirt", desc: "Breathable, beautifully cut and made for Lagos heat.", price: "₦38,000", image: px(14577493) },
      { name: "Bridal & Occasion", desc: "Made-to-measure pieces created with you across four fittings.", price: "From ₦350,000", image: px(35421536) },
      { name: "The Capsule Edit", desc: "Five coordinated essentials that work together effortlessly.", price: "₦210,000", image: px(10330177) },
    ],
    gallery: [14577493, 35421536, 10330177, 14577493, 35421536],
    galleryTitle: "The Lookbook",
    testimonials: [
      { quote: "The fit was perfect straight out of the box. I have never received so many compliments on one outfit.", name: "Zainab M.", role: "Verified buyer, Abuja", avatar: avatar(1) },
      { quote: "Quality you can feel immediately. This is the standard Nigerian fashion should be held to.", name: "Emeka U.", role: "Verified buyer, Enugu", avatar: avatar(0) },
      { quote: "Ordered on Monday, delivered Wednesday. The packaging alone felt like a luxury experience.", name: "Fola B.", role: "Verified buyer, Lagos", avatar: avatar(2) },
    ],
    ctaTitle: "Find your next favourite piece.",
    ctaText: "Nationwide delivery in 2–4 working days. Free returns within 7 days.",
    actionLabel: "Order on WhatsApp",
    hours: [{ day: "Showroom, Mon – Sat", time: "10:00am – 7:00pm" }, { day: "Online orders", time: "24 hours daily" }, { day: "Delivery", time: "2 – 4 working days" }],
  },
  "haven-realty": {
    navLinks: ["Listings", "Buy", "Sell", "Inspections"],
    offerLabel: "Listings",
    offerKicker: "AVAILABLE PROPERTIES",
    offerTitle: "Homes worth the move.",
    storyTitle: "Property, handled\nproperly.",
    storyBody: [
      "Haven exists because buying property in Nigeria should not feel like a gamble. Every listing we publish is verified, documented and physically inspected by our team before it reaches you.",
      "From first viewing to final papers, you get one dedicated advisor who tells you the truth and moves at your pace.",
    ],
    stats: [
      { value: "₦18b", label: "Property transacted" },
      { value: "430", label: "Families relocated" },
      { value: "100%", label: "Verified titles" },
      { value: "15", label: "Years in market" },
    ],
    offerings: [
      { name: "4-Bed Detached Duplex", desc: "Lekki Phase 1 · Private pool, BQ, fitted kitchen and secure estate.", price: "₦280,000,000", image: px(28681441) },
      { name: "3-Bed Luxury Apartment", desc: "Ikoyi · Ocean-facing terrace, gym access and 24-hour power.", price: "₦165,000,000", image: px(34432716) },
      { name: "Contemporary Family Villa", desc: "Maitama, Abuja · Five bedrooms set on generous private grounds.", price: "₦420,000,000", image: px(7031604) },
      { name: "Serviced Studio Apartment", desc: "Victoria Island · Fully furnished, ideal for young professionals.", price: "₦48,000,000", image: px(7031407) },
      { name: "Waterfront Land, 800sqm", desc: "Ajah · Verified C of O, ready for immediate development.", price: "₦75,000,000", image: px(28681441) },
      { name: "Investment Block, 6 Units", desc: "Gwarinpa · Fully tenanted with strong, proven rental yield.", price: "₦510,000,000", image: px(34432716) },
    ],
    gallery: [28681441, 7031604, 34432716, 7031407, 28681441],
    galleryTitle: "Recent Properties",
    testimonials: [
      { quote: "They talked me out of a bad deal before they ever sold me a good one. That earned my trust completely.", name: "Ibrahim S.", role: "Bought in Lekki", avatar: avatar(0) },
      { quote: "Documentation was clean, verified and explained clearly. The process was genuinely stress-free.", name: "Ngozi K.", role: "Bought in Abuja", avatar: avatar(1) },
      { quote: "Sold my property above asking price in six weeks. Professional from beginning to end.", name: "Segun A.", role: "Seller, Ikoyi", avatar: avatar(2) },
    ],
    ctaTitle: "Book a private inspection.",
    ctaText: "Tell us your budget and preferred area. We'll send you matching, verified options within 24 hours.",
    actionLabel: "Request an inspection",
    hours: [{ day: "Monday – Friday", time: "8:30am – 6:00pm" }, { day: "Saturday inspections", time: "10:00am – 4:00pm" }, { day: "Sunday", time: "By appointment" }],
  },
  "swiftline-logistics": {
    navLinks: ["Services", "Coverage", "Tracking", "Get a quote"],
    offerLabel: "Services",
    offerKicker: "WHAT WE MOVE",
    offerTitle: "Delivered, as promised.",
    storyTitle: "Your goods.\nOur reputation.",
    storyBody: [
      "Swiftline moves cargo across all 36 states with a fleet we own, drivers we train and tracking you can actually rely on. No guesswork, no disappearing shipments.",
      "Whether it is one carton or forty tonnes, you get a named coordinator and live updates from pickup to final signature.",
    ],
    stats: [
      { value: "36", label: "States covered" },
      { value: "98.6%", label: "On-time delivery" },
      { value: "120+", label: "Trucks in fleet" },
      { value: "24/7", label: "Dispatch support" },
    ],
    offerings: [
      { name: "Haulage & Heavy Cargo", desc: "Flatbed and container haulage for industrial loads nationwide.", price: "Quote in 1 hour", image: px(12418932) },
      { name: "Interstate Freight", desc: "Scheduled daily departures between Lagos, Abuja, Kano and Port Harcourt.", price: "From ₦85,000", image: px(36228061) },
      { name: "Last-Mile Delivery", desc: "Same-day dispatch riders and vans across major Nigerian cities.", price: "From ₦3,500", image: px(16023092) },
      { name: "Warehousing & Storage", desc: "Secure, insured warehouse space with full inventory management.", price: "From ₦120,000/mo", image: px(12418932) },
      { name: "E-commerce Fulfilment", desc: "We pick, pack and deliver your online orders with COD support.", price: "Custom pricing", image: px(36228061) },
      { name: "Fleet Contracts", desc: "Dedicated trucks and drivers assigned exclusively to your business.", price: "Monthly retainer", image: px(16023092) },
    ],
    gallery: [12418932, 36228061, 16023092, 12418932, 36228061],
    galleryTitle: "On The Road",
    testimonials: [
      { quote: "Three years, hundreds of shipments, zero losses. They have become part of how our business runs.", name: "Musa D.", role: "Operations lead, Kano", avatar: avatar(0) },
      { quote: "The tracking updates alone save my team hours every week. Communication is excellent.", name: "Blessing E.", role: "E-commerce founder", avatar: avatar(1) },
      { quote: "They moved our entire factory equipment overnight without a single issue. Seriously impressive.", name: "Henry O.", role: "Plant manager", avatar: avatar(2) },
    ],
    ctaTitle: "Get a quote in one hour.",
    ctaText: "Send us your pickup point, destination and load details. We'll price it immediately.",
    actionLabel: "Request a quote",
    hours: [{ day: "Dispatch office", time: "24 hours, 7 days" }, { day: "Customer support", time: "7:00am – 9:00pm" }, { day: "Warehouse pickup", time: "8:00am – 6:00pm" }],
  },
  "muse-beauty": {
    navLinks: ["Services", "Our team", "Gallery", "Book now"],
    offerLabel: "Services",
    offerKicker: "SALON & SPA SERVICES",
    offerTitle: "Treatments you'll rebook.",
    storyTitle: "Where you leave\nfeeling brand new.",
    storyBody: [
      "Muse is a calm, considered space built around one idea: you should never feel rushed. Our stylists and therapists are trained in-house and take genuine pride in their craft.",
      "Clean tools, honest advice and results that still look good a week later. That is the whole promise.",
    ],
    stats: [
      { value: "6,200", label: "Clients served" },
      { value: "4.9", label: "Google rating" },
      { value: "14", label: "Expert stylists" },
      { value: "92%", label: "Rebooking rate" },
    ],
    offerings: [
      { name: "Signature Hair Styling", desc: "Wash, treatment and a finish tailored to your hair type.", price: "₦18,000", image: px(11360227) },
      { name: "Bridal Glam Package", desc: "Full makeup, hair and trial session for your big day.", price: "₦150,000", image: px(10698022) },
      { name: "Luxury Manicure & Pedicure", desc: "Gel, acrylic or natural finish in our dedicated nail lounge.", price: "₦15,000", image: px(7960750) },
      { name: "Deep Tissue Massage", desc: "Sixty restorative minutes with our senior spa therapist.", price: "₦25,000", image: px(38355574) },
      { name: "Facial & Skin Therapy", desc: "A consultation-led facial designed for Nigerian skin.", price: "₦22,000", image: px(10698022) },
      { name: "Braids & Protective Styles", desc: "Knotless braids, cornrows and installs by specialist stylists.", price: "From ₦30,000", image: px(11360227) },
    ],
    gallery: [7960750, 10698022, 38355574, 11360227, 7960750],
    galleryTitle: "The Muse Look",
    testimonials: [
      { quote: "I have finally found a salon that listens. My braids lasted eight weeks and still looked fresh.", name: "Amaka I.", role: "Client since 2022", avatar: avatar(1) },
      { quote: "They did my bridal makeup and I cried when I saw myself. Absolutely worth every naira.", name: "Temi L.", role: "Bride, Lekki", avatar: avatar(2) },
      { quote: "Spotless space, warm staff and genuinely skilled therapists. My monthly reset.", name: "Kemi R.", role: "Spa regular", avatar: avatar(0) },
    ],
    ctaTitle: "Book your appointment.",
    ctaText: "Choose a service and preferred time. We'll confirm your slot within minutes.",
    actionLabel: "Book on WhatsApp",
    hours: [{ day: "Tuesday – Friday", time: "9:00am – 8:00pm" }, { day: "Saturday", time: "8:00am – 9:00pm" }, { day: "Sunday & Monday", time: "By appointment" }],
  },
  "the-palm-hotel": {
    navLinks: ["Rooms", "Dining", "Facilities", "Book a stay"],
    offerLabel: "Rooms",
    offerKicker: "ROOMS & SUITES",
    offerTitle: "Rest, properly considered.",
    storyTitle: "A quiet escape\nin a loud city.",
    storyBody: [
      "The Palm is a boutique hotel of 42 rooms, built for guests who value calm over crowds. Everything here, from the linen to the lighting, was chosen deliberately.",
      "Constant power, fast Wi-Fi, secure parking and a kitchen that takes breakfast as seriously as dinner.",
    ],
    stats: [
      { value: "42", label: "Rooms & suites" },
      { value: "4.8", label: "Guest rating" },
      { value: "24/7", label: "Power & security" },
      { value: "11k", label: "Nights booked" },
    ],
    offerings: [
      { name: "Deluxe King Room", desc: "King bed, work desk, rain shower and city-facing windows.", price: "₦85,000/night", image: px(8082217) },
      { name: "Executive Suite", desc: "Separate lounge, dining area and premium bathroom amenities.", price: "₦165,000/night", image: px(8134808) },
      { name: "Twin Business Room", desc: "Two full beds, ideal for colleagues travelling together.", price: "₦95,000/night", image: px(3688261) },
      { name: "The Palm Residence", desc: "Our two-bedroom apartment suite with a private kitchen.", price: "₦280,000/night", image: px(7031731) },
      { name: "Extended Stay, 7+ Nights", desc: "Weekly rates with daily housekeeping and laundry included.", price: "15% off", image: px(6466496) },
      { name: "Events & Conferencing", desc: "A 120-seat hall with full AV setup and catering options.", price: "From ₦450,000", image: px(8134808) },
    ],
    gallery: [8082217, 8134808, 7031731, 3688261, 6466496],
    galleryTitle: "Inside The Palm",
    testimonials: [
      { quote: "Genuinely the most comfortable bed I have slept in anywhere in Lagos. I stay nowhere else now.", name: "David M.", role: "Business traveller", avatar: avatar(0) },
      { quote: "Quiet, spotless and the breakfast was outstanding. Staff remembered my name on day two.", name: "Halima B.", role: "Weekend guest", avatar: avatar(1) },
      { quote: "We hosted a corporate retreat here. Everything ran exactly as promised.", name: "Peter C.", role: "Event organiser", avatar: avatar(2) },
    ],
    ctaTitle: "Reserve your stay.",
    ctaText: "Check availability for your dates and we'll confirm your reservation right away.",
    actionLabel: "Check availability",
    hours: [{ day: "Check-in", time: "From 2:00pm" }, { day: "Check-out", time: "Until 12:00pm" }, { day: "Reception", time: "Open 24 hours" }],
  },
  "summit-consulting": {
    navLinks: ["Services", "Sectors", "Insights", "Contact"],
    offerLabel: "Services",
    offerKicker: "HOW WE HELP",
    offerTitle: "Advice that pays for itself.",
    storyTitle: "Serious advisors\nfor serious decisions.",
    storyBody: [
      "Summit works with founders, boards and institutions across Nigeria on the decisions that carry real consequences — structure, compliance, capital and growth.",
      "We give clear recommendations in plain language, backed by evidence, and we stay involved until the work is actually implemented.",
    ],
    stats: [
      { value: "240+", label: "Clients advised" },
      { value: "₦40b", label: "Capital structured" },
      { value: "18", label: "Senior specialists" },
      { value: "96%", label: "Client retention" },
    ],
    offerings: [
      { name: "Business Advisory", desc: "Strategy, financial modelling and operational restructuring.", price: "From ₦450,000", image: px(38649010) },
      { name: "Corporate & Commercial Law", desc: "Contracts, governance, disputes and regulatory compliance.", price: "From ₦350,000", image: px(8549944) },
      { name: "Tax & Compliance", desc: "FIRS filings, audits and full statutory compliance management.", price: "From ₦250,000", image: px(8547282) },
      { name: "Company Registration", desc: "CAC incorporation, licences and post-registration setup.", price: "₦120,000", image: px(8547285) },
      { name: "Fundraising Support", desc: "Investor documentation, due diligence and deal negotiation.", price: "Retainer based", image: px(38649010) },
      { name: "HR & Payroll Systems", desc: "Employment structure, policy design and payroll compliance.", price: "From ₦200,000", image: px(7640793) },
    ],
    gallery: [38649010, 8547282, 8549944, 8547285, 7640793],
    galleryTitle: "Our Practice",
    testimonials: [
      { quote: "They restructured our operations and we became profitable within two quarters. The clarity was invaluable.", name: "Olumide F.", role: "CEO, manufacturing", avatar: avatar(0) },
      { quote: "Responsive, precise and commercially minded. They understand the realities of doing business here.", name: "Grace A.", role: "Finance director", avatar: avatar(1) },
      { quote: "Handled our funding round documentation flawlessly under serious time pressure.", name: "Yusuf T.", role: "Startup founder", avatar: avatar(2) },
    ],
    ctaTitle: "Book a consultation.",
    ctaText: "Your first 30-minute consultation is free. Tell us what you're facing and we'll tell you how we'd approach it.",
    actionLabel: "Book a free consultation",
    hours: [{ day: "Monday – Friday", time: "8:00am – 6:00pm" }, { day: "Saturday", time: "By appointment" }, { day: "Response time", time: "Within 24 hours" }],
  },
  "market-day-store": {
    navLinks: ["Shop all", "Deals", "Delivery", "Track order"],
    offerLabel: "Shop",
    offerKicker: "TRENDING THIS WEEK",
    offerTitle: "Everyday value, delivered.",
    storyTitle: "Shop easy.\nPay securely.",
    storyBody: [
      "Market Day is built for how Nigerians actually shop online: fast browsing, honest prices, payment on delivery where you need it, and support that replies.",
      "Thousands of products, verified sellers and a delivery network that reaches every state in the country.",
    ],
    stats: [
      { value: "52k", label: "Orders delivered" },
      { value: "3,400", label: "Products listed" },
      { value: "36", label: "States served" },
      { value: "4.7", label: "Buyer rating" },
    ],
    offerings: [
      { name: "Home Essentials Bundle", desc: "Everyday household items packed and priced to save you money.", price: "₦24,500", image: px(4464887) },
      { name: "Kitchen Starter Pack", desc: "Cookware, storage and utensils for a complete kitchen setup.", price: "₦46,000", image: px(7620866) },
      { name: "Beauty & Personal Care", desc: "Authentic skincare and grooming products from verified brands.", price: "From ₦6,500", image: px(7552562) },
      { name: "Small Business Supplies", desc: "Packaging, labels and shipping materials for online sellers.", price: "From ₦12,000", image: px(7857542) },
      { name: "Electronics & Gadgets", desc: "Phones, accessories and chargers with a 6-month warranty.", price: "From ₦18,000", image: px(7857532) },
      { name: "Bulk & Wholesale Orders", desc: "Discounted pricing for retailers buying in larger quantities.", price: "Up to 35% off", image: px(4464887) },
    ],
    gallery: [7552562, 7857542, 4464887, 7620866, 7857532],
    galleryTitle: "Fresh Arrivals",
    testimonials: [
      { quote: "Ordered Sunday night, received it Tuesday morning in Ibadan. Everything was exactly as described.", name: "Bola S.", role: "Verified buyer", avatar: avatar(1) },
      { quote: "Pay on delivery made me trust them the first time. Now I order almost every month.", name: "Uche N.", role: "Verified buyer", avatar: avatar(0) },
      { quote: "Their bulk pricing genuinely improved my shop's margins. Support is fast and helpful.", name: "Rukayat A.", role: "Retailer, Kano", avatar: avatar(2) },
    ],
    ctaTitle: "Start shopping today.",
    ctaText: "Free delivery on orders above ₦50,000. Pay on delivery available nationwide.",
    actionLabel: "Order on WhatsApp",
    hours: [{ day: "Online store", time: "Open 24 hours" }, { day: "Support team", time: "8:00am – 8:00pm" }, { day: "Delivery window", time: "1 – 4 working days" }],
  },
};

export const getDemoContent = (slug: string) => demoContent[slug];
