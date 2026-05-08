import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/navigation'
import Reveal from '../ui/Reveal'

const TestimonialsSection = () => {
  const rows = [...testimonials, ...testimonials]

  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          kicker="Client Voice"
          title="Trusted by Growth Teams and Enterprise Buyers"
          description="Organizations rely on Trendy Promo for premium product quality and dependable bulk fulfillment."
        />

        <Reveal className="mt-8 overflow-hidden rounded-[1.8rem] border border-white/15 bg-slate-950/55 p-4 shadow-card backdrop-blur-xl">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {[...rows, ...rows].map((testimonial, index) => (
              <blockquote key={`${testimonial.author}-${index}`} className="w-[21rem] rounded-2xl border border-white/15 bg-white/[0.03] p-5">
                <p className="text-sm leading-relaxed text-slate-200">"{testimonial.quote}"</p>
                <footer className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

export default TestimonialsSection
