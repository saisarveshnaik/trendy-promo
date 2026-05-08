import type { FaqItem, MegaMenuGroup, Testimonial } from '../types'

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Categories', path: '/categories' },
  { label: 'Today\'s Deals', path: '/todays-deals' },
  { label: '24 Hour Rush', path: '/24-hour-rush' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const megaMenuGroups: MegaMenuGroup[] = [
  { title: 'Apparel', links: ['T-Shirts', 'Polos', 'Outerwear', 'Caps'] },
  { title: 'Drinkware', links: ['Tumblers', 'Mugs', 'Water Bottles', 'Barware'] },
  { title: 'Office Supplies', links: ['Pens', 'Notebooks', 'Desk Kits', 'Calendars'] },
  { title: 'Trade Show Giveaways', links: ['Trade Show Kits', 'Lanyards', 'Badges', 'Totes'] },
  { title: 'Tech Accessories', links: ['Power Banks', 'Chargers', 'USB Drives', 'Headphones'] },
  { title: 'Eco Friendly Products', links: ['Recycled Bags', 'Bamboo Sets', 'Wheat Straw', 'Seed Paper'] },
]

export const categoryTiles = [
  'Apparel',
  'Drinkware',
  'Bags',
  'Pens',
  'Tech Accessories',
  'Office Supplies',
  'Awards',
  'Outdoor Products',
  'Eco Friendly Products',
  'Trade Show Giveaways',
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Trendy Promo transformed our conference giveaway strategy. We had 8,000 units delivered with flawless branding in just 9 days.',
    author: 'Maya Wilson',
    role: 'Procurement Lead, Nova Health'
  },
  {
    quote:
      'Their rush production and responsive quote team made campaign launches painless. Quality control is genuinely premium.',
    author: 'Chris Patel',
    role: 'Marketing Director, AeroGrid'
  },
  {
    quote:
      'The mockup previews helped our stakeholders approve products faster. We now source all promo kits through Trendy Promo.',
    author: 'Rachel Kim',
    role: 'Brand Manager, BrightLoop'
  }
]

export const faqItems: FaqItem[] = [
  {
    question: 'What is your minimum order quantity?',
    answer: 'Most products start at 50 to 100 units, but some rush-ready options can be ordered from 25 units.'
  },
  {
    question: 'How fast can I receive a bulk order?',
    answer: 'Rush products can ship in 24 hours after artwork approval. Standard production typically takes 7 to 10 business days.'
  },
  {
    question: 'Can I upload my logo and preview before ordering?',
    answer: 'Yes. You can upload your logo in product detail pages and quote forms to preview placement before requesting a quote.'
  },
  {
    question: 'Do you offer Pantone color matching?',
    answer: 'Yes. We support PMS matching on eligible products and include exact print method notes in the quote response.'
  }
]
