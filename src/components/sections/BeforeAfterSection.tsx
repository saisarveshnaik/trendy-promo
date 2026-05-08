import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import cupWithoutLogo from '../../assets/cup-without-logo.jpg'
import cupWithLogo from '../../assets/cup-with-logo.jpg'

const beforeAfter = {
  before: cupWithoutLogo,
  after: cupWithLogo,
}

const BeforeAfterSection = () => {
  const [position, setPosition] = useState(50)

  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          kicker="Customization"
          title="Before and After Brand Personalization"
          description="Move the slider to compare stock product presentation versus branded campaign-ready outcome."
          align="center"
        />

        <Reveal className="mt-8">
          <div className="light-glass relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-4 sm:p-6">
            <div className="relative h-[18rem] overflow-hidden rounded-2xl sm:h-[25rem]">
              <img src={beforeAfter.before} alt="Stock product appearance" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
                <img src={beforeAfter.after} alt="Branded product appearance" className="h-full w-full object-cover" />
              </div>

              <motion.div
                className="absolute inset-y-0 w-0.5 bg-blue-500"
                style={{ left: `${position}%` }}
                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
              >
                <span className="neu-chip absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur" />
              </motion.div>

              <div className="neu-chip absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700">
                Before
              </div>
              <div className="neu-highlight absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-700">
                After
              </div>
            </div>

            <div className="mt-5">
              <input
                type="range"
                min={0}
                max={100}
                value={position}
                onChange={(event) => setPosition(Number(event.target.value))}
                className="h-2 w-full cursor-ew-resize appearance-none rounded-full"
                aria-label="Before after slider"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default BeforeAfterSection
