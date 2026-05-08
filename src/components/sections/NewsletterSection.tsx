import { useState } from 'react'
import type { FormEvent } from 'react'
import { Rocket } from 'lucide-react'
import Reveal from '../ui/Reveal'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal>
          <div className="light-glass relative overflow-hidden rounded-[2rem] p-7 shadow-glow sm:p-10">
            <div className="absolute -left-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-cyan-300/40 blur-3xl" />
            <div className="absolute -right-10 top-10 h-36 w-36 rounded-full bg-indigo-300/40 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/55 to-indigo-50/70" />

            <div className="relative">
              <p className="soft-kicker">
                <Rocket className="h-3.5 w-3.5" /> Weekly Launch Intel
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-4xl">Get new product drops and deal alerts</h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                Stay ahead of seasonality with curated merch picks, rush-ship recommendations, and campaign-ready ideas.
              </p>

              <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your work email"
                  className="input-surface h-12 flex-1 rounded-xl px-4 text-sm outline-none"
                />
                <button type="submit" className="cta-primary h-12 px-6 uppercase tracking-wide">
                  Subscribe
                </button>
              </form>

              {submitted ? <p className="mt-3 text-sm font-semibold text-emerald-600">Thanks. You are now subscribed.</p> : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default NewsletterSection
