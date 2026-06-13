'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const SilkCloth = ({ mousePos }: { mousePos: { x: number; y: number } }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const clothGeometryRef = useRef<THREE.BufferGeometry>(null)
  const positionAttributeRef = useRef<THREE.BufferAttribute>(null)

  const clothWidth = 16
  const clothHeight = 12
  const clothResolution = 20

  const { positions, indices } = useMemo(() => {
    const pos: number[] = []
    const idx: number[] = []

    for (let y = 0; y <= clothHeight; y++) {
      for (let x = 0; x <= clothWidth; x++) {
        pos.push(
          x - clothWidth / 2,
          10 - (y * 10) / clothHeight,
          Math.sin(x * 0.2) * 0.5
        )
      }
    }

    for (let y = 0; y < clothHeight; y++) {
      for (let x = 0; x < clothWidth; x++) {
        const a = y * (clothWidth + 1) + x
        const b = y * (clothWidth + 1) + x + 1
        const c = (y + 1) * (clothWidth + 1) + x
        const d = (y + 1) * (clothWidth + 1) + x + 1

        idx.push(a, c, b)
        idx.push(b, c, d)
      }
    }

    return { positions: pos, indices: idx }
  }, [])

  useFrame(() => {
    if (meshRef.current && positionAttributeRef.current) {
      const posArray = positionAttributeRef.current.array as Float32Array
      const distance = Math.sqrt(mousePos.x ** 2 + mousePos.y ** 2)
      const influence = Math.max(0, 1 - distance / 5)

      for (let i = 0; i < posArray.length; i += 3) {
        const x = posArray[i]
        const y = posArray[i + 1]
        const z = posArray[i + 2]

        // Wave animation
        const wave = Math.sin(x * 0.5 + performance.now() / 500) * 0.3
        const mouseInfluence = influence * Math.sin(x * 0.5) * 2

        posArray[i + 2] = wave + mouseInfluence
      }

      positionAttributeRef.current.needsUpdate = true
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <bufferGeometry ref={clothGeometryRef}>
        <bufferAttribute
          ref={positionAttributeRef}
          attach="attributes-position"
          count={positions.length / 3}
          array={new Float32Array(positions)}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          count={indices.length}
          array={new Uint32Array(indices)}
          itemSize={1}
        />
      </bufferGeometry>
      <meshStandardMaterial
        color="#F7E7CE"
        metalness={0.6}
        roughness={0.4}
        emissive="#D4AF37"
        emissiveIntensity={0.2}
        wireframe={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

const SilkFabricSimulation = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.width / 2) / 100,
      y: (e.clientY - rect.height / 2) / 100,
    })
  }

  return (
    <div
      className="w-full h-screen bg-luxury-gradient"
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
        <SilkCloth mousePos={mousePos} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#F7E7CE" />
        <pointLight position={[-10, 10, 5]} intensity={1} color="#D4AF37" />
        <ambientLight intensity={0.7} color="#004225" />
      </Canvas>
    </div>
  )
}

export default SilkFabricSimulation
