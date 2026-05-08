import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '../../types'
import { formatCurrency } from '../../utils/format'
import TiltCard from './TiltCard'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <TiltCard className="group relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-slate-900/55 shadow-card backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-300/10 via-transparent to-indigo-500/5 opacity-70" />
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -inset-x-10 top-0 h-40 bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent blur-2xl" />
      </div>

      <div className="relative h-56 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.badges?.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-cyan-200/40 bg-cyan-200/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-100"
            >
              {badge}
            </span>
          ))}
          {product.rush ? (
            <span className="rounded-full border border-amber-300/40 bg-amber-300/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-100">
              24h Rush
            </span>
          ) : null}
        </div>
      </div>

      <div className="relative space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          {product.category} - {product.subcategory}
        </p>
        <h3 className="text-xl font-semibold text-white">{product.name}</h3>
        <p className="min-h-10 text-sm text-slate-300">{product.description}</p>

        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-cyan-200">From {formatCurrency(product.priceFrom)}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <motion.div whileHover={{ y: -2 }}>
            <Link
              to={`/quote/${product.id}`}
              className="block rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-2 text-center text-xs font-bold uppercase tracking-wide text-slate-950"
            >
              Request Quote
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }}>
            <Link
              to={`/products/${product.id}`}
              className="block rounded-xl border border-white/20 bg-white/[0.03] px-3 py-2 text-center text-xs font-bold uppercase tracking-wide text-slate-200 transition hover:border-cyan-300/50"
            >
              Customize
            </Link>
          </motion.div>
        </div>
      </div>
    </TiltCard>
  )
}

export default ProductCard
