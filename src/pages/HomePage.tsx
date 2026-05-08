import HeroSection from '../components/sections/HeroSection'
import LogoMarqueeSection from '../components/sections/LogoMarqueeSection'
import CategoryTilesSection from '../components/sections/CategoryTilesSection'
import TabbedProductShowcaseSection from '../components/sections/TabbedProductShowcaseSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import BrandingProcessSection from '../components/sections/BrandingProcessSection'
import BeforeAfterSection from '../components/sections/BeforeAfterSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import FAQSection from '../components/sections/FAQSection'
import NewsletterSection from '../components/sections/NewsletterSection'
import { productCatalog } from '../data/products'
import { usePageMeta } from '../hooks/usePageMeta'

const HomePage = () => {
  usePageMeta({
    title: 'Trendy Promo | Premium Custom Promotional Products',
    description:
      'Browse customizable promotional products, upload logos, and request bulk quotes with Trendy Promo.',
  })

  const featuredProducts = productCatalog.filter((product) => product.featured).slice(0, 4)
  const dealProducts = productCatalog.filter((product) => product.deal).slice(0, 4)
  const rushProducts = productCatalog.filter((product) => product.rush).slice(0, 4)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trendy Promo',
    url: 'https://www.trendypromo.com',
    description: 'Premium custom promotional products for B2B bulk buyers.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-877-555-0178',
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: 'en'
    }
  }

  return (
    <div className="home-page-compact">
      <HeroSection />
      <LogoMarqueeSection />
      <CategoryTilesSection />
      <TabbedProductShowcaseSection
        collections={[
          {
            id: 'featured',
            label: 'Most Requested',
            kicker: 'Featured',
            title: 'Most Requested Branded Products',
            description:
              'High-performing promotional products selected by our sourcing team for quality, pricing, and impact.',
            products: featuredProducts,
          },
          {
            id: 'deals',
            label: "Today's Deals",
            kicker: 'Limited Time',
            title: "Today's Deals",
            description: 'Special bulk pricing available for immediate quote requests.',
            products: dealProducts,
          },
          {
            id: 'rush',
            label: '24 Hour Rush',
            kicker: 'Express',
            title: '24 Hour Rush Collection',
            description: 'Need merch urgently? These products are configured for fast proof and production turnarounds.',
            products: rushProducts,
          },
        ]}
      />
      <WhyChooseUsSection />
      <BrandingProcessSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  )
}

export default HomePage
