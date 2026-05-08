import { useEffect, useMemo, useState } from 'react'
import type { ChangeEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Upload, CheckCircle2, Sparkles } from 'lucide-react'
import { productById, productCatalog } from '../data/products'
import { usePageMeta } from '../hooks/usePageMeta'
import { formatCurrency } from '../utils/format'
import ProductCard from '../components/ui/ProductCard'
import Reveal from '../components/ui/Reveal'

const ProductDetailsPage = () => {
  const { productId } = useParams()
  const product = productId ? productById(productId) : undefined

  usePageMeta({
    title: product ? `${product.name} | Trendy Promo` : 'Product Not Found | Trendy Promo',
    description:
      product?.description ?? 'Browse customizable promotional products with detailed imprint and pricing info.',
  })

  const [selectedImage, setSelectedImage] = useState(product?.images[0] ?? '')
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  useEffect(() => {
    setSelectedImage(product?.images[0] ?? '')
  }, [product])

  useEffect(() => {
    return () => {
      if (logoPreview) {
        URL.revokeObjectURL(logoPreview)
      }
    }
  }, [logoPreview])

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return productCatalog
      .filter((item) => item.category === product.category && item.id !== product.id)
      .slice(0, 4)
  }, [product])

  const onLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (logoPreview) {
      URL.revokeObjectURL(logoPreview)
    }

    setLogoPreview(URL.createObjectURL(file))
  }

  if (!product) {
    return (
      <section className="section-space">
        <div className="container-shell text-center">
          <h1 className="text-3xl font-semibold text-white">Product not found</h1>
          <Link to="/products" className="mt-4 inline-block rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white">
            Return to Products
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section-space pt-8">
      <div className="container-shell space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div>
              <div className="relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-slate-950/65">
                <img src={selectedImage} alt={product.name} className="h-[380px] w-full object-cover sm:h-[500px]" />
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Uploaded logo preview"
                    className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/35 bg-white/90 object-contain p-2 shadow-xl"
                  />
                ) : null}
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {product.images.map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`overflow-hidden rounded-2xl border ${selectedImage === image ? 'border-cyan-300/70' : 'border-white/15'}`}
                  >
                    <img src={image} alt={`${product.name} preview`} className="h-24 w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="rounded-[1.7rem] border border-white/15 bg-slate-950/60 p-6 shadow-card backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
                {product.category} - {product.subcategory}
              </p>
              <h1 className="mt-2 text-4xl font-semibold text-white">{product.name}</h1>
              <p className="mt-3 text-sm text-slate-300">{product.description}</p>
              <p className="mt-4 text-xl font-semibold text-cyan-200">From {formatCurrency(product.priceFrom)}</p>

              <div className="mt-6 rounded-2xl border border-cyan-200/25 bg-cyan-200/10 p-4">
                <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">Imprint Charges</h2>
                <dl className="mt-3 grid gap-2 text-sm text-slate-200">
                  <div className="flex justify-between gap-3">
                    <dt className="font-semibold">Setup Charge</dt>
                    <dd>{product.imprint.setupCharge}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-semibold">Run Charge</dt>
                    <dd>{product.imprint.runCharge}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="font-semibold">Printing Methods</dt>
                    <dd>{product.imprint.printingMethods.join(', ')}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 space-y-2 text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-4 border-b border-white/10 py-2">
                    <span className="font-semibold text-slate-200">{key}</span>
                    <span className="text-slate-300">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-300/60">
                  <Upload className="h-4 w-4" /> Upload Logo
                  <input type="file" className="hidden" accept="image/*" onChange={onLogoUpload} />
                </label>
                <Link
                  to={`/quote/${product.id}`}
                  className="rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-2.5 text-sm font-bold text-slate-950"
                >
                  Request Quote
                </Link>
              </div>
              {logoPreview ? (
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200">
                  <CheckCircle2 className="h-4 w-4" /> Logo preview added successfully.
                </p>
              ) : null}
            </article>
          </Reveal>
        </div>

        <Reveal>
          <section className="rounded-[1.7rem] border border-white/15 bg-slate-950/60 p-6 shadow-card backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">Quantity Pricing</h2>
            <div className="mt-4 overflow-x-auto fancy-scrollbar">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-white/[0.05] text-left">
                    <th className="px-4 py-3 font-semibold text-slate-200">Quantity</th>
                    <th className="px-4 py-3 font-semibold text-slate-200">Price Per Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {product.pricingTiers.map((tier) => (
                    <tr key={tier.qty} className="border-t border-white/10">
                      <td className="px-4 py-3 font-semibold text-slate-200">{tier.qty}</td>
                      <td className="px-4 py-3 text-slate-300">{formatCurrency(tier.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-[1.7rem] border border-white/15 bg-slate-950/60 p-6 shadow-card backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">Customization Preview</h2>
            <p className="mt-2 text-sm text-slate-300">
              Upload your logo to view a placement simulation before requesting your quote.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold text-slate-200">Mockup Preview</p>
                <div className="relative mt-3 overflow-hidden rounded-xl">
                  <img src={selectedImage} alt="Mockup base" className="h-56 w-full object-cover" />
                  {logoPreview ? (
                    <img src={logoPreview} alt="Logo on mockup" className="absolute left-8 top-8 h-20 w-20 rounded-md bg-white/95 p-1 object-contain" />
                  ) : (
                    <div className="absolute left-8 top-8 rounded-md border border-white/60 bg-slate-950/45 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      Your Logo
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-200/25 bg-cyan-200/10 p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                  <Sparkles className="h-4 w-4" /> Ready for a quote?
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  If your logo looks right, continue to quote request and share volume, timeline, and packaging notes.
                </p>
                <Link
                  to={`/quote/${product.id}`}
                  className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-2.5 text-sm font-bold text-slate-950"
                >
                  Continue to Quote
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {relatedProducts.length ? (
          <section>
            <h2 className="text-2xl font-semibold text-white">Related Products</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  )
}

export default ProductDetailsPage
