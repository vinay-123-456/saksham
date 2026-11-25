/**
 * Saksham Events - Data Layer
 * Handles event packages, services, gallery items, entry options, and testimonials
 */

const SakshamData = {
  brand: {
    name: "Saksham Events",
    handle: "@saksham_events___",
    tagline: "Crafting Royal Celebrations & Pyrotechnic Spectacles",
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    email: "contact@sakshamevents.com",
    location: "Jaipur | Mumbai | Delhi | Pan-India & Destination",
    instagramUrl: "https://www.instagram.com/saksham_events___/?hl=en"
  },

  stats: [
    { number: 500, label: "Grand Events Executed", suffix: "+" },
    { number: 1200, label: "Cold Pyro & SFX Shows", suffix: "+" },
    { number: 50, label: "Destination Cities", suffix: "+" },
    { number: 100, label: "Client Satisfaction", suffix: "%" }
  ],

  services: [
    {
      id: "pyro-sfx",
      title: "Cold Pyro & Special Effects",
      badge: "Signature Specialty",
      icon: "fa-fire-flame-curved",
      image: "assets/images/pyro.png",
      summary: "High-grade smokeless cold sparkle fountains, CO2 blasters, heavy fog low-smoke entry, and customized sky pyrotechnics.",
      features: [
        "Smokeless & Indoor Safe Cold Pyro Fountains",
        "Heavy Fog Low-Smoke Cloud (Dry Ice FX)",
        "High-Velocity CO2 Jet Streamers",
        "Confetti & Rose Petal Air Cannons",
        "Sky Fireworks & Sync Pyrotechnic Display"
      ],
      startingPrice: 25000
    },
    {
      id: "royal-wedding",
      title: "Royal Wedding Planning & Decor",
      badge: "Luxury Favorite",
      icon: "fa-ring",
      image: "assets/images/wedding.png",
      summary: "End-to-end wedding conceptualization, royal floral mandap design, theme baraat, Sangeet staging, and guest hospitality.",
      features: [
        "Custom Theme Mandap & Stage Crafting",
        "Royal Baraat Procession Management",
        "Haldi, Mehendi & Sangeet Setup",
        "Destination Wedding Venue Logistics",
        "VVIP Guest Relations & Hospitality"
      ],
      startingPrice: 150000
    },
    {
      id: "stage-lighting",
      title: "Stage, Lighting & Truss Production",
      badge: "High Tech",
      icon: "fa-bolt-lightning",
      image: "assets/images/stage.png",
      summary: "Architectural event lighting, heavy-duty aluminium box trussing, P3/P4 LED video walls, beam lights, and concert sound system.",
      features: [
        "3D Stage Structural Trussing",
        "Moving Head Sharpy Beams & Lasers",
        "Ultra HD Outdoor LED Video Walls",
        "Line-Array Concert Audio Production",
        "Live DMX Light Controller Operators"
      ],
      startingPrice: 45000
    },
    {
      id: "grand-entries",
      title: "Royal Bride & Groom Entries",
      badge: "Trending",
      icon: "fa-crown",
      image: "assets/images/hero.png",
      summary: "Unforgettable concept entrances using pyro tunnels, revolving stages, hydraulic platforms, aerial entry, and mirror gates.",
      features: [
        "Sparkler Spark Tunnel Walkway",
        "Hydraulic & Revolving Stage Entries",
        "Vintage Royal Chariot & Doli Concepts",
        "Cold Pyro Waterfall Backdrop",
        "Customized Entry Music & Sound FX Sync"
      ],
      startingPrice: 35000
    },
    {
      id: "corporate-galas",
      title: "Corporate Events & Award Galas",
      badge: "Professional",
      icon: "fa-briefcase",
      image: "assets/images/stage.png",
      summary: "Seamless corporate annual meets, product launches, gala dinners, press conferences, and brand activation stages.",
      features: [
        "Product Unveiling Special Effects",
        "Branded LED Backdrops & Stage",
        "Anchor, Host & Artist Lineups",
        "High-Speed Registration Counters",
        "Professional Photography & Aftermovie"
      ],
      startingPrice: 60000
    },
    {
      id: "celebrity-artist",
      title: "Artist & Celebrity Booking",
      badge: "Exclusive",
      icon: "fa-microphone-lines",
      image: "assets/images/hero.png",
      summary: "Managing top Bollywood singers, DJs, anchors, dance troupes, live bands, and celebrity appearances for private events.",
      features: [
        "Top Bollywood & EDM DJ Booking",
        "Live Symphony Bands & Shehnai Masters",
        "International Dance Troupes & Fire Performers",
        "Celebrity Guest Appearance Logistics",
        "Rider Technical Requirements Management"
      ],
      startingPrice: 80000
    }
  ],

  entryBuilder: {
    styles: [
      { id: "pyro-tunnel", name: "Cold Pyro Sparkle Tunnel", cost: 20000, desc: "Walk down an aisle surrounded by 12+ sparkling cold pyro fountains." },
      { id: "fog-cloud", name: "Low-Smoke Cloud Walk", cost: 15000, desc: "Float on clouds with heavy dry-ice low-lying fog and warm spot lights." },
      { id: "hydraulic", name: "Hydraulic Revolving Stage", cost: 35000, desc: "Elevate and rotate smoothly on a glowing gold stage platform." },
      { id: "royal-chariot", name: "Vintage Royal Chariot", cost: 25000, desc: "Grand entrance on a handcrafted golden chariot with fireworks." }
    ],

    fxAddons: [
      { id: "co2-jets", name: "High-Velocity CO2 Jets (Pair)", cost: 8000, desc: "Instant icy blast for dramatic climax moments." },
      { id: "confetti-blast", name: "Metallic Gold Confetti Blast", cost: 6000, desc: "Air cannons bursting shiny gold/rose-gold foil glitter." },
      { id: "sky-shots", name: "Synchronization Aerial Sky Shots", cost: 18000, desc: "Synchronized fireworks illuminating the night sky." },
      { id: "bubble-cannon", name: "Smoke-Filled Bubble Machine", cost: 5000, desc: "Magical bubbles that release white smoke upon popping." }
    ],

    themes: [
      { id: "royal-gold", name: "Royal Obsidian & Gold", style: "Deep black glass aesthetic with amber pyro warmth" },
      { id: "rose-romance", name: "Rose Gold & Floral Romance", style: "Soft blush pinks, gold accents, and white flower decor" },
      { id: "neon-electric", name: "Electric Sangeet Night", style: "Vibrant neon purple, lasers, beam lights, and DJ concert vibes" }
    ]
  },

  gallery: [
    {
      id: 1,
      category: "pyro",
      title: "Cold Pyro Grand Entry",
      subtitle: "Royal Wedding Reception",
      image: "assets/images/pyro.png",
      tag: "Pyrotechnics"
    },
    {
      id: 2,
      category: "wedding",
      title: "Golden Mandap Decor",
      subtitle: "Destination Wedding, Jaipur",
      image: "assets/images/wedding.png",
      tag: "Royal Decor"
    },
    {
      id: 3,
      category: "stage",
      title: "Concert Truss & Beam Lights",
      subtitle: "Sangeet Musical Night",
      image: "assets/images/stage.png",
      tag: "Lighting & Sound"
    },
    {
      id: 4,
      category: "pyro",
      title: "Heroic Stage Spark Fountains",
      subtitle: "Couple Vow Exchange",
      image: "assets/images/hero.png",
      tag: "Special Effects"
    },
    {
      id: 5,
      category: "wedding",
      title: "Opulent Mandap & Flower Aisle",
      subtitle: "Udaipur Palace Wedding",
      image: "assets/images/wedding.png",
      tag: "Mandap Setup"
    },
    {
      id: 6,
      category: "stage",
      title: "Laser & LED Video Matrix",
      subtitle: "Corporate Award Gala",
      image: "assets/images/stage.png",
      tag: "Corporate Production"
    }
  ],

  testimonials: [
    {
      quote: "Saksham Events transformed our wedding entry into a fairytale! The cold pyro sparklers and heavy fog cloud created a dreamlike moment that went viral on Instagram!",
      name: "Rohit & Ananya Singhania",
      role: "Wedding Couple (Jaipur)",
      rating: 5,
      event: "Destination Wedding at Leela Palace"
    },
    {
      quote: "The lighting, stage LED walls, and sound quality for our corporate annual gala were flawless. Saksham Events handled everything with extreme professionalism.",
      name: "Vikram Malhotra",
      role: "VP Operations, TechCorp",
      rating: 5,
      event: "Corporate Gala & Product Launch"
    },
    {
      quote: "If you want breathtaking special effects and royal decor, look no further than Saksham Events! Their cold pyro pyro fountains were 100% smokeless and completely safe.",
      name: "Pooja & Sameer Mehra",
      role: "Sangeet Night Host",
      rating: 5,
      event: "Grand Sangeet Night"
    }
  ],

  instagramReels: [
    {
      id: "reel-1",
      title: "Cold Pyro Spark Tunnel Entry 🎆",
      views: "1.2M Views",
      likes: "94.5k",
      image: "assets/images/pyro.png",
      tag: "VIRAL REEL"
    },
    {
      id: "reel-2",
      title: "Royal Mandap Reveal ✨",
      views: "850K Views",
      likes: "68.2k",
      image: "assets/images/wedding.png",
      tag: "DECOR HIGHLIGHT"
    },
    {
      id: "reel-3",
      title: "Insane Concert Lighting Setup ⚡",
      views: "640K Views",
      likes: "45.1k",
      image: "assets/images/stage.png",
      tag: "STAGE FX"
    }
  ]
};

if (typeof window !== "undefined") {
  window.SakshamData = SakshamData;
}
