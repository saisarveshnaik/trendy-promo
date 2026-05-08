import { ArrowUpRight, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '../../types'
import { formatCurrency } from '../../utils/format'
import TiltCard from './TiltCard'

type ProductCardProps = {
  product: Product
}

const categoryTheme: Record<
  string,
  {
    border: string
    wash: string
    categoryPill: string
    price: string
    quoteButton: string
  }
> = {
  Apparel: {
    border: 'border-sky-200/75',
    wash: 'from-sky-100/65 via-transparent to-indigo-100/45',
    categoryPill: 'border-sky-200/80 bg-sky-50/92 text-sky-700',
    price: 'text-sky-700',
    quoteButton: 'from-sky-500 to-indigo-500',
  },
  Drinkware: {
    border: 'border-cyan-200/75',
    wash: 'from-cyan-100/65 via-transparent to-teal-100/45',
    categoryPill: 'border-cyan-200/80 bg-cyan-50/92 text-cyan-700',
    price: 'text-cyan-700',
    quoteButton: 'from-cyan-500 to-blue-500',
  },
  Bags: {
    border: 'border-violet-200/75',
    wash: 'from-violet-100/65 via-transparent to-fuchsia-100/45',
    categoryPill: 'border-violet-200/80 bg-violet-50/92 text-violet-700',
    price: 'text-violet-700',
    quoteButton: 'from-violet-500 to-fuchsia-500',
  },
  Pens: {
    border: 'border-blue-200/75',
    wash: 'from-blue-100/65 via-transparent to-indigo-100/45',
    categoryPill: 'border-blue-200/80 bg-blue-50/92 text-blue-700',
    price: 'text-blue-700',
    quoteButton: 'from-blue-500 to-indigo-500',
  },
  'Tech Accessories': {
    border: 'border-emerald-200/75',
    wash: 'from-emerald-100/65 via-transparent to-teal-100/45',
    categoryPill: 'border-emerald-200/80 bg-emerald-50/92 text-emerald-700',
    price: 'text-emerald-700',
    quoteButton: 'from-emerald-500 to-teal-500',
  },
  'Office Supplies': {
    border: 'border-amber-200/75',
    wash: 'from-amber-100/65 via-transparent to-orange-100/45',
    categoryPill: 'border-amber-200/80 bg-amber-50/94 text-amber-700',
    price: 'text-amber-700',
    quoteButton: 'from-amber-500 to-orange-500',
  },
  Awards: {
    border: 'border-rose-200/75',
    wash: 'from-rose-100/65 via-transparent to-pink-100/45',
    categoryPill: 'border-rose-200/80 bg-rose-50/92 text-rose-700',
    price: 'text-rose-700',
    quoteButton: 'from-rose-500 to-pink-500',
  },
  'Outdoor Products': {
    border: 'border-lime-200/75',
    wash: 'from-lime-100/65 via-transparent to-emerald-100/45',
    categoryPill: 'border-lime-200/80 bg-lime-50/92 text-lime-700',
    price: 'text-lime-700',
    quoteButton: 'from-lime-500 to-emerald-500',
  },
  'Eco Friendly Products': {
    border: 'border-green-200/75',
    wash: 'from-green-100/65 via-transparent to-emerald-100/45',
    categoryPill: 'border-green-200/80 bg-green-50/92 text-green-700',
    price: 'text-green-700',
    quoteButton: 'from-green-500 to-emerald-500',
  },
  'Trade Show Giveaways': {
    border: 'border-fuchsia-200/75',
    wash: 'from-fuchsia-100/65 via-transparent to-violet-100/45',
    categoryPill: 'border-fuchsia-200/80 bg-fuchsia-50/92 text-fuchsia-700',
    price: 'text-fuchsia-700',
    quoteButton: 'from-fuchsia-500 to-violet-500',
  },
}

const ProductCard = ({ product }: ProductCardProps) => {
  const theme = categoryTheme[product.category] ?? {
    border: 'border-slate-200/70',
    wash: 'from-slate-100/70 via-transparent to-blue-100/35',
    categoryPill: 'border-slate-200/80 bg-slate-50/92 text-slate-700',
    price: 'text-blue-700',
    quoteButton: 'from-blue-500 to-indigo-500',
  }

  const primaryBadge = product.badges?.[0]

  return (
    <TiltCard
      className={`group floating-card relative overflow-hidden rounded-[1.75rem] border bg-gradient-to-br from-white/96 via-slate-50/92 to-slate-100/88 shadow-[0_18px_38px_rgba(29,46,80,0.2)] transition duration-300 hover:shadow-[0_24px_48px_rgba(25,42,72,0.28)] ${theme.border}`}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.wash} opacity-80`} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_8%,rgba(255,255,255,0.8),transparent_35%),radial-gradient(circle_at_88%_92%,rgba(255,255,255,0.55),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/55" />

      <div className="relative m-3 overflow-hidden rounded-[1.2rem] border border-white/70 bg-slate-100/75 shadow-[inset_2px_2px_6px_rgba(255,255,255,0.45),inset_-2px_-2px_8px_rgba(169,182,205,0.24)]">
        <div className="relative aspect-[4/3]">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/16 via-transparent to-white/10" />

          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {primaryBadge ? (
              <span className="inline-flex items-center rounded-full border border-white/60 bg-white/92 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-[0_6px_14px_rgba(20,33,58,0.16)]">
                {primaryBadge}
              </span>
            ) : null}
            {product.rush ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200/75 bg-cyan-50/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-700 shadow-[0_6px_14px_rgba(20,33,58,0.12)]">
                <Zap className="h-3 w-3" />
                24h
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="relative px-4 pb-4 pt-1.5">
        <div className="flex items-start justify-between gap-2">
          <span
            className={`inline-flex max-w-[64%] truncate rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${theme.categoryPill}`}
          >
            {product.category}
          </span>
          <p className={`rounded-full border border-white/70 bg-white/86 px-3 py-1 text-sm font-bold shadow-[0_6px_14px_rgba(23,36,65,0.12)] ${theme.price}`}>
            From {formatCurrency(product.priceFrom)}
          </p>
        </div>

        <h3 className="mt-2 truncate text-[1.1rem] font-semibold text-slate-900 sm:text-[1.23rem]">{product.name}</h3>
        <p className="mt-1 truncate text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{product.subcategory}</p>

        <div className="mt-3.5 grid grid-cols-2 items-stretch gap-2.5">
          <motion.div whileHover={{ y: -1 }} className="h-full">
            <Link
              to={`/quote/${product.id}`}
              className="cta-primary inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-xl px-3 text-xs font-semibold uppercase tracking-[0.08em]"
            >
              Quote
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -1 }} className="h-full">
            <Link
              to={`/products/${product.id}`}
              className="cta-secondary inline-flex h-11 w-full items-center justify-center gap-1 whitespace-nowrap rounded-xl px-3 text-xs font-semibold uppercase tracking-[0.08em]"
            >
              Customize
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </TiltCard>
  )
}

export default ProductCard
