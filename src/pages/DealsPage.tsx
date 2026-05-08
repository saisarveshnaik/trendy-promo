import ProductShowcaseSection from '../components/sections/ProductShowcaseSection'
import NewsletterSection from '../components/sections/NewsletterSection'
import { productCatalog } from '../data/products'
import { usePageMeta } from '../hooks/usePageMeta'

const DealsPage = () => {
  usePageMeta({
    title: "Today's Deals | Trendy Promo",
    description: 'Discover limited-time promotional product deals and request bulk pricing instantly.',
  })

  const deals = productCatalog.filter((product) => product.deal)

  return (
    <>
      <ProductShowcaseSection
        kicker="Deals"
        title="Today&apos;s Bulk Buying Deals"
        description="Save more on curated products with promotional pricing windows."
        products={deals}
      />
      <NewsletterSection />
    </>
  )
}

export default DealsPage
