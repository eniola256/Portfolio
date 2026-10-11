export const projects = [
  {
    slug: "ae-cups",
    name: "AE Cups",
    type: "Coffee Shop Web App",
    img: "/coffee.png",
    alt: "AE Cups coffee shop web app",
    summary:
      "A coffee shop web app for small cafés. Customers browse the menu, add drinks to a cart and check out from any phone or laptop, choosing how they want to receive their order. It gives a café a professional online presence and removes the friction of walk-in ordering.",
    shortSummary:
      "A coffee shop app where customers browse the menu, build a cart and check out from any device.", 
    purpose:
      "A React coffee shop app built to help businesses let customers browse their menu and place orders seamlessly from any device — reducing walk-in friction and establishing a professional digital presence.",
    features: [
      "Responsive design system with a custom dark/light palette across all devices",
      "Live coffee swirl animation built from scratch using the Canvas API",
      "Menu, About, Testimonials and Contact sections with scroll-triggered animations",
      "Cart system using React Context — add, remove, update quantity, live badge on navbar",
      "Checkout page with order form, fulfilment toggle, live price breakdown and order confirmation",
    ],
    cardStack: ["React", "React Router", "Context API", "Canvas API"],
    stack: ["React", "React Router", "Context API", "Canvas API", "CSS", "FontAwesome"],
    live: "https://ae-cups-sand.vercel.app/",
    github: null, // add your repo link
    learned: [], // optional: add your own lessons as short sentences
  },
  {
    slug: "lookit",
    name: "Lookit",
    type: "Streetwear Storefront",
    img: "/fashion.png",
    alt: "Lookit streetwear storefront",
    summary:
      "A storefront for a minimal streetwear brand. Customers browse the collection on any device, and the label gets its own identity instead of a generic template shop: an owl-eye wordmark whose two O's blink, and three switchable themes.",
    shortSummary:
      "A streetwear storefront with a blinking owl-eye wordmark and three switchable themes.",
    purpose:
      "A design-driven React storefront for a minimal streetwear brand. It lets customers browse a collection on any device, and gives a small fashion label a distinctive visual identity instead of a generic template shop.",
    features: [
      "Custom brand identity: owl-eye wordmark where the two O's blink on a timed loop, plus a matching logo mark",
      "Three switchable themes (black/white, black/blue, white/black) built on CSS variables, controlled from the navbar",
      "Staggered editorial product grid with featured pieces, laid out differently at desktop, tablet and mobile breakpoints",
      "Hover image swap on every product card",
      "Scroll-triggered, staggered slide-in animations using IntersectionObserver",
      "Hero and footer entrance animations, with prefers-reduced-motion support",
      "Deployed on Vercel",
    ],
    cardStack: ["React", "Vite", "CSS Grid", "IntersectionObserver"],
    stack: ["React", "Vite", "CSS Grid", "Keyframes", "Custom properties", "IntersectionObserver", "Vercel"],
    live: "https://lookit-orpin.vercel.app/",
    github: null,
    learned: [],
  },
  {
    slug: "yaba-deli",
    name: "Yaba-deli",
    type: "Campus Food Delivery Web App",
    status: "In development",
    img: "/yaba-deli.png",
    alt: "Yaba-deli campus food delivery app",
    summary:
      "A food delivery web app for YABATECH students. Students browse nearby campus restaurants, order and pay online, and a runner buys the food and walks it to their hostel. It replaces queuing at the shop or leaving your room.",
    shortSummary:
  "A campus food delivery app for YABATECH students: order, pay online and get food walked to your hostel.",
    purpose:
      "A full-stack food delivery app built for YABATECH students to browse campus restaurants, order and pay online, and get their food delivered to their hostel, with no queuing and no leaving their room.",
    features: [
      "Multi-shop ordering with per-shop menus, image cards, +/− quantity controls, and a one-shop-per-cart rule enforced on both frontend and backend",
      "Monnify payment flow with server-side verification, a webhook that re-checks every payment, and failed-payment handling",
      "Customer accounts with phone/password sign-up confirmed via Telegram, password reset, rate-limited auth routes, and 30-day sliding sessions",
      "Live order tracking, order history, and a responsive UI with a glass-style mobile bottom tab bar",
      "Admin dashboard with an order status workflow and a contact → mark unavailable → refund-owed flow, plus Telegram order notifications to customers",
    ],
    progress:
      "Admin screens for managing shops and menus, real shop ratings, automated refunds, and production testing of the payment webhook.",
    cardStack: ["React", "Node.js", "Express", "PostgreSQL"],
    stack: ["React", "Vite", "React Router", "Context API", "Node.js", "Express", "PostgreSQL", "Monnify", "Telegram Bot API", "Vercel", "Render"],
    live: "https://yaba-deli.vercel.app/",
    github: null,
    learned: [],
  },
];