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
      id: "fireworks-displays",
      title: "Fireworks Displays",
      badge: "Grand Show",
      icon: "fa-rocket",
      image: "assets/images/service_fireworks_hd.jpg",
      summary: "Breathtaking sky fireworks displays, customized shell bursts, and musical synchronized fireworks shows for grand celebrations and VIP events.",
      features: [
        "Synchronized Sky Fireworks & Aerial Shells",
        "Musical Fireworks Choreography (Pyromusical)",
        "Certified Licensed Pyrotechnic Crew",
        "Safe Distance Protocols & Permission Support",
        "Custom Color Matching (Gold, Silver, Multi-color)"
      ],
      startingPrice: 35000
    },
    {
      id: "sparkulars-pyro",
      title: "Sparkulars & Pyro Effects",
      badge: "Indoor & Safe",
      icon: "fa-wand-magic-sparkles",
      image: "assets/images/service_sparkulars_hd.jpg",
      summary: "Smokeless cold pyro sparkular fountains, waterfall spark curtains, and synchronized aisle sparks for royal bridal & groom entries.",
      features: [
        "100% Smokeless & Indoor Safe Cold Spark Guns",
        "Height Adjustable Spark Fountains (1m - 5m)",
        "DMX Synchronized Remote Triggering",
        "Sparkular Waterfall Backdrop Systems",
        "Non-Hazardous & Cool-to-the-Touch Sparks"
      ],
      startingPrice: 20000
    },
    {
      id: "flame-jet",
      title: "Flame Jet Effects",
      badge: "Concert Grade",
      icon: "fa-fire",
      image: "assets/images/service_flames_hd.jpg",
      summary: "Multi-angle stage flame projectors, colored fire jets, and high-impact pyro bursts programmed for energetic stage performances and DJ drops.",
      features: [
        "Multi-Angle Moving Flame Projectors",
        "Synchronized Fire Bursts for Music Drops",
        "Real Flame Height up to 4-5 Meters",
        "Advanced DMX Safety Tilt Cut-Off Sensors",
        "Outdoor & Large Venue Stage Certification"
      ],
      startingPrice: 25000
    },
    {
      id: "dry-ice-fog",
      title: "Dry Ice / Low Fog",
      badge: "Fairytale Walk",
      icon: "fa-smog",
      image: "assets/images/service_fog_hd.jpg",
      summary: "Dense, floor-hugging dry-ice low fog creating a fairytale cloud walk effect for Varmala, first dance, and couple entries.",
      features: [
        "Genuine Heavy Dry-Ice Low Smoke (Never Rises)",
        "Pure White Cloud Walk Across Stage & Aisle",
        "Completely Odorless & Residue-Free",
        "Warm Uplighting Accent Color Matching",
        "Ideal for Varmala, Ring Exchange & First Dance"
      ],
      startingPrice: 15000
    },
    {
      id: "confetti-paper",
      title: "Confetti & Paper Effects",
      badge: "Celebration Blast",
      icon: "fa-burst",
      image: "assets/images/service_confetti_hd.jpg",
      summary: "High-powered confetti blowers, stadium streamer air-cannons, and metallic gold foil petal showers for grand celebration climaxes.",
      features: [
        "Continuous High-Powered Air Confetti Blowers",
        "Metallic Gold & Rose-Gold Foil Showers",
        "Biodegradable Paper & Fresh Rose Petal Launchers",
        "Stadium Streamer Ribbon Cannon Blasts",
        "Instant Remote Wireless Triggering"
      ],
      startingPrice: 12000
    },
    {
      id: "complete-effects",
      title: "Complete Event Effects",
      badge: "All-in-One",
      icon: "fa-bolt-lightning",
      image: "assets/images/service_complete_hd.jpg",
      summary: "Turnkey production combining laser light shows, moving head beams, CO2 jets, sparkulars, and audio-visual synchronization.",
      features: [
        "Integrated Stage Pyrotechnics & Laser Systems",
        "Line-Array Audio & Moving Head Lighting Rig",
        "Heavy Duty Aluminium Trussing & LED P3 Screens",
        "Dedicated Master Technical Director on Site",
        "End-to-End Rehearsal & Live Show Management"
      ],
      startingPrice: 50000
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
