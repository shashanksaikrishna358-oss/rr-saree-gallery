'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null)
  const positionAttributeRef = useRef<THREE.BufferAttribute>(null)
  const velocityRef = useRef<Float32Array>(null)

  const particleCount = 1000

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const vel = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      pos[i3] = (Math.random() - 0.5) * 20
      pos[i3 + 1] = (Math.random() - 0.5) * 20
      pos[i3 + 2] = (Math.random() - 0.5) * 20

      vel[i3] = (Math.random() - 0.5) * 0.1
      vel[i3 + 1] = (Math.random() - 0.5) * 0.1
      vel[i3 + 2] = (Math.random() - 0.5) * 0.1
    }

    velocityRef.current = vel
    return { positions: pos, velocities: vel }
  }, [])

  useFrame(() => {
    if (positionAttributeRef.current && velocityRef.current) {
      const posArray = positionAttributeRef.current.array as Float32Array
      const velArray = velocityRef.current

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        posArray[i3] += velArray[i3]
        posArray[i3 + 1] += velArray[i3 + 1]
        posArray[i3 + 2] += velArray[i3 + 2]

        // Boundaries
        if (Math.abs(posArray[i3]) > 10) velArray[i3] *= -1
        if (Math.abs(posArray[i3 + 1]) > 10) velArray[i3 + 1] *= -1
        if (Math.abs(posArray[i3 + 2]) > 10) velArray[i3 + 2] *= -1
      }

      positionAttributeRef.current.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          ref={positionAttributeRef}
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#F7E7CE"
        emissive="#D4AF37"
        emissiveIntensity={0.5}
        sizeAttenuation={true}
      />
    </points>
  )
}

const GoldParticles = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-luxury-charcoal via-luxury-green-dark to-luxury-green relative">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ParticleField />
        <ambientLight intensity={0.5} color="#F7E7CE" />
      </Canvas>
    </div>
  )
}

export default GoldParticles
