import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'

const logos = [
  'Northline',
  'BlueOrbit',
  'Pinnacle Labs',
  'Gridwave',
  'Astera',
  'Kinetic House',
  'Brightline',
  'Zenith Co',
]

const LogoMarqueeSection = () => {
  const loopedLogos = [...logos, ...logos]

  return (
    <section className="py-3 sm:py-4">
      <div className="container-shell">
        <Reveal className="rounded-3xl border border-white/15 bg-slate-950/55 px-5 py-3 backdrop-blur-xl">
          <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
            Brand teams using Trendy Promo
          </p>

          <div className="overflow-hidden">
            <motion.div className="flex w-max items-center gap-3" animate={{ x: ['0%', '-50%'] }} transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}>
              {loopedLogos.map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-sm font-semibold text-slate-200"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default LogoMarqueeSection
