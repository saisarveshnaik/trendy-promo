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

        <Reveal className="light-glass mt-8 overflow-hidden rounded-[1.8rem] p-4">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {[...rows, ...rows].map((testimonial, index) => (
              <blockquote key={`${testimonial.author}-${index}`} className="light-panel w-[21rem] rounded-2xl p-5">
                <p className="text-sm leading-relaxed text-slate-600">"{testimonial.quote}"</p>
                <footer className="mt-4 border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
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
