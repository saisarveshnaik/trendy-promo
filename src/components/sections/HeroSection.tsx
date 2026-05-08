import { ArrowRight, BadgeCheck, Clock3, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedCounter from '../ui/AnimatedCounter'
import Reveal from '../ui/Reveal'

const HeroSection = () => {
  const bannerImages = [
    {
      src: 'https://images.pexels.com/photos/6378651/pexels-photo-6378651.jpeg?cs=srgb&dl=pexels-melikebenli-6378651.jpg&fm=jpg',
      alt: 'Insulated tumbler product image',
      className: 'h-56 sm:h-72',
    },
    {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Polo%20shirt%20%28AM%202017.66.47-2%29.jpg',
      alt: 'Folded polo shirt product image',
      className: 'h-44 sm:h-52',
    },
    {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Power%20Bank.jpg',
      alt: 'Portable power bank product image',
      className: 'h-44 sm:h-52',
    },
    {
      src: 'https://images.pexels.com/photos/13975271/pexels-photo-13975271.jpeg?cs=srgb&dl=pexels-borishamer-13975271.jpg&fm=jpg',
      alt: 'Corporate gift box product image',
      className: 'h-56 sm:h-72',
    },
  ]

  return (
    <section className="section-space relative overflow-hidden pt-12">
      <div className="container-shell">
        <div className="noise-overlay relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-slate-950/60 px-6 py-8 shadow-glow backdrop-blur-2xl sm:px-10 lg:px-14 lg:py-14">
          <div className="absolute -left-14 top-16 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute right-10 top-10 h-44 w-44 rounded-full bg-indigo-500/35 blur-3xl" />
          <div className="absolute -bottom-16 right-24 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="space-y-6" y={28}>
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                <BadgeCheck className="h-4 w-4" /> Trusted by fast-scaling brands
              </p>

              <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Promotional Products
                <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-emerald-200 bg-clip-text text-transparent">
                  {' '}
                  Reimagined for Modern B2B Buying
                </span>
              </h1>

              <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                Deliver premium branded merchandise with lightning-fast production, elevated packaging, and conversion-
                focused product experiences that make your brand impossible to forget.
              </p>

              <div className="flex flex-wrap gap-3">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-glow"
                  >
                    Explore Products <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/24-hour-rush"
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-bold text-slate-100"
                  >
                    View 24 Hour Rush
                  </Link>
                </motion.div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Products</p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    <AnimatedCounter value={1200} suffix="+" />
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Rush Proofs</p>
                  <p className="mt-1 inline-flex items-center gap-2 text-2xl font-semibold text-white">
                    <Clock3 className="h-5 w-5 text-cyan-200" /> 24h
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Buyer Teams</p>
                  <p className="mt-1 inline-flex items-center gap-2 text-2xl font-semibold text-white">
                    <Users className="h-5 w-5 text-emerald-200" />
                    <AnimatedCounter value={2400} suffix="+" />
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="grid grid-cols-2 gap-4" delay={0.1}>
              {bannerImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-slate-900/70 shadow-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`${image.className} w-full object-cover object-center transition duration-700 hover:scale-105`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-slate-950/60 px-2.5 py-1 text-[11px] text-cyan-100">
                    <Sparkles className="h-3.5 w-3.5" /> Premium Pick
                  </div>
                </motion.div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
