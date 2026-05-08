import type { ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from 'react'
import { useRef } from 'react'

type MagneticButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

const MagneticButton = ({ children, className, ...props }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement | null>(null)

  const onMove = (event: MouseEvent<HTMLButtonElement>) => {
    const button = ref.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = event.clientX - (rect.left + rect.width / 2)
    const y = event.clientY - (rect.top + rect.height / 2)

    button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  }

  const onLeave = () => {
    const button = ref.current
    if (!button) return
    button.style.transform = 'translate(0px, 0px)'
  }

  return (
    <button
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 200ms cubic-bezier(.22,1,.36,1)' }}
      {...props}
    >
      {children}
    </button>
  )
}

export default MagneticButton
