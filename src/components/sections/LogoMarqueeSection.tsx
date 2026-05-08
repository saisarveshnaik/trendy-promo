import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'
import northlineLogo from '../../assets/brands/northline-bw.svg'
import blueorbitLogo from '../../assets/brands/blueorbit-bw.svg'
import pinnacleLabsLogo from '../../assets/brands/pinnacle-labs-bw.svg'
import gridwaveLogo from '../../assets/brands/gridwave-bw.svg'
import asteraLogo from '../../assets/brands/astera-bw.svg'
import kineticHouseLogo from '../../assets/brands/kinetic-house-bw.svg'
import brightlineLogo from '../../assets/brands/brightline-bw.svg'
import zenithCoLogo from '../../assets/brands/zenith-co-bw.svg'

const logos = [
  { name: 'Northline', src: northlineLogo },
  { name: 'BlueOrbit', src: blueorbitLogo },
  { name: 'Pinnacle Labs', src: pinnacleLabsLogo },
  { name: 'Gridwave', src: gridwaveLogo },
  { name: 'Astera', src: asteraLogo },
  { name: 'Kinetic House', src: kineticHouseLogo },
  { name: 'Brightline', src: brightlineLogo },
  { name: 'Zenith Co', src: zenithCoLogo },
]

const LogoMarqueeSection = () => {
  const loopedLogos = [...logos, ...logos]

  return (
    <section className="py-3 sm:py-4">
      <div className="container-shell">
        <Reveal className="light-glass overflow-hidden rounded-3xl py-3">
          <p className="mb-2 pb-2 text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
            Brand teams using Trendy Promo
          </p>

          <div className="overflow-hidden pb-2">
            <motion.div className="flex w-max items-center gap-3 pb-1" animate={{ x: ['0%', '-50%'] }} transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}>
              {loopedLogos.map((logo, index) => (
                <span
                  key={`${logo.name}-${index}`}
                  className="inline-flex h-16 min-w-[11rem] items-center justify-center rounded-2xl border border-slate-300/60 bg-white/88 px-4 shadow-[0_3px_10px_rgba(15,23,42,0.08)]"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} brand logo`}
                    loading="lazy"
                    className="h-9 w-auto object-contain opacity-85 grayscale"
                  />
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
