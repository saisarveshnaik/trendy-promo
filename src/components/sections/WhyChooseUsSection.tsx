import { Check, ShieldCheck, Sparkles, Truck } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const points = [
  {
    icon: ShieldCheck,
    title: 'Quality-Controlled Production',
    description: 'Every order goes through branded proofing and rigorous print checks before shipping.',
    accent: 'from-[#67b5ff] via-[#5f8cff] to-[#7a6bff]',
    glow: 'bg-[#9ed5ff]/75',
    metric: '98.7% approval rate',
    tag: 'QA First',
  },
  {
    icon: Truck,
    title: 'Reliable Bulk Logistics',
    description: 'Ship to one HQ or many destinations with centralized shipment tracking and support.',
    accent: 'from-[#3ed4bf] via-[#24b3d6] to-[#3c8cff]',
    glow: 'bg-[#9cf0e6]/70',
    metric: '24/7 shipment visibility',
    tag: 'Multi-Ship',
  },
  {
    icon: Sparkles,
    title: 'Premium Product Curation',
    description: 'Modern products selected for brand impact, repeat usage, and campaign performance.',
    accent: 'from-[#ff9a72] via-[#ff6f9c] to-[#966bff]',
    glow: 'bg-[#ffc8dd]/70',
    metric: 'Top-tier brand fit',
    tag: 'Curated Picks',
  },
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
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200/75 bg-gradient-to-br from-white/95 via-slate-50/92 to-slate-100/88 p-6 shadow-[0_14px_32px_rgba(125,143,176,0.2)]"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${point.accent} opacity-[0.15]`} />
                <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl transition duration-500 group-hover:scale-125 ${point.glow}`} />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.62)_0%,rgba(255,255,255,0)_45%)]" />

                <div className="relative flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/75 bg-white/86 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600">
                    <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${point.accent}`} />
                    {point.tag}
                  </span>
                  <span className="inline-flex rounded-xl border border-white/65 bg-white/70 p-2 text-slate-700 shadow-[0_8px_16px_rgba(41,58,95,0.12)]">
                    <point.icon className="h-5 w-5" />
                  </span>
                </div>

                <h3 className="relative mt-4 text-xl font-semibold text-slate-900">{point.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{point.description}</p>

                <div className="relative mt-5 flex items-center justify-between gap-3">
                  <p className="truncate text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{point.metric}</p>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/75 bg-emerald-50/88 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    <Check className="h-3.5 w-3.5" />
                    Guided
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
