import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '@/context/ThemeContext'

function MainTechSphere({ theme }: { theme: 'light' | 'dark' }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.25
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
  })

  // Vibrant gradient colors matching theme
  const mainColor = theme === 'dark' ? '#818cf8' : '#4f46e5'
  const emissiveColor = theme === 'dark' ? '#4338ca' : '#6366f1'

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.8}>
      <mesh ref={meshRef} scale={1.5}>
        <octahedronGeometry args={[1.1, 2]} />
        <MeshDistortMaterial
          color={mainColor}
          emissive={emissiveColor}
          emissiveIntensity={theme === 'dark' ? 0.4 : 0.6}
          roughness={0.15}
          metalness={0.6}
          distort={0.4}
          speed={3}
          wireframe={false}
        />
      </mesh>
    </Float>
  )
}

function OrbitingRing({ theme }: { theme: 'light' | 'dark' }) {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ringRef.current) return
    ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.4
    ringRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
  })

  const ringColor = theme === 'dark' ? '#38bdf8' : '#0284c7'

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.0, 0.03, 16, 100]} />
      <meshStandardMaterial
        color={ringColor}
        emissive={ringColor}
        emissiveIntensity={0.8}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  )
}

function FloatingParticles({ theme }: { theme: 'light' | 'dark' }) {
  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.08
  })

  const count = 75
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [count])

  const particleColor = theme === 'dark' ? '#c084fc' : '#6366f1'

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color={particleColor}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

export const FloatingCanvas: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={theme === 'dark' ? 1.0 : 1.6} />
        <directionalLight position={[10, 10, 10]} intensity={2.0} color="#818cf8" />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#38bdf8" />
        <pointLight position={[0, 0, 4]} intensity={2.5} color="#6366f1" />

        <MainTechSphere theme={theme} />
        <OrbitingRing theme={theme} />
        <FloatingParticles theme={theme} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  )
}

export default FloatingCanvas
