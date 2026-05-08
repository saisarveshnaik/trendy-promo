import { Link } from 'react-router-dom'
import {
  Trophy,
  Shirt,
  Coffee,
  ShoppingBag,
  PenTool,
  Cpu,
  Briefcase,
  Trees,
  Leaf,
  Megaphone,
  ArrowUpRight,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { categoryTiles } from '../../data/navigation'
import SectionHeading from '../ui/SectionHeading'

const iconMap = [
  Shirt,
  Coffee,
  ShoppingBag,
  PenTool,
  Cpu,
  Briefcase,
  Trophy,
  Trees,
  Leaf,
  Megaphone,
]

const tileStyles = [
  {
    gradient: 'from-[#00d2ff] via-[#3a7bff] to-[#7a5cff]',
    glow: 'bg-[#7ad8ff]/70',
    orb: 'bg-[#d2f4ff]/65',
    text: 'text-white',
    label: 'text-white/80',
    chip: 'border-white/45 bg-white/20 text-white',
    badge: 'bg-white/20 text-white',
    overlay: 'from-[#0b1e52]/45 via-[#122357]/20 to-transparent',
  },
  {
    gradient: 'from-[#34d399] via-[#0ea5e9] to-[#2563eb]',
    glow: 'bg-[#96f3d0]/70',
    orb: 'bg-[#dafcf1]/65',
    text: 'text-white',
    label: 'text-white/80',
    chip: 'border-white/45 bg-white/20 text-white',
    badge: 'bg-white/20 text-white',
    overlay: 'from-[#03373d]/40 via-[#02485a]/20 to-transparent',
  },
  {
    gradient: 'from-[#ff8a65] via-[#ff5f9e] to-[#9f62ff]',
    glow: 'bg-[#ffb7d3]/70',
    orb: 'bg-[#ffe2ef]/65',
    text: 'text-white',
    label: 'text-white/85',
    chip: 'border-white/45 bg-white/20 text-white',
    badge: 'bg-white/20 text-white',
    overlay: 'from-[#58173f]/45 via-[#4a1c57]/20 to-transparent',
  },
  {
    gradient: 'from-[#facc15] via-[#f97316] to-[#ef4444]',
    glow: 'bg-[#ffe09a]/70',
    orb: 'bg-[#fff2cf]/70',
    text: 'text-white',
    label: 'text-white/85',
    chip: 'border-white/45 bg-white/20 text-white',
    badge: 'bg-black/20 text-white',
    overlay: 'from-[#5d2706]/45 via-[#66280b]/20 to-transparent',
  },
  {
    gradient: 'from-[#14b8a6] via-[#22d3ee] to-[#38bdf8]',
    glow: 'bg-[#9ff5f0]/70',
    orb: 'bg-[#dbfffb]/65',
    text: 'text-[#06364d]',
    label: 'text-[#0a4b67]/85',
    chip: 'border-white/50 bg-white/55 text-[#06435f]',
    badge: 'bg-white/55 text-[#07556f]',
    overlay: 'from-[#1f9ca9]/16 via-[#2ac7db]/10 to-transparent',
  },
  {
    gradient: 'from-[#4ade80] via-[#84cc16] to-[#facc15]',
    glow: 'bg-[#c9ffad]/70',
    orb: 'bg-[#edffd4]/70',
    text: 'text-[#263009]',
    label: 'text-[#3d500f]/85',
    chip: 'border-white/50 bg-white/55 text-[#2f4f0b]',
    badge: 'bg-white/55 text-[#3c5a10]',
    overlay: 'from-[#70b02a]/20 via-[#9ad652]/10 to-transparent',
  },
]

const promoLabels = [
  'Top Seller',
  'Trending',
  'Staff Pick',
  'Fast Quote',
  'Rush Ready',
  'Eco Focus',
]

const mobilePromoLabels = [
  'Top',
  'Hot',
  'Pick',
  'Fast',
  'Rush',
  'Eco',
]

const CategoryTilesSection = () => {
  return (
    <section className="section-space pt-2">
      <div className="container-shell">
        <SectionHeading
          kicker="Browse Fast"
          title="Browse Categories"
          description="Curated category zones built for campaign planning, event sourcing, and premium brand launches."
        />

        <div className="mt-8 grid grid-cols-2 auto-rows-[132px] gap-3 sm:auto-rows-[150px] sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
          {categoryTiles.map((category, index) => {
            const Icon = iconMap[index % iconMap.length]
            const style = tileStyles[index % tileStyles.length]
            const label = promoLabels[index % promoLabels.length]
            const mobileLabel = mobilePromoLabels[index % mobilePromoLabels.length]

            return (
              <motion.div
                key={category}
                whileHover={{ y: -6, scale: 1.01, rotate: index % 2 === 0 ? -0.35 : 0.35 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <Link
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className="group relative flex h-full overflow-hidden rounded-[1.1rem] border border-white/45 p-3 shadow-[0_16px_34px_rgba(31,51,88,0.22)] backdrop-blur-[1px] sm:rounded-[1.6rem] sm:p-5"
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.gradient}`} />
                  <div className="pointer-events-none absolute inset-0 opacity-45 [background:linear-gradient(120deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.24),transparent_45%)]" />
                  <div className={`pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full blur-3xl transition duration-500 group-hover:scale-125 ${style.glow}`} />
                  <div className={`pointer-events-none absolute -bottom-10 -right-8 h-32 w-32 rounded-full blur-3xl transition duration-500 group-hover:scale-125 ${style.orb}`} />
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${style.overlay}`} />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_32%,rgba(255,255,255,0.15)_60%,rgba(255,255,255,0)_100%)] opacity-60 transition duration-500 group-hover:opacity-80" />

                  <div className="relative flex w-full flex-col gap-2 sm:justify-between sm:gap-0">
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <span className={`inline-flex rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] sm:hidden ${style.badge}`}>
                        {mobileLabel}
                      </span>
                      <span className={`hidden rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] sm:inline-flex ${style.badge}`}>
                        {label}
                      </span>
                      <span className={`inline-flex rounded-lg border p-1.5 shadow-[0_8px_18px_rgba(17,20,48,0.2)] sm:rounded-xl sm:p-2 ${style.chip}`}>
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                    </div>

                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <p className={`text-[9px] font-bold uppercase tracking-[0.14em] sm:text-[11px] sm:tracking-[0.18em] ${style.label}`}>Category</p>
                        <p className={`truncate text-sm font-semibold leading-tight sm:mt-1 sm:text-lg ${style.text}`}>{category}</p>
                      </div>
                      <span className={`inline-flex items-center gap-1 rounded-full border border-white/35 bg-white/20 px-2 py-1 text-[10px] font-semibold backdrop-blur-[2px] sm:px-2.5 sm:text-[11px] ${style.text}`}>
                        <span className="hidden sm:inline">View</span>
                        <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryTilesSection
