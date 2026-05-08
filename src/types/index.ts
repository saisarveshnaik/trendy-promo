export type PricingTier = {
  qty: number
  price: number
}

export type Product = {
  id: string
  name: string
  category: string
  subcategory: string
  priceFrom: number
  description: string
  images: string[]
  featured?: boolean
  deal?: boolean
  rush?: boolean
  badges?: string[]
  imprint: {
    setupCharge: string
    runCharge: string
    printingMethods: string[]
  }
  specifications: Record<string, string>
  pricingTiers: PricingTier[]
}

export type MegaMenuGroup = {
  title: string
  links: string[]
}

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export type FaqItem = {
  question: string
  answer: string
}
