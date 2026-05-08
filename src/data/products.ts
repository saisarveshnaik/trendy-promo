import type { Product } from '../types'
import cupWithLogo from '../assets/cup-with-logo.jpg'

const commonsFile = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`

export const productCatalog: Product[] = [
  {
    id: 'signature-soft-touch-pen',
    name: 'Signature Soft Touch Pen',
    category: 'Pens',
    subcategory: 'Executive Pens',
    priceFrom: 0.79,
    description: 'Metal barrel pen with ultra-smooth grip and premium laser engraving finish.',
    images: [
      commonsFile('Ballpoint Pen.jpg'),
      commonsFile('Ballpoint pen close-up.jpg'),
      commonsFile('Tip of a Ballpoint pen.jpg'),
    ],
    featured: true,
    deal: true,
    badges: ['Best Seller'],
    imprint: {
      setupCharge: '$35 per color/location',
      runCharge: '$0.08 per unit',
      printingMethods: ['Laser Engraving', 'Screen Print']
    },
    specifications: {
      Material: 'Aluminum + Rubberized Coating',
      Size: '5.6 in',
      'Minimum Quantity': '100 units',
      Production: '5 business days'
    },
    pricingTiers: [
      { qty: 100, price: 0.79 },
      { qty: 250, price: 0.72 },
      { qty: 500, price: 0.66 },
      { qty: 1000, price: 0.59 }
    ]
  },
  {
    id: 'metro-insulated-tumbler',
    name: 'Metro Insulated Tumbler 20oz',
    category: 'Drinkware',
    subcategory: 'Tumblers',
    priceFrom: 8.49,
    description: 'Double-wall stainless tumbler with spill-proof slide lid and retail style packaging.',
    images: [
      cupWithLogo,
      commonsFile('Ceramic mug.jpg'),
      commonsFile('Coffee mug.jpg'),
    ],
    featured: true,
    rush: true,
    badges: ['24H Ready'],
    imprint: {
      setupCharge: '$55 per location',
      runCharge: '$0.35 per unit',
      printingMethods: ['UV Print', 'Laser Etch']
    },
    specifications: {
      Material: '18/8 Stainless Steel',
      Capacity: '20 oz',
      'Minimum Quantity': '48 units',
      Production: '24 hour rush available'
    },
    pricingTiers: [
      { qty: 48, price: 8.49 },
      { qty: 96, price: 7.95 },
      { qty: 250, price: 7.25 },
      { qty: 500, price: 6.9 }
    ]
  },
  {
    id: 'stride-athletic-polo',
    name: 'Stride Athletic Polo',
    category: 'Apparel',
    subcategory: 'Polos',
    priceFrom: 19.8,
    description: 'Moisture-wicking performance polo with tailored fit and anti-odor treatment.',
    images: [
      commonsFile('Classical polo shirt.jpg'),
      commonsFile('Polo shirt (AM 2017.66.47-2).jpg'),
      commonsFile('Polo shirt (AM 2017.66.46-2).jpg'),
    ],
    featured: true,
    imprint: {
      setupCharge: '$75 per logo',
      runCharge: '$1.15 per garment',
      printingMethods: ['Embroidery', 'DTF Transfer']
    },
    specifications: {
      Material: '4.8 oz Polyester Blend',
      Sizes: 'XS - 4XL',
      'Minimum Quantity': '36 units',
      Production: '7 business days'
    },
    pricingTiers: [
      { qty: 36, price: 19.8 },
      { qty: 72, price: 18.9 },
      { qty: 144, price: 18.1 },
      { qty: 300, price: 17.55 }
    ]
  },
  {
    id: 'volt-wireless-power-bank',
    name: 'Volt Wireless Power Bank',
    category: 'Tech Accessories',
    subcategory: 'Power Banks',
    priceFrom: 16.4,
    description: '10,000mAh portable charger with magnetic wireless output and dual USB-C ports.',
    images: [
      commonsFile('Power Bank.jpg'),
      commonsFile('USB power bank.jpg'),
      commonsFile('Portable power bank.jpg'),
    ],
    featured: true,
    rush: true,
    imprint: {
      setupCharge: '$60 per side',
      runCharge: '$0.4 per unit',
      printingMethods: ['Digital UV', 'Pad Print']
    },
    specifications: {
      Capacity: '10,000mAh',
      Output: '20W USB-C PD + 15W Wireless',
      'Minimum Quantity': '50 units',
      Production: '3 business days'
    },
    pricingTiers: [
      { qty: 50, price: 16.4 },
      { qty: 100, price: 15.25 },
      { qty: 250, price: 14.55 },
      { qty: 500, price: 13.95 }
    ]
  },
  {
    id: 'summit-recycled-tote',
    name: 'Summit Recycled Tote Bag',
    category: 'Bags',
    subcategory: 'Tote Bags',
    priceFrom: 4.2,
    description: 'Certified recycled tote with reinforced handles and large imprint area for events.',
    images: [
      commonsFile('Co-op tote bag (27380725806).jpg'),
      commonsFile('Pretty tote bag (6178619343).jpg'),
      commonsFile('Wikipedia tote bag.JPG'),
    ],
    deal: true,
    imprint: {
      setupCharge: '$40 per color',
      runCharge: '$0.18 per unit',
      printingMethods: ['Screen Print', 'Heat Transfer']
    },
    specifications: {
      Material: '80 GSM Recycled RPET',
      Size: '15 x 16 in',
      'Minimum Quantity': '100 units',
      Production: '5 business days'
    },
    pricingTiers: [
      { qty: 100, price: 4.2 },
      { qty: 250, price: 3.95 },
      { qty: 500, price: 3.79 },
      { qty: 1000, price: 3.62 }
    ]
  },
  {
    id: 'atlas-hardcover-notebook',
    name: 'Atlas Hardcover Notebook',
    category: 'Office Supplies',
    subcategory: 'Notebooks',
    priceFrom: 6.15,
    description: 'Faux leather notebook with elastic closure, pen loop, and 192 ruled pages.',
    images: [
      commonsFile('Notebook.jpg'),
      commonsFile('Notebook with Post-its.jpg'),
      commonsFile('A notebook.jpg'),
    ],
    rush: true,
    imprint: {
      setupCharge: '$50 per location',
      runCharge: '$0.2 per unit',
      printingMethods: ['Deboss', 'Foil Stamp']
    },
    specifications: {
      Material: 'PU Cover + 80 GSM Paper',
      Size: 'A5',
      'Minimum Quantity': '75 units',
      Production: '2 to 4 business days'
    },
    pricingTiers: [
      { qty: 75, price: 6.15 },
      { qty: 150, price: 5.72 },
      { qty: 300, price: 5.43 },
      { qty: 600, price: 5.2 }
    ]
  },
  {
    id: 'pinnacle-crystal-award',
    name: 'Pinnacle Crystal Award',
    category: 'Awards',
    subcategory: 'Recognition Awards',
    priceFrom: 32,
    description: 'Optical crystal tower award with deep etch personalization for premium recognition.',
    images: [
      commonsFile('Trophy Hero.jpg'),
      commonsFile('Waterford Crystal glass Volvo Ocean Challenge Trophy.JPG'),
      commonsFile('Trophy Office.jpg'),
    ],
    featured: true,
    imprint: {
      setupCharge: '$0',
      runCharge: 'Included',
      printingMethods: ['Deep Etch']
    },
    specifications: {
      Material: 'Optical Crystal',
      Size: '9 in height',
      'Minimum Quantity': '12 units',
      Production: '6 business days'
    },
    pricingTiers: [
      { qty: 12, price: 32 },
      { qty: 25, price: 30.4 },
      { qty: 50, price: 29.1 },
      { qty: 100, price: 27.8 }
    ]
  },
  {
    id: 'trailblazer-cooler-backpack',
    name: 'Trailblazer Cooler Backpack',
    category: 'Outdoor Products',
    subcategory: 'Coolers',
    priceFrom: 27.9,
    description: 'Leak-resistant cooler backpack with 20-can capacity and padded ergonomic straps.',
    images: [
      commonsFile('YETI Hopper Two 20 Soft-Sided Cooler Bag (43141426871).jpg'),
      commonsFile('Hot Cold Bag Small.jpg'),
      commonsFile('Lunch bag Wikimania 2014 7523.jpg'),
    ],
    deal: true,
    imprint: {
      setupCharge: '$65 per logo',
      runCharge: '$0.55 per unit',
      printingMethods: ['Embroidery', 'Screen Print']
    },
    specifications: {
      Material: '600D Polyester',
      Capacity: '20 cans + ice packs',
      'Minimum Quantity': '24 units',
      Production: '7 business days'
    },
    pricingTiers: [
      { qty: 24, price: 27.9 },
      { qty: 50, price: 26.8 },
      { qty: 100, price: 25.85 },
      { qty: 250, price: 24.95 }
    ]
  },
  {
    id: 'greenloop-bamboo-cutlery-set',
    name: 'GreenLoop Bamboo Cutlery Set',
    category: 'Eco Friendly Products',
    subcategory: 'Sustainable Kits',
    priceFrom: 3.45,
    description: 'Reusable bamboo cutlery travel kit in cotton pouch with custom front branding.',
    images: [
      commonsFile('Bamboo Cutlery Pouch By STRW Co..jpg'),
      commonsFile('Fork, knife and spoon made of bamboo on a plate.jpg'),
      commonsFile('Cutlery, set (AM 7692-51).jpg'),
    ],
    featured: true,
    rush: true,
    imprint: {
      setupCharge: '$35 per print',
      runCharge: '$0.14 per unit',
      printingMethods: ['Screen Print', 'Laser Marking']
    },
    specifications: {
      Material: 'Bamboo + Cotton Pouch',
      Includes: 'Fork, Spoon, Knife, Straw',
      'Minimum Quantity': '100 units',
      Production: '24 to 48 hours'
    },
    pricingTiers: [
      { qty: 100, price: 3.45 },
      { qty: 250, price: 3.21 },
      { qty: 500, price: 3.05 },
      { qty: 1000, price: 2.9 }
    ]
  },
  {
    id: 'expo-premium-lanyard-kit',
    name: 'Expo Premium Lanyard Kit',
    category: 'Trade Show Giveaways',
    subcategory: 'Event Essentials',
    priceFrom: 2.15,
    description: 'Polyester lanyard kit with detachable buckle, safety breakaway, and badge clip.',
    images: [
      commonsFile('Lanyard.JPG'),
      commonsFile('Yellow lanyard.jpg'),
      commonsFile('Red lanyard.jpg'),
    ],
    deal: true,
    rush: true,
    imprint: {
      setupCharge: '$25',
      runCharge: '$0.1 per unit',
      printingMethods: ['Dye Sublimation', 'Screen Print']
    },
    specifications: {
      Material: 'Polyester',
      Width: '0.75 in',
      'Minimum Quantity': '250 units',
      Production: '24 hour rush available'
    },
    pricingTiers: [
      { qty: 250, price: 2.15 },
      { qty: 500, price: 1.95 },
      { qty: 1000, price: 1.76 },
      { qty: 2500, price: 1.64 }
    ]
  },
  {
    id: 'aurora-ceramic-mug',
    name: 'Aurora Ceramic Mug 15oz',
    category: 'Drinkware',
    subcategory: 'Mugs',
    priceFrom: 5.35,
    description: 'Stoneware mug with matte exterior and glossy interior designed for retail gifting.',
    images: [
      commonsFile('Ceramic mug.jpg'),
      commonsFile('Coffee mug.jpg'),
      commonsFile('Coffee in a mug.jpg'),
    ],
    featured: true,
    imprint: {
      setupCharge: '$45',
      runCharge: '$0.22 per unit',
      printingMethods: ['Screen Print', 'Full Wrap']
    },
    specifications: {
      Material: 'Ceramic',
      Capacity: '15 oz',
      'Minimum Quantity': '72 units',
      Production: '6 business days'
    },
    pricingTiers: [
      { qty: 72, price: 5.35 },
      { qty: 144, price: 4.95 },
      { qty: 288, price: 4.62 },
      { qty: 576, price: 4.38 }
    ]
  },
  {
    id: 'vector-zip-hoodie',
    name: 'Vector Zip Hoodie',
    category: 'Apparel',
    subcategory: 'Outerwear',
    priceFrom: 29.5,
    description: 'Heavyweight fleece zip hoodie with tonal drawcord and durable rib cuffs.',
    images: [
      commonsFile('Hoodie (3319531403).jpg'),
      commonsFile('Hoodie with print.jpg'),
      commonsFile('Castlefield Hoodie (49734913863).jpg'),
    ],
    rush: true,
    imprint: {
      setupCharge: '$85',
      runCharge: '$1.4 per garment',
      printingMethods: ['Embroidery', 'DTG Print']
    },
    specifications: {
      Material: 'Cotton/Poly Fleece',
      Sizes: 'S - 5XL',
      'Minimum Quantity': '24 units',
      Production: '3 business days'
    },
    pricingTiers: [
      { qty: 24, price: 29.5 },
      { qty: 48, price: 28.4 },
      { qty: 96, price: 27.2 },
      { qty: 240, price: 26.45 }
    ]
  },
  {
    id: 'nexus-10w-desk-pad-charger',
    name: 'Nexus Desk Pad Charger',
    category: 'Tech Accessories',
    subcategory: 'Wireless Chargers',
    priceFrom: 21.3,
    description: 'PU desk mat with integrated 10W wireless charging zone and anti-slip base.',
    images: [
      commonsFile('Wireless Charger white front.jpg'),
      commonsFile('Wireless Charger white rear.jpg'),
      commonsFile('LG WCP-300 Qi wireless charger.jpg'),
    ],
    deal: true,
    imprint: {
      setupCharge: '$55',
      runCharge: '$0.28 per unit',
      printingMethods: ['Deboss', 'UV Print']
    },
    specifications: {
      Material: 'PU Leather + ABS',
      Size: '31.5 x 15.7 in',
      'Minimum Quantity': '40 units',
      Production: '8 business days'
    },
    pricingTiers: [
      { qty: 40, price: 21.3 },
      { qty: 80, price: 20.1 },
      { qty: 150, price: 19.35 },
      { qty: 300, price: 18.7 }
    ]
  },
  {
    id: 'boardroom-gift-box-set',
    name: 'Boardroom Gift Box Set',
    category: 'Office Supplies',
    subcategory: 'Executive Gifts',
    priceFrom: 44.9,
    description: 'Curated executive set featuring notebook, tumbler, and pen in magnetic gift box.',
    images: [
      commonsFile('Gift box I.jpg'),
      commonsFile('Gift box (8065614326).jpg'),
      commonsFile('Gift set (AM 2015.51.70-8).jpg'),
    ],
    featured: true,
    badges: ['Premium Kit'],
    imprint: {
      setupCharge: '$95',
      runCharge: '$1.75 per kit',
      printingMethods: ['Embroidery', 'Laser Engraving', 'Deboss']
    },
    specifications: {
      Includes: 'Notebook, 20oz Tumbler, Metal Pen',
      Packaging: 'Rigid Magnet Box',
      'Minimum Quantity': '20 kits',
      Production: '10 business days'
    },
    pricingTiers: [
      { qty: 20, price: 44.9 },
      { qty: 50, price: 42.8 },
      { qty: 100, price: 40.95 },
      { qty: 250, price: 39.6 }
    ]
  }
]

export const categories = Array.from(new Set(productCatalog.map((product) => product.category)))

export const productById = (id: string) => productCatalog.find((product) => product.id === id)
