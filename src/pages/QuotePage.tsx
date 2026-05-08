import { useEffect, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, Upload } from 'lucide-react'
import { productById } from '../data/products'
import { usePageMeta } from '../hooks/usePageMeta'
import Reveal from '../components/ui/Reveal'

type QuoteFormValues = {
  name: string
  email: string
  phone: string
  company: string
  quantity: string
  notes: string
}

const initialFormValues: QuoteFormValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  quantity: '',
  notes: '',
}

const QuotePage = () => {
  const { productId } = useParams()
  const product = productId ? productById(productId) : undefined

  usePageMeta({
    title: product ? `Request Quote - ${product.name} | Trendy Promo` : 'Request Quote | Trendy Promo',
    description: 'Submit your bulk quantity and branding requirements for a custom promotional quote.',
  })

  const [form, setForm] = useState<QuoteFormValues>(initialFormValues)
  const [submitted, setSubmitted] = useState(false)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  useEffect(() => {
    return () => {
      if (logoPreview) {
        URL.revokeObjectURL(logoPreview)
      }
    }
  }, [logoPreview])

  const onLogoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (logoPreview) {
      URL.revokeObjectURL(logoPreview)
    }

    setLogoFile(file)
    setLogoPreview(URL.createObjectURL(file))
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialFormValues)
  }

  if (!product) {
    return (
      <section className="section-space">
        <div className="container-shell text-center">
          <h1 className="text-3xl font-semibold text-white">Product not found</h1>
          <p className="mt-2 text-sm text-slate-300">Please return to the catalog and choose a valid product.</p>
          <Link to="/products" className="mt-4 inline-block rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white">
            Back to products
          </Link>
        </div>
      </section>
    )
  }

  if (submitted) {
    return (
      <section className="section-space">
        <div className="container-shell max-w-3xl">
          <Reveal>
            <article className="rounded-[1.8rem] border border-emerald-200/35 bg-emerald-300/10 p-8 text-center backdrop-blur-xl">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-200" />
              <h1 className="mt-4 text-3xl font-semibold text-white">Quote Request Submitted</h1>
              <p className="mt-2 text-sm text-slate-200">
                Thanks for requesting a quote for {product.name}. Our team will respond within one business day with
                pricing tiers, imprint options, and lead time details.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link to="/products" className="rounded-xl border border-white/20 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-100">
                  Browse More Products
                </Link>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-4 py-2 text-sm font-bold text-slate-950"
                >
                  Submit Another Quote
                </button>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="section-space pt-8">
      <div className="container-shell">
        <div className="grid gap-7 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <aside className="rounded-[1.6rem] border border-white/15 bg-slate-950/60 p-5 shadow-card backdrop-blur-xl">
              <img src={product.images[0]} alt={product.name} className="h-64 w-full rounded-2xl object-cover" />
              <h1 className="mt-4 text-2xl font-semibold text-white">{product.name}</h1>
              <p className="mt-2 text-sm text-slate-300">{product.description}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">
                {product.category} - {product.subcategory}
              </p>
            </aside>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="rounded-[1.6rem] border border-white/15 bg-slate-950/60 p-6 shadow-card backdrop-blur-xl sm:p-8">
              <h2 className="text-2xl font-semibold text-white">Request Bulk Quote</h2>
              <p className="mt-2 text-sm text-slate-300">Complete this form and our quote team will send pricing, branding details, and timelines.</p>

              <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
                <label className="space-y-1 text-sm font-semibold text-slate-200">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-white/20 bg-white/[0.03] px-3 text-sm text-white"
                  />
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-200">
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-white/20 bg-white/[0.03] px-3 text-sm text-white"
                  />
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-200">
                  Phone
                  <input
                    required
                    value={form.phone}
                    onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-white/20 bg-white/[0.03] px-3 text-sm text-white"
                  />
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-200">
                  Company
                  <input
                    required
                    value={form.company}
                    onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-white/20 bg-white/[0.03] px-3 text-sm text-white"
                  />
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-200">
                  Quantity
                  <input
                    required
                    type="number"
                    min={1}
                    value={form.quantity}
                    onChange={(event) => setForm((prev) => ({ ...prev, quantity: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-white/20 bg-white/[0.03] px-3 text-sm text-white"
                  />
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-200">
                  Logo Upload
                  <span className="inline-flex h-11 w-full items-center justify-between rounded-xl border border-dashed border-white/25 bg-white/[0.03] px-3 text-sm font-medium text-slate-300">
                    <span className="truncate pr-2">{logoFile ? logoFile.name : 'Upload brand logo'}</span>
                    <Upload className="h-4 w-4" />
                    <input className="hidden" type="file" accept="image/*" onChange={onLogoChange} />
                  </span>
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-200 sm:col-span-2">
                  Notes
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
                    className="w-full rounded-xl border border-white/20 bg-white/[0.03] p-3 text-sm text-white"
                    placeholder="Imprint location, target delivery date, packaging requests, etc."
                  />
                </label>

                {logoPreview ? (
                  <div className="sm:col-span-2">
                    <p className="text-sm font-semibold text-slate-200">Logo Preview</p>
                    <img src={logoPreview} alt="Uploaded logo" className="mt-2 h-20 rounded-xl border border-white/20 bg-white p-2" />
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="sm:col-span-2 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-4 py-3 text-sm font-bold uppercase tracking-wide text-slate-950"
                >
                  Submit Quote Request
                </button>
              </form>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default QuotePage
