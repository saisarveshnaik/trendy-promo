import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { faqItems } from '../../data/navigation'
import Reveal from '../ui/Reveal'

const FAQSection = () => {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          kicker="FAQ"
          title="Questions from Procurement and Marketing Teams"
          description="Everything buyers ask before approving custom promotional product campaigns."
        />

        <div className="mt-8 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = activeItem === index
            return (
              <Reveal key={item.question} delay={index * 0.04}>
                <article className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900/55 backdrop-blur-xl">
                  <button
                    type="button"
                    onClick={() => setActiveItem(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-sm font-semibold text-white sm:text-base">{item.question}</h3>
                    <ChevronDown className={`h-5 w-5 text-slate-300 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-5 pb-4 text-sm text-slate-300">{item.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
