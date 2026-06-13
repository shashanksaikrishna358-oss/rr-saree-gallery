'use client'

import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, Html, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

const LotusModel = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <>
      {/* Lotus Flower Shape */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.8}
          roughness={0.2}
          emissive="#F7E7CE"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Lotus Petals */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 1.5,
              0.5,
              Math.sin(angle) * 1.5,
            ]}
            rotation={[Math.PI * 0.2, angle, 0]}
          >
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial
              color="#F7E7CE"
              metalness={0.7}
              roughness={0.3}
              emissive="#D4AF37"
              emissiveIntensity={0.2}
            />
          </mesh>
        )
      })}

      {/* Lighting */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#F7E7CE" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#D4AF37" />
      <ambientLight intensity={0.6} color="#004225" />

      {/* Sparkles */}
      <Sparkles count={100} scale={2} size={5.5} speed={0.5} />
    </>
  )
}

const FloatingLotus = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-luxury-green via-luxury-green-dark to-luxury-charcoal relative overflow-hidden">
      {/* Ambient Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-luxury-gold rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Canvas */}
      <Canvas className="absolute inset-0">
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <LotusModel />
      </Canvas>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h1 className="text-6xl md:text-7xl font-serif text-luxury-gold font-bold mb-6 text-center drop-shadow-lg">
          RR Saree Gallery
        </h1>
        <p className="text-xl md:text-2xl text-luxury-ivory text-center max-w-2xl drop-shadow-lg">
          Where Every Drape Tells a Royal Story
        </p>
      </div>
    </div>
  )
}

export default FloatingLotus
