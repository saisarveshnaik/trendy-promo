import type { Product } from '../../types'
import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'
import Reveal from '../ui/Reveal'

type ProductShowcaseSectionProps = {
  kicker: string
  title: string
  description: string
  products: Product[]
}

const ProductShowcaseSection = ({ kicker, title, description, products }: ProductShowcaseSectionProps) => {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading kicker={kicker} title={title} description={description} />

        <Reveal className="mt-8">
          <div className="flex gap-5 overflow-x-auto pb-2 fancy-scrollbar xl:grid xl:grid-cols-4 xl:overflow-visible">
            {products.map((product) => (
              <div key={product.id} className="min-w-[17.5rem] flex-1 xl:min-w-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ProductShowcaseSection
