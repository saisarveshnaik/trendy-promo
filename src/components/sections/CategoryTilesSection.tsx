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

const gradients = [
  'from-cyan-300/70 via-blue-500/55 to-indigo-600/45',
  'from-emerald-300/70 via-teal-500/55 to-cyan-600/45',
  'from-fuchsia-300/70 via-violet-500/55 to-indigo-700/45',
  'from-orange-300/70 via-rose-500/55 to-pink-600/45',
  'from-lime-300/70 via-emerald-500/55 to-teal-600/45',
  'from-amber-300/70 via-orange-500/55 to-red-600/45',
]

const CategoryTilesSection = () => {
  return (
    <section className="section-space pt-2">
      <div className="container-shell">
        <SectionHeading
          kicker="Browse Fast"
          title="Explore Categories Through an Interactive Bento Grid"
          description="Curated category zones built for campaign planning, event sourcing, and premium brand launches."
        />

        <div className="mt-8 grid auto-rows-[140px] gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {categoryTiles.map((category, index) => {
            const Icon = iconMap[index % iconMap.length]
            return (
              <motion.div key={category} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                <Link
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className={`group noise-overlay relative flex h-full items-end overflow-hidden rounded-[1.5rem] border border-white/15 bg-slate-900/60 p-5 shadow-card backdrop-blur-xl`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-95 transition duration-500 group-hover:scale-110`}
                  />
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/35 blur-2xl transition group-hover:scale-125" />
                  <div className="pointer-events-none absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-cyan-200/35 blur-2xl transition group-hover:scale-125" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-white/15" />

                  <div className="relative flex w-full items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">Category</p>
                      <p className="mt-1 text-lg font-semibold text-white">{category}</p>
                    </div>
                    <span className="rounded-xl border border-white/35 bg-white/20 p-2 text-white shadow-lg shadow-black/20">
                      <Icon className="h-5 w-5" />
                    </span>
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
