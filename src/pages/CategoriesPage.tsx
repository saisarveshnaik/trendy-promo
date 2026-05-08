import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { categories, productCatalog } from '../data/products'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'

const CategoriesPage = () => {
  usePageMeta({
    title: 'Categories | Trendy Promo',
    description: 'Explore promotional product categories across apparel, drinkware, tech, office, and event giveaways.',
  })

  return (
    <section className="section-space pt-8">
      <div className="container-shell">
        <SectionHeading
          kicker="Categories"
          title="Explore Product Categories"
          description="Find the right products for events, kits, onboarding, and high-volume campaigns."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const count = productCatalog.filter((item) => item.category === category).length
            return (
              <Reveal key={category} delay={index * 0.06}>
                <Link
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className="group block rounded-[1.6rem] border border-white/15 bg-slate-950/60 p-6 shadow-card backdrop-blur-xl transition hover:-translate-y-1"
                >
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
                    <Sparkles className="h-3.5 w-3.5" /> Category
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{category}</h2>
                  <p className="mt-2 text-sm text-slate-300">{count} products available for customization.</p>
                  <p className="mt-4 text-sm font-semibold text-cyan-100">View products</p>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoriesPage
