import { Link } from 'react-router-dom'
import { Globe, BriefcaseBusiness, Mail, Phone, Sparkles } from 'lucide-react'
import { categoryTiles } from '../../data/navigation'
import Reveal from '../ui/Reveal'

const Footer = () => {
  return (
    <footer className="relative mt-16 border-t border-white/10 bg-slate-950/80 text-slate-200 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="container-shell py-14">
        <Reveal className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-3 inline-flex items-center gap-2 text-lg font-semibold text-white">
              <Sparkles className="h-5 w-5 text-cyan-200" /> Trendy Promo
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Premium promotional products for fast-moving marketing teams. Build memorable brand moments with
              modern custom merchandise.
            </p>
            <div className="mt-4 flex gap-3">
              {[Globe, BriefcaseBusiness].map((Icon) => (
                <span key={Icon.displayName} className="rounded-full border border-white/20 bg-white/[0.04] p-2">
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Contact</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-200" /> +1 (877) 555-0178
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-200" /> quotes@trendypromo.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Popular Categories</h3>
            <div className="space-y-2 text-sm text-slate-300">
              {categoryTiles.slice(0, 6).map((category) => (
                <Link key={category} to={`/products?category=${encodeURIComponent(category)}`} className="block transition hover:text-cyan-100">
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Quick Links</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <Link to="/about" className="block transition hover:text-cyan-100">
                About Us
              </Link>
              <Link to="/todays-deals" className="block transition hover:text-cyan-100">
                Today&apos;s Deals
              </Link>
              <Link to="/24-hour-rush" className="block transition hover:text-cyan-100">
                24 Hour Rush
              </Link>
              <Link to="/contact" className="block transition hover:text-cyan-100">
                Contact
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
          Copyright {new Date().getFullYear()} Trendy Promo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
