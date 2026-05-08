import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="surface-grid min-h-screen overflow-x-hidden bg-transparent text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh-brand" />
      <div className="pointer-events-none fixed inset-0 -z-10 noise-overlay" />
      <div className="pointer-events-none fixed -left-32 top-20 -z-10 h-72 w-72 animate-drift rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none fixed -right-32 bottom-24 -z-10 h-72 w-72 animate-drift rounded-full bg-indigo-500/20 blur-3xl [animation-delay:1.8s]" />

      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default MainLayout
