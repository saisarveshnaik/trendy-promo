import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

const FloatingMesh = ({
  position,
  color,
  speed,
  scale,
}: {
  position: [number, number, number]
  color: string
  speed: number
  scale: number
}) => {
  const ref = useRef<Mesh | null>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() * speed
    ref.current.position.y = position[1] + Math.sin(t) * 0.22
    ref.current.rotation.x = t * 0.28
    ref.current.rotation.y = t * 0.36
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial color={color} metalness={0.42} roughness={0.18} transparent opacity={0.82} />
    </mesh>
  )
}

const AmbientOrbScene = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 40 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.15} />
        <directionalLight intensity={1.7} position={[2, 3, 4]} />
        <pointLight intensity={1.2} position={[-2, -1, 4]} color="#86b5ff" />
        <pointLight intensity={0.9} position={[2, -2, 2]} color="#ffcfa8" />

        <FloatingMesh position={[-1.9, 0.8, 0]} color="#9bc5ff" speed={0.9} scale={0.85} />
        <FloatingMesh position={[1.8, -0.1, -0.6]} color="#ffc9b4" speed={0.72} scale={0.95} />
        <FloatingMesh position={[0.1, -1.3, 0.5]} color="#cbb7ff" speed={0.6} scale={0.68} />

        <mesh rotation={[0.8, 0.25, 0]} position={[0, -2.2, -0.8]}>
          <torusGeometry args={[2.4, 0.1, 18, 80]} />
          <meshStandardMaterial color="#89b5ff" transparent opacity={0.28} metalness={0.5} roughness={0.24} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default AmbientOrbScene
