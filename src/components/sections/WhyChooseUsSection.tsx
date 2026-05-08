import { Check, ShieldCheck, Sparkles, Truck } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const points = [
  {
    icon: ShieldCheck,
    title: 'Quality-Controlled Production',
    description: 'Every order goes through branded proofing and rigorous print checks before shipping.'
  },
  {
    icon: Truck,
    title: 'Reliable Bulk Logistics',
    description: 'Ship to one HQ or many destinations with centralized shipment tracking and support.'
  },
  {
    icon: Sparkles,
    title: 'Premium Product Curation',
    description: 'Modern products selected for brand impact, repeat usage, and campaign performance.'
  }
]

const WhyChooseUsSection = () => {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          kicker="Why Trendy Promo"
          title="Built for B2B Buyers Who Need Precision and Speed"
          description="A high-performance pipeline from sourcing to proofing to delivery with enterprise reliability."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-slate-900/55 p-6 shadow-card backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 to-transparent opacity-70" />
                <span className="relative inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-2 text-cyan-100">
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-4 text-xl font-semibold text-white">{point.title}</h3>
                <p className="relative mt-2 text-sm text-slate-300">{point.description}</p>
                <p className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                  <Check className="h-4 w-4" /> Dedicated account guidance
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
