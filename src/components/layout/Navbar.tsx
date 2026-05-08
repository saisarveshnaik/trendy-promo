import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, Search, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { megaMenuGroups, navItems } from '../../data/navigation'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const mobileCategoryLinks = useMemo(
    () => megaMenuGroups.flatMap((group) => group.links.map((item) => ({ group: group.title, item }))),
    [],
  )

  const submitSearch = (event: FormEvent) => {
    event.preventDefault()
    if (!search.trim()) {
      navigate('/products')
      return
    }

    navigate(`/products?search=${encodeURIComponent(search.trim())}`)
    setMobileOpen(false)
  }

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `group relative text-sm font-semibold transition ${isActive ? 'text-blue-700' : 'text-slate-600 hover:text-blue-600'}`

  return (
    <header className="sticky top-3 z-50 px-2 sm:px-3">
      <div className="container-shell">
        <div className="neu-topbar px-4 sm:px-6">
          <div className="flex h-20 items-center gap-4">
            <Link to="/" className="shrink-0">
              <div className="inline-flex items-center gap-2">
                <span className="rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 px-2.5 py-1.5 text-sm font-extrabold text-white shadow-soft">
                  TP
                </span>
                <span className="font-heading text-lg font-semibold tracking-tight text-slate-800 sm:text-xl">
                  Trendy Promo
                </span>
              </div>
            </Link>

            <div className="hidden flex-1 items-center justify-between gap-5 xl:flex">
              <nav className="flex items-center gap-5" aria-label="Primary navigation">
                {navItems.map((item) => (
                  <NavLink key={item.path} to={item.path} className={navLinkStyles}>
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                ))}

                <button
                  type="button"
                  className={`neu-chip inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 ${megaOpen ? 'neu-pressed' : ''}`}
                  onClick={() => setMegaOpen((open) => !open)}
                >
                  All Products
                  <ChevronDown className={`h-4 w-4 transition ${megaOpen ? 'rotate-180' : ''}`} />
                </button>
              </nav>

              <form
                onSubmit={submitSearch}
                className="neu-pill-inset flex min-w-[17rem] items-center gap-2 rounded-full px-3 py-2"
              >
                <Search className="h-4 w-4 text-slate-500" />
                <input
                  type="search"
                  placeholder="Search products"
                  className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </form>

              <Link
                to="/products"
                className="cta-primary rounded-full px-5 py-2.5 text-sm"
              >
                Request Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <button
              type="button"
              className={`neu-chip ml-auto inline-flex rounded-xl p-2 text-slate-700 xl:hidden ${mobileOpen ? 'neu-pressed' : ''}`}
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {megaOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close all products menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-[55] hidden bg-transparent xl:block"
              onClick={() => setMegaOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-[6.25rem] z-[60] hidden px-3 xl:block"
            >
              <div className="container-shell">
                <div className="neu-menu-panel fancy-scrollbar max-h-[70vh] overflow-auto rounded-3xl p-6">
                  <p className="mb-4 text-sm font-semibold text-slate-600">Browse product families</p>
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    {megaMenuGroups.map((group) => (
                      <div key={group.title}>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{group.title}</p>
                        <div className="space-y-2">
                          {group.links.map((link) => (
                            <Link
                              key={link}
                              className="block text-sm text-slate-600 transition hover:text-blue-600"
                              to={`/products?category=${encodeURIComponent(group.title)}&search=${encodeURIComponent(link)}`}
                              onClick={() => setMegaOpen(false)}
                            >
                              {link}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 px-4 pb-8 pt-24 backdrop-blur-xl xl:hidden"
          >
            <div className="neu-menu-panel mx-auto max-w-2xl rounded-3xl p-5">
              <form onSubmit={submitSearch} className="neu-pill-inset mb-4 flex items-center gap-2 rounded-xl px-3 py-2">
                <Search className="h-4 w-4 text-slate-500" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products"
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-500"
                />
              </form>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="block rounded-xl px-3 py-2 text-base font-semibold text-slate-700 transition hover:bg-slate-100/70"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="neu-pill-inset mt-4 rounded-2xl p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">All Products</p>
                <div className="grid grid-cols-2 gap-2">
                  {mobileCategoryLinks.map((entry) => (
                    <Link
                      key={`${entry.group}-${entry.item}`}
                      to={`/products?category=${encodeURIComponent(entry.group)}&search=${encodeURIComponent(entry.item)}`}
                      onClick={() => setMobileOpen(false)}
                      className="neu-chip rounded-lg px-2 py-2 text-xs font-semibold text-slate-700"
                    >
                      {entry.item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
