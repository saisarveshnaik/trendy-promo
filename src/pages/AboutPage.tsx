import { Link } from 'react-router-dom'
import { Layers3 } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import Reveal from '../components/ui/Reveal'

const AboutPage = () => {
  usePageMeta({
    title: 'About Trendy Promo',
    description: 'Learn about Trendy Promo and our B2B-focused approach to premium branded merchandise sourcing.',
  })

  return (
    <section className="section-space pt-8">
      <div className="container-shell max-w-5xl">
        <Reveal>
          <article className="light-glass rounded-[1.8rem] p-7 sm:p-10">
            <p className="neu-chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              <Layers3 className="h-3.5 w-3.5" /> About Us
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">A Modern Partner for Promotional Product Procurement</h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Trendy Promo was built to make bulk branded merchandising easier for busy marketing and procurement teams.
              We combine premium product curation, responsive quote support, and dependable production timelines so your
              brand can launch campaigns with confidence.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              From startup growth campaigns to enterprise event rollouts, we help teams secure better promotional products
              without sacrificing speed or quality.
            </p>
            <Link to="/products" className="cta-primary mt-6">
              Explore Products
            </Link>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutPage
