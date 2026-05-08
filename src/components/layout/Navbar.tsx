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
    `group relative text-sm font-semibold transition ${isActive ? 'text-cyan-200' : 'text-slate-200 hover:text-cyan-100'}`

  return (
    <header className="sticky top-3 z-50 px-2 sm:px-3">
      <div className="container-shell">
        <div className="rounded-2xl border border-white/15 bg-slate-950/60 px-4 backdrop-blur-2xl shadow-glass sm:px-6">
          <div className="flex h-20 items-center gap-4">
            <Link to="/" className="shrink-0">
              <div className="inline-flex items-center gap-2">
                <span className="rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 px-2.5 py-1.5 text-sm font-extrabold text-slate-950">
                  TP
                </span>
                <span className="font-['Outfit'] text-lg font-semibold tracking-tight text-white sm:text-xl">
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
                          className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 transition-all ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                ))}

                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/[0.03] px-3 py-1.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/40"
                  onClick={() => setMegaOpen((open) => !open)}
                >
                  All Products
                  <ChevronDown className={`h-4 w-4 transition ${megaOpen ? 'rotate-180' : ''}`} />
                </button>
              </nav>

              <form
                onSubmit={submitSearch}
                className="flex min-w-[17rem] items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-3 py-2"
              >
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search products"
                  className="w-full border-0 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </form>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5"
              >
                Request Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <button
              type="button"
              className="ml-auto inline-flex rounded-xl border border-white/20 bg-white/[0.03] p-2 text-slate-200 xl:hidden"
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
                <div className="noise-overlay fancy-scrollbar max-h-[70vh] overflow-auto rounded-3xl border border-white/20 bg-slate-950/95 p-6 shadow-2xl">
                  <p className="mb-4 text-sm font-semibold text-slate-300">Browse product families</p>
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    {megaMenuGroups.map((group) => (
                      <div key={group.title}>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">{group.title}</p>
                        <div className="space-y-2">
                          {group.links.map((link) => (
                            <Link
                              key={link}
                              className="block text-sm text-slate-300 transition hover:text-cyan-100"
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
            className="fixed inset-0 z-40 bg-slate-950/96 px-4 pb-8 pt-24 xl:hidden"
          >
            <div className="mx-auto max-w-2xl rounded-3xl border border-white/15 bg-white/[0.03] p-5 backdrop-blur-2xl">
              <form onSubmit={submitSearch} className="mb-4 flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </form>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="block rounded-xl px-3 py-2 text-base font-semibold text-slate-100 hover:bg-white/[0.06]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-4 rounded-2xl border border-white/15 bg-slate-900/50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">All Products</p>
                <div className="grid grid-cols-2 gap-2">
                  {mobileCategoryLinks.map((entry) => (
                    <Link
                      key={`${entry.group}-${entry.item}`}
                      to={`/products?category=${encodeURIComponent(entry.group)}&search=${encodeURIComponent(entry.item)}`}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg border border-white/15 bg-white/[0.03] px-2 py-2 text-xs font-semibold text-slate-200"
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
