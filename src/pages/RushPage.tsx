import ProductShowcaseSection from '../components/sections/ProductShowcaseSection'
import FAQSection from '../components/sections/FAQSection'
import { productCatalog } from '../data/products'
import { usePageMeta } from '../hooks/usePageMeta'

const RushPage = () => {
  usePageMeta({
    title: '24 Hour Rush Products | Trendy Promo',
    description: 'Rush-ready customizable products with accelerated production and delivery timelines.',
  })

  const rushProducts = productCatalog.filter((product) => product.rush)

  return (
    <>
      <ProductShowcaseSection
        kicker="Rush"
        title="24 Hour Rush Promotional Products"
        description="Fast turnaround items for urgent events, launches, and campaign activations."
        products={rushProducts}
      />
      <FAQSection />
    </>
  )
}

export default RushPage
