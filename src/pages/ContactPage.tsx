import { useState } from 'react'
import type { FormEvent } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import Reveal from '../components/ui/Reveal'

const ContactPage = () => {
  usePageMeta({
    title: 'Contact Trendy Promo',
    description: 'Contact Trendy Promo for product recommendations, quote support, and branding consultations.',
  })

  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="section-space pt-8">
      <div className="container-shell max-w-5xl">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <article className="rounded-[1.6rem] border border-white/15 bg-slate-950/60 p-6 shadow-card backdrop-blur-xl">
              <h1 className="text-3xl font-semibold text-white">Contact Us</h1>
              <p className="mt-3 text-sm text-slate-300">Talk with our team about product sourcing, artwork support, and bulk order planning.</p>
              <div className="mt-4 space-y-2 text-sm text-slate-200">
                <p><span className="font-semibold">Phone:</span> +1 (877) 555-0178</p>
                <p><span className="font-semibold">Email:</span> quotes@trendypromo.com</p>
                <p><span className="font-semibold">Hours:</span> Mon - Fri, 8AM - 6PM EST</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={submit} className="rounded-[1.6rem] border border-white/15 bg-slate-950/60 p-6 shadow-card backdrop-blur-xl">
              <h2 className="text-xl font-semibold text-white">Send a Message</h2>
              <div className="mt-4 grid gap-3">
                <input required placeholder="Name" className="h-11 rounded-xl border border-white/20 bg-white/[0.03] px-3 text-sm text-white" />
                <input required type="email" placeholder="Work email" className="h-11 rounded-xl border border-white/20 bg-white/[0.03] px-3 text-sm text-white" />
                <input required placeholder="Company" className="h-11 rounded-xl border border-white/20 bg-white/[0.03] px-3 text-sm text-white" />
                <textarea required rows={4} placeholder="How can we help?" className="rounded-xl border border-white/20 bg-white/[0.03] p-3 text-sm text-white" />
                <button type="submit" className="rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-4 py-3 text-sm font-bold text-slate-950">
                  Send Message
                </button>
                {sent ? <p className="text-sm font-semibold text-emerald-200">Your message has been received. We will reply soon.</p> : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
