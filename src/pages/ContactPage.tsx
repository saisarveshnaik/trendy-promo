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
            <article className="light-glass rounded-[1.6rem] p-6">
              <h1 className="text-3xl font-semibold text-slate-900">Contact Us</h1>
              <p className="mt-3 text-sm text-slate-600">Talk with our team about product sourcing, artwork support, and bulk order planning.</p>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p><span className="font-semibold">Phone:</span> +1 (877) 555-0178</p>
                <p><span className="font-semibold">Email:</span> quotes@trendypromo.com</p>
                <p><span className="font-semibold">Hours:</span> Mon - Fri, 8AM - 6PM EST</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={submit} className="light-glass rounded-[1.6rem] p-6">
              <h2 className="text-xl font-semibold text-slate-900">Send a Message</h2>
              <div className="mt-4 grid gap-3">
                <input required placeholder="Name" className="input-surface h-11 rounded-xl px-3 text-sm" />
                <input required type="email" placeholder="Work email" className="input-surface h-11 rounded-xl px-3 text-sm" />
                <input required placeholder="Company" className="input-surface h-11 rounded-xl px-3 text-sm" />
                <textarea required rows={4} placeholder="How can we help?" className="input-surface rounded-xl p-3 text-sm" />
                <button type="submit" className="cta-primary px-4 py-3 text-sm">
                  Send Message
                </button>
                {sent ? <p className="text-sm font-semibold text-emerald-600">Your message has been received. We will reply soon.</p> : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
