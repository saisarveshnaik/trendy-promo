import type { HTMLAttributes, MouseEvent, PropsWithChildren } from 'react'
import { useRef } from 'react'

type TiltCardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    maxTilt?: number
    perspective?: number
    scale?: number
  }
>

const TiltCard = ({
  children,
  className,
  maxTilt = 9,
  perspective = 900,
  scale = 1.015,
  ...props
}: TiltCardProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null)

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const target = elementRef.current
    if (!target) return

    const rect = target.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    const rotateY = (x - 0.5) * maxTilt * 2
    const rotateX = (0.5 - y) * maxTilt * 2

    target.style.transform = `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`
  }

  const onLeave = () => {
    const target = elementRef.current
    if (!target) return
    target.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`
  }

  return (
    <div
      ref={elementRef}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 220ms cubic-bezier(.22,1,.36,1)' }}
      {...props}
    >
      {children}
    </div>
  )
}

export default TiltCard
