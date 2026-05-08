import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  className?: string
}

const AnimatedCounter = ({ value, suffix = '', className }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const target = ref.current
    if (!target) return

    const state = { number: 0 }

    const tween = gsap.to(state, {
      number: value,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => {
        target.textContent = `${Math.round(state.number).toLocaleString()}${suffix}`
      },
    })

    return () => {
      tween.kill()
    }
  }, [suffix, value])

  return <span ref={ref} className={className} aria-label={`${value}${suffix}`} />
}

export default AnimatedCounter
