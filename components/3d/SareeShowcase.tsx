'use client'

import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const SareeModel = ({ imageUrl }: { imageUrl: string }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)

  const texture = useTexture(imageUrl)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += isHovered ? 0.01 : 0.003
      meshRef.current.scale.lerp(
        new THREE.Vector3(isHovered ? 1.1 : 1, isHovered ? 1.1 : 1, 1),
        0.1
      )
    }
  })

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      castShadow
      receiveShadow
    >
      <cylinderGeometry args={[2, 1.8, 4, 32]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.3}
        roughness={0.6}
        emissive="#F7E7CE"
        emissiveIntensity={isHovered ? 0.3 : 0.1}
      />
    </mesh>
  )
}

const SareeShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const sarees = [
    { name: 'Kanchipuram Silk', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500' },
    { name: 'Banarasi Silk', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500' },
    { name: 'Bridal Collection', image: 'https://images.unsplash.com/photo-1581142917028-ab14c53f6f5e?w=500' },
  ]

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % sarees.length)
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + sarees.length) % sarees.length)

  return (
    <div className="w-full h-screen bg-luxury-gradient">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <PerspectiveCamera makeDefault />
        <SareeModel imageUrl={sarees[currentIndex].image} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#F7E7CE" />
        <ambientLight intensity={0.8} color="#D4AF37" />
      </Canvas>

      {/* Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 z-20">
        <button
          onClick={goPrev}
          className="px-6 py-3 bg-luxury-gold-royal text-luxury-charcoal rounded-lg hover:bg-luxury-gold transition-all font-semibold"
        >
          ← Previous
        </button>
        <div className="flex items-center gap-2">
          {sarees.map((_, i) => (
            <div
              key={i}
              className={`h-3 rounded-full transition-all ${
                i === currentIndex ? 'bg-luxury-gold-royal w-8' : 'bg-luxury-ivory w-3'
              }`}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          className="px-6 py-3 bg-luxury-gold-royal text-luxury-charcoal rounded-lg hover:bg-luxury-gold transition-all font-semibold"
        >
          Next →
        </button>
      </div>

      {/* Product Info */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center z-20">
        <h2 className="text-4xl font-serif text-luxury-gold mb-2">{sarees[currentIndex].name}</h2>
        <p className="text-luxury-ivory">Scroll or click to explore our collection</p>
      </div>
    </div>
  )
}

export default SareeShowcase
