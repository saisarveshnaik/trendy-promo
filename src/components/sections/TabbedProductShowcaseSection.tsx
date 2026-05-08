import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import type { Product } from '../../types'
import ProductCard from '../ui/ProductCard'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

type ProductCollection = {
  id: string
  label: string
  kicker: string
  title: string
  description: string
  products: Product[]
}

type TabbedProductShowcaseSectionProps = {
  collections: ProductCollection[]
}

const TabbedProductShowcaseSection = ({ collections }: TabbedProductShowcaseSectionProps) => {
  const [activeId, setActiveId] = useState(collections[0]?.id ?? '')

  const activeCollection = useMemo(
    () => collections.find((collection) => collection.id === activeId) ?? collections[0],
    [activeId, collections],
  )

  if (!activeCollection) {
    return null
  }

  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          kicker={activeCollection.kicker}
          title={activeCollection.title}
          description={activeCollection.description}
        />

        <Reveal className="mt-6">
          <div className="light-panel inline-flex max-w-full flex-wrap items-center gap-2 rounded-2xl p-2">
            {collections.map((collection) => {
              const isActive = collection.id === activeCollection.id

              return (
                <button
                  key={collection.id}
                  type="button"
                  onClick={() => setActiveId(collection.id)}
                  className={`neu-chip rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.11em] transition sm:text-sm ${
                    isActive ? 'neu-pressed text-blue-700' : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {collection.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal className="mt-7">
          <motion.div
            key={activeCollection.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <div className="flex gap-5 overflow-x-auto pb-2 fancy-scrollbar xl:grid xl:grid-cols-4 xl:overflow-visible">
              {activeCollection.products.map((product) => (
                <div key={product.id} className="min-w-[17.5rem] flex-1 xl:min-w-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

export default TabbedProductShowcaseSection
