import { motion } from 'framer-motion'

const shimmer = {
  initial: { x: '-120%' },
  animate: { x: '120%' },
}

const SkeletonCard = () => (
  <div className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-slate-900/45 p-4 backdrop-blur-xl">
    <div className="h-56 rounded-2xl bg-slate-800/70" />
    <div className="mt-4 space-y-3">
      <div className="h-3 w-1/2 rounded bg-slate-700/60" />
      <div className="h-5 w-3/4 rounded bg-slate-700/60" />
      <div className="h-3 w-full rounded bg-slate-700/60" />
      <div className="h-3 w-2/3 rounded bg-slate-700/60" />
      <div className="h-10 rounded-xl bg-slate-700/60" />
    </div>
    <motion.div
      className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      variants={shimmer}
      initial="initial"
      animate="animate"
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
)

export default SkeletonCard
