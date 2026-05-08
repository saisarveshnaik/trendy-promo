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
          <h1 className="text-3xl font-semibold text-slate-900">Product not found</h1>
          <p className="mt-2 text-sm text-slate-600">Please return to the catalog and choose a valid product.</p>
          <Link to="/products" className="cta-secondary mt-4 inline-block px-4 py-2 text-sm">
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
            <article className="light-panel rounded-[1.8rem] border border-emerald-300/45 bg-emerald-100/70 p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
              <h1 className="mt-4 text-3xl font-semibold text-slate-900">Quote Request Submitted</h1>
              <p className="mt-2 text-sm text-slate-700">
                Thanks for requesting a quote for {product.name}. Our team will respond within one business day with
                pricing tiers, imprint options, and lead time details.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link to="/products" className="cta-secondary px-4 py-2 text-sm">
                  Browse More Products
                </Link>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="cta-primary px-4 py-2 text-sm"
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
            <aside className="light-glass rounded-[1.6rem] p-5">
              <img src={product.images[0]} alt={product.name} className="h-64 w-full rounded-2xl object-cover" />
              <h1 className="mt-4 text-2xl font-semibold text-slate-900">{product.name}</h1>
              <p className="mt-2 text-sm text-slate-600">{product.description}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                {product.category} - {product.subcategory}
              </p>
            </aside>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="light-glass rounded-[1.6rem] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-900">Request Bulk Quote</h2>
              <p className="mt-2 text-sm text-slate-600">Complete this form and our quote team will send pricing, branding details, and timelines.</p>

              <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
                <label className="space-y-1 text-sm font-semibold text-slate-700">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    className="input-surface h-11 w-full rounded-xl px-3 text-sm"
                  />
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-700">
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    className="input-surface h-11 w-full rounded-xl px-3 text-sm"
                  />
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-700">
                  Phone
                  <input
                    required
                    value={form.phone}
                    onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                    className="input-surface h-11 w-full rounded-xl px-3 text-sm"
                  />
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-700">
                  Company
                  <input
                    required
                    value={form.company}
                    onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
                    className="input-surface h-11 w-full rounded-xl px-3 text-sm"
                  />
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-700">
                  Quantity
                  <input
                    required
                    type="number"
                    min={1}
                    value={form.quantity}
                    onChange={(event) => setForm((prev) => ({ ...prev, quantity: event.target.value }))}
                    className="input-surface h-11 w-full rounded-xl px-3 text-sm"
                  />
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-700">
                  Logo Upload
                  <span className="input-surface inline-flex h-11 w-full items-center justify-between rounded-xl border border-dashed px-3 text-sm font-medium text-slate-600">
                    <span className="truncate pr-2">{logoFile ? logoFile.name : 'Upload brand logo'}</span>
                    <Upload className="h-4 w-4" />
                    <input className="hidden" type="file" accept="image/*" onChange={onLogoChange} />
                  </span>
                </label>

                <label className="space-y-1 text-sm font-semibold text-slate-700 sm:col-span-2">
                  Notes
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
                    className="input-surface w-full rounded-xl p-3 text-sm"
                    placeholder="Imprint location, target delivery date, packaging requests, etc."
                  />
                </label>

                {logoPreview ? (
                  <div className="sm:col-span-2">
                    <p className="text-sm font-semibold text-slate-700">Logo Preview</p>
                    <img src={logoPreview} alt="Uploaded logo" className="light-panel mt-2 h-20 rounded-xl p-2" />
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="cta-primary sm:col-span-2 px-4 py-3 text-sm uppercase tracking-wide"
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
