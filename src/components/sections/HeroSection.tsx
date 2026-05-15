import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Reveal from '../ui/Reveal'
import bannerOne from '../../assets/hero-banner-1.jpeg'
import bannerTwo from '../../assets/hero-banner-2.jpeg'

const HeroSection = () => {
  const banners = [
    { src: bannerOne, alt: 'Promotional smart watch offer banner' },
    { src: bannerTwo, alt: 'Promotional running shoes offer banner' },
  ]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [banners.length])

  const goToPrevious = () => {
    setActiveSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % banners.length)
  }

  return (
    <section className="section-space relative overflow-hidden pt-12">
      <div className="container-shell">
        <div className="light-glass relative overflow-hidden rounded-[2.2rem] p-0">
          <div className="relative min-h-[12rem] overflow-hidden sm:min-h-[14rem]">
            <AnimatePresence mode="wait">
              <motion.img
                key={banners[activeSlide].src}
                src={banners[activeSlide].src}
                alt={banners[activeSlide].alt}
                initial={{ opacity: 0.35, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.35, scale: 1.02 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="eager"
              />
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/72 via-slate-900/46 to-slate-900/26" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/28" />

            <div className="absolute inset-y-0 left-0 z-20 hidden items-center pl-4 sm:flex">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous banner"
                className="neu-chip h-11 w-11 rounded-full text-slate-700 transition hover:-translate-y-0.5"
              >
                <ChevronLeft className="mx-auto h-5 w-5" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 z-20 hidden items-center pr-4 sm:flex">
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next banner"
                className="neu-chip h-11 w-11 rounded-full text-slate-700 transition hover:-translate-y-0.5"
              >
                <ChevronRight className="mx-auto h-5 w-5" />
              </button>
            </div>

            <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {banners.map((banner, index) => (
                <button
                  key={banner.src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to banner ${index + 1}`}
                  aria-current={activeSlide === index}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index
                      ? 'w-8 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_4px_10px_rgba(15,23,42,0.4)]'
                      : 'w-2.5 bg-white/55 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            <div className="relative z-10 px-6 py-4 sm:px-10 sm:py-6 lg:px-14 lg:py-8">
              <Reveal className="space-y-6" y={28}>
              <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Promotional Products
                <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
                  {' '}
                  Reimagined for Modern B2B Buying
                </span>
              </h1>

              <div className="flex flex-wrap gap-3">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/products" className="cta-primary rounded-full px-6 py-3">
                    Explore Products <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/24-hour-rush" className="cta-secondary rounded-full px-6 py-3">
                    View 24 Hour Rush
                  </Link>
                </motion.div>
              </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
