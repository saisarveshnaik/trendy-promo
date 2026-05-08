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
          <div className="noise-overlay relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/65 p-7 shadow-glow backdrop-blur-2xl sm:p-10">
            <div className="absolute -left-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-3xl" />
            <div className="absolute -right-10 top-10 h-36 w-36 rounded-full bg-indigo-500/25 blur-3xl" />

            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
                <Rocket className="h-3.5 w-3.5" /> Weekly Launch Intel
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-4xl">Get new product drops and deal alerts</h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
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
                  className="h-12 flex-1 rounded-xl border border-white/20 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="h-12 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 text-sm font-bold uppercase tracking-wide text-slate-950 transition hover:-translate-y-0.5"
                >
                  Subscribe
                </button>
              </form>

              {submitted ? <p className="mt-3 text-sm font-semibold text-emerald-200">Thanks. You are now subscribed.</p> : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default NewsletterSection
