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
    <div className="ambient-layout min-h-screen overflow-x-hidden bg-transparent text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh-brand" />
      <div className="pointer-events-none fixed -left-36 top-16 -z-10 h-80 w-80 animate-drift rounded-full bg-cyan-300/30 blur-[90px]" />
      <div className="pointer-events-none fixed right-0 top-24 -z-10 h-72 w-72 animate-float rounded-full bg-indigo-300/26 blur-[90px]" />
      <div className="pointer-events-none fixed -right-20 bottom-20 -z-10 h-80 w-80 animate-parallax rounded-full bg-orange-200/28 blur-[100px]" />

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
