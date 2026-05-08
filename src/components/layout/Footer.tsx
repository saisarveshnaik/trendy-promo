import { Link } from 'react-router-dom'
import { Globe, BriefcaseBusiness, Mail, Phone, Sparkles } from 'lucide-react'
import { categoryTiles } from '../../data/navigation'
import Reveal from '../ui/Reveal'

const Footer = () => {
  return (
    <footer className="relative mt-16 text-slate-600">
      <div className="container-shell py-14">
        <Reveal className="light-glass grid gap-10 rounded-[2rem] p-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-3 inline-flex items-center gap-2 text-lg font-semibold text-slate-800">
              <Sparkles className="h-5 w-5 text-blue-500" /> Trendy Promo
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Premium promotional products for fast-moving marketing teams. Build memorable brand moments with
              modern custom merchandise.
            </p>
            <div className="mt-4 flex gap-3">
              {[Globe, BriefcaseBusiness].map((Icon) => (
                <span key={Icon.displayName} className="neu-chip rounded-full p-2">
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Contact</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-500" /> +1 (877) 555-0178
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" /> quotes@trendypromo.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Popular Categories</h3>
            <div className="space-y-2 text-sm text-slate-600">
              {categoryTiles.slice(0, 6).map((category) => (
                <Link key={category} to={`/products?category=${encodeURIComponent(category)}`} className="block transition hover:text-blue-600">
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Quick Links</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <Link to="/about" className="block transition hover:text-blue-600">
                About Us
              </Link>
              <Link to="/todays-deals" className="block transition hover:text-blue-600">
                Today&apos;s Deals
              </Link>
              <Link to="/24-hour-rush" className="block transition hover:text-blue-600">
                24 Hour Rush
              </Link>
              <Link to="/contact" className="block transition hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 text-center text-xs text-slate-500">
          Copyright {new Date().getFullYear()} Trendy Promo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
