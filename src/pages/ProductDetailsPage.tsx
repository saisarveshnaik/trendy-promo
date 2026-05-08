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

  const activeImage = product && product.images.includes(selectedImage) ? selectedImage : (product?.images[0] ?? '')

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
          <h1 className="text-3xl font-semibold text-slate-900">Product not found</h1>
          <Link to="/products" className="cta-secondary mt-4 inline-block px-4 py-2 text-sm">
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
              <div className="light-glass relative overflow-hidden rounded-[1.7rem]">
                <img src={activeImage} alt={product.name} className="h-[380px] w-full object-cover sm:h-[500px]" />
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Uploaded logo preview"
                    className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/65 bg-white/90 object-contain p-2 shadow-xl"
                  />
                ) : null}
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {product.images.map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`light-panel overflow-hidden rounded-2xl transition ${activeImage === image ? 'ring-2 ring-blue-400/55' : ''}`}
                  >
                    <img src={image} alt={`${product.name} preview`} className="h-24 w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="light-glass rounded-[1.7rem] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                {product.category} - {product.subcategory}
              </p>
              <h1 className="mt-2 text-4xl font-semibold text-slate-900">{product.name}</h1>
              <p className="mt-3 text-sm text-slate-600">{product.description}</p>
              <p className="mt-4 text-xl font-semibold text-blue-700">From {formatCurrency(product.priceFrom)}</p>

              <div className="neu-highlight mt-6 rounded-2xl p-4">
                <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Imprint Charges</h2>
                <dl className="mt-3 grid gap-2 text-sm text-slate-700">
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
                  <div key={key} className="flex justify-between gap-4 border-b border-slate-300/45 py-2">
                    <span className="font-semibold text-slate-700">{key}</span>
                    <span className="text-slate-600">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <label className="cta-secondary inline-flex cursor-pointer px-4 py-2 text-sm">
                  <Upload className="h-4 w-4" /> Upload Logo
                  <input type="file" className="hidden" accept="image/*" onChange={onLogoUpload} />
                </label>
                <Link
                  to={`/quote/${product.id}`}
                  className="cta-primary px-5 py-2.5 text-sm"
                >
                  Request Quote
                </Link>
              </div>
              {logoPreview ? (
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" /> Logo preview added successfully.
                </p>
              ) : null}
            </article>
          </Reveal>
        </div>

        <Reveal>
          <section className="light-glass rounded-[1.7rem] p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Quantity Pricing</h2>
            <div className="mt-4 overflow-x-auto fancy-scrollbar">
              <table className="neu-table min-w-full border-collapse text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-3 font-semibold text-slate-700">Quantity</th>
                    <th className="px-4 py-3 font-semibold text-slate-700">Price Per Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {product.pricingTiers.map((tier) => (
                    <tr key={tier.qty}>
                      <td className="px-4 py-3 font-semibold text-slate-700">{tier.qty}</td>
                      <td className="px-4 py-3 text-slate-600">{formatCurrency(tier.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="light-glass rounded-[1.7rem] p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Customization Preview</h2>
            <p className="mt-2 text-sm text-slate-600">
              Upload your logo to view a placement simulation before requesting your quote.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="light-panel rounded-2xl p-4">
                <p className="text-sm font-semibold text-slate-700">Mockup Preview</p>
                <div className="relative mt-3 overflow-hidden rounded-xl">
                  <img src={activeImage} alt="Mockup base" className="h-56 w-full object-cover" />
                  {logoPreview ? (
                    <img src={logoPreview} alt="Logo on mockup" className="absolute left-8 top-8 h-20 w-20 rounded-md bg-white/95 p-1 object-contain" />
                  ) : (
                    <div className="neu-chip absolute left-8 top-8 rounded-md px-2 py-1 text-xs font-bold uppercase tracking-wide text-slate-700">
                      Your Logo
                    </div>
                  )}
                </div>
              </div>

              <div className="neu-highlight rounded-2xl p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
                  <Sparkles className="h-4 w-4" /> Ready for a quote?
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  If your logo looks right, continue to quote request and share volume, timeline, and packaging notes.
                </p>
                <Link
                  to={`/quote/${product.id}`}
                  className="cta-primary mt-5 inline-flex px-5 py-2.5 text-sm"
                >
                  Continue to Quote
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {relatedProducts.length ? (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Related Products</h2>
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
