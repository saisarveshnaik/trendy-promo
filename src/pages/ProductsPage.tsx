import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Filter, Search, SlidersHorizontal, Sparkles } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ui/ProductCard'
import Pagination from '../components/ui/Pagination'
import SectionHeading from '../components/ui/SectionHeading'
import SkeletonCard from '../components/ui/SkeletonCard'
import Reveal from '../components/ui/Reveal'
import { categories, productCatalog } from '../data/products'
import { usePageMeta } from '../hooks/usePageMeta'

const PRODUCTS_PER_PAGE = 8

const ProductsPage = () => {
  usePageMeta({
    title: 'All Products | Trendy Promo',
    description: 'Browse all customizable promotional products and request fast bulk quotes.',
  })

  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [draftSearch, setDraftSearch] = useState(searchParams.get('search') ?? '')

  const categoryFilter = searchParams.get('category') ?? 'All'
  const sortFilter = searchParams.get('sort') ?? 'featured'
  const searchTerm = searchParams.get('search') ?? ''
  const page = Number(searchParams.get('page') ?? '1')

  const categoryOptions = ['All', ...categories]

  useEffect(() => {
    setDraftSearch(searchTerm)
  }, [searchTerm])

  const filteredProducts = useMemo(() => {
    const query = searchTerm.toLowerCase().trim()

    const byCategory = productCatalog.filter((product) => {
      if (categoryFilter === 'All') {
        return true
      }
      return product.category === categoryFilter
    })

    const bySearch = byCategory.filter((product) => {
      if (!query) return true
      return [product.name, product.description, product.subcategory, product.category]
        .join(' ')
        .toLowerCase()
        .includes(query)
    })

    return [...bySearch].sort((a, b) => {
      if (sortFilter === 'price-asc') return a.priceFrom - b.priceFrom
      if (sortFilter === 'price-desc') return b.priceFrom - a.priceFrom
      if (sortFilter === 'name-asc') return a.name.localeCompare(b.name)
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured))
    })
  }, [categoryFilter, searchTerm, sortFilter])

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE))
  const currentPage = Math.min(Math.max(page, 1), totalPages)

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  )

  useEffect(() => {
    setLoading(true)
    const timer = window.setTimeout(() => setLoading(false), 320)
    return () => window.clearTimeout(timer)
  }, [categoryFilter, sortFilter, searchTerm, currentPage])

  const updateParams = (updates: Record<string, string>) => {
    const next = new URLSearchParams(searchParams)

    Object.entries(updates).forEach(([key, value]) => {
      if (!value) {
        next.delete(key)
      } else {
        next.set(key, value)
      }
    })

    setSearchParams(next)
  }

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault()
    updateParams({ search: draftSearch.trim(), page: '1' })
  }

  return (
    <section className="section-space pt-8">
      <div className="container-shell">
        <SectionHeading
          kicker="Catalog"
          title="All Promotional Products"
          description="Filter by category, compare pricing tiers, and customize products before requesting your quote."
        />

        <Reveal className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-50">
          <p className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Explore premium merchandise with live filtering, instant search, and fast quote pathways.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
          <Reveal>
            <aside className="h-fit rounded-[1.6rem] border border-white/15 bg-slate-950/55 p-5 shadow-card backdrop-blur-xl">
              <h3 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                <Filter className="h-4 w-4" /> Filters
              </h3>

              <div className="mt-4 space-y-2">
                {categoryOptions.map((category) => {
                  const isActive = categoryFilter === category
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => updateParams({ category, page: '1' })}
                      className={`w-full rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-300 to-blue-500 text-slate-950'
                          : 'border border-white/10 bg-white/[0.03] text-slate-200 hover:border-cyan-300/50'
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </aside>
          </Reveal>

          <div>
            <Reveal className="mb-5 flex flex-col gap-3 rounded-2xl border border-white/15 bg-slate-950/55 p-4 shadow-card backdrop-blur-xl md:flex-row md:items-center md:justify-between">
              <form
                onSubmit={handleSearchSubmit}
                className="flex w-full items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 md:max-w-sm"
              >
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  value={draftSearch}
                  onChange={(event) => setDraftSearch(event.target.value)}
                  placeholder="Search by product, category, feature"
                  className="w-full border-0 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </form>

              <div className="inline-flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-slate-300" />
                <label className="sr-only" htmlFor="sort-products">
                  Sort products
                </label>
                <select
                  id="sort-products"
                  value={sortFilter}
                  onChange={(event) => updateParams({ sort: event.target.value, page: '1' })}
                  className="rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-slate-100"
                >
                  <option value="featured">Featured first</option>
                  <option value="price-asc">Price: low to high</option>
                  <option value="price-desc">Price: high to low</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>
            </Reveal>

            {loading ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            ) : paginatedProducts.length ? (
              <>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(newPage) => updateParams({ page: String(newPage) })}
                  />
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/25 bg-slate-950/50 p-8 text-center">
                <p className="text-sm text-slate-300">No products found for your current filters.</p>
                <button
                  type="button"
                  onClick={() => setSearchParams({ category: 'All', sort: 'featured' })}
                  className="mt-4 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-4 py-2 text-sm font-bold text-slate-950"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsPage
