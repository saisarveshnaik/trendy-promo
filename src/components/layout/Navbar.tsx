import { Link, useNavigate } from 'react-router-dom'
import { Menu, Search, X, ChevronDown, ArrowUpRight, User, Heart, ShoppingCart } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { megaMenuGroups } from '../../data/navigation'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const submitSearch = (event: FormEvent) => {
    event.preventDefault()
    if (!search.trim()) {
      navigate('/products')
      return
    }

    navigate(`/products?search=${encodeURIComponent(search.trim())}`)
    setSearch('')
  }

  const categoryItems = [
    { label: 'Deals', megaMenu: null },
    ...megaMenuGroups.map((group) => ({ label: group.title, megaMenu: group })),
  ]

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Navigation Bar */}
      <div className="border-b border-slate-200">
        <div className="container-shell px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <div className="inline-flex items-center gap-2">
                <span className="rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 px-2.5 py-1.5 text-xs font-extrabold text-white shadow-soft sm:text-sm">
                  TP
                </span>
                <span className="font-heading text-base font-semibold tracking-tight text-slate-800 sm:text-lg">
                  Trendy Promo
                </span>
              </div>
            </Link>

            {/* Search Bar - Hidden on Mobile */}
            <form
              onSubmit={submitSearch}
              className="hidden flex-1 mx-4 lg:flex items-center max-w-md"
            >
              <div className="neu-pill-inset flex w-full items-center gap-2 rounded-full px-4 py-2">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search products"
                  className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </form>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search Icon for Mobile */}
              <button
                type="button"
                className="lg:hidden neu-chip rounded-full p-2 text-slate-700"
                onClick={() => navigate('/products')}
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Help, Sign In, Favorites, Cart - Hidden on Small Mobile */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  type="button"
                  className="neu-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-700 transition hover:-translate-y-0.5"
                  title="Help"
                >
                  <span className="text-xs font-semibold">Help is here</span>
                </button>

                <button
                  type="button"
                  className="neu-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-700 transition hover:-translate-y-0.5"
                  title="Sign In"
                >
                  <User className="h-4 w-4" />
                  <span className="text-xs font-semibold">Sign in</span>
                </button>

                <button
                  type="button"
                  className="neu-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-700 transition hover:-translate-y-0.5"
                  title="My Favorites"
                >
                  <Heart className="h-4 w-4" />
                  <span className="text-xs font-semibold">My Favorites</span>
                </button>

                <button
                  type="button"
                  className="neu-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-700 transition hover:-translate-y-0.5"
                  title="Cart"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="text-xs font-semibold">Cart</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className={`neu-chip lg:hidden inline-flex rounded-full p-2 text-slate-700 transition ${mobileOpen ? 'neu-pressed' : ''}`}
                onClick={() => setMobileOpen((open) => !open)}
                aria-expanded={mobileOpen}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation Bar - Desktop */}
      <div className="hidden lg:block border-b border-slate-100">
        <div className="container-shell px-4 sm:px-6">
          <nav className="flex items-center gap-1" aria-label="Product categories">
            {categoryItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className={`relative inline-flex items-center gap-1 px-3 py-3 text-sm font-semibold transition ${
                    item.label === 'Deals'
                      ? 'text-red-600 hover:text-red-700'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown className="h-3.5 w-3.5" />}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
                </button>

                {/* Mega Menu */}
                {item.megaMenu && (
                  <div className="absolute left-0 top-full hidden group-hover:block pt-2">
                    <div className="neu-menu-panel rounded-2xl p-6 min-w-[18rem] shadow-lg">
                      <div className="space-y-4">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600 mb-3">
                          {item.megaMenu.title}
                        </p>
                        <div className="space-y-2">
                          {item.megaMenu.links.map((link) => (
                            <Link
                              key={link}
                              className="block text-sm text-slate-600 transition hover:text-blue-600 hover:pl-1"
                              to={`/products?category=${encodeURIComponent(item.megaMenu.title)}&search=${encodeURIComponent(link)}`}
                            >
                              {link}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-100 bg-white"
          >
            <div className="container-shell px-4 sm:px-6 py-4">
              {/* Mobile Search */}
              <form onSubmit={submitSearch} className="mb-4 flex items-center">
                <div className="neu-pill-inset flex w-full items-center gap-2 rounded-full px-3 py-2">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search products"
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-500"
                  />
                </div>
              </form>

              {/* Mobile Account Links */}
              <div className="flex gap-2 mb-4 pb-4 border-b border-slate-100">
                <button className="neu-chip flex-1 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 inline-flex items-center justify-center gap-1">
                  <User className="h-4 w-4" /> Sign In
                </button>
                <button className="neu-chip flex-1 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 inline-flex items-center justify-center gap-1">
                  <ShoppingCart className="h-4 w-4" /> Cart
                </button>
              </div>

              {/* Mobile Categories */}
              <nav className="space-y-1">
                {categoryItems.map((item) => (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setOpenMegaMenu(openMegaMenu === item.label ? null : item.label)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-lg transition ${
                        item.label === 'Deals'
                          ? 'text-red-600 hover:bg-red-50'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                      {item.megaMenu && (
                        <ChevronDown
                          className={`h-4 w-4 transition ${openMegaMenu === item.label ? 'rotate-180' : ''}`}
                        />
                      )}
                    </button>

                    {/* Mobile Mega Menu */}
                    {item.megaMenu && openMegaMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-3 border-l-2 border-slate-200 pl-3 py-2 space-y-1"
                      >
                        {item.megaMenu.links.map((link) => (
                          <Link
                            key={link}
                            to={`/products?category=${encodeURIComponent(item.megaMenu.title)}&search=${encodeURIComponent(link)}`}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-1.5 text-sm text-slate-600 rounded-lg hover:bg-slate-100 transition"
                          >
                            {link}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <Link
                to="/products"
                className="cta-primary mt-4 rounded-full px-5 py-2.5 text-sm inline-flex items-center gap-2 w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Explore Products <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
