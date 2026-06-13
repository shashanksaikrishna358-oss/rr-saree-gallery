'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FloatingLotus from '@/components/3d/FloatingLotus'

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-luxury-gradient" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-luxury-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-luxury-gold rounded-full flex items-center justify-center mb-8 mx-auto shadow-gold-glow animate-float">
            <span className="text-4xl">🪷</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-luxury font-serif font-bold text-luxury-gold mb-6 drop-shadow-lg"
        >
          Experience Royal Elegance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-luxury-ivory mb-12 max-w-2xl drop-shadow-lg"
        >
          Premium Silk Sarees Crafted For Timeless Beauty
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-6 flex-wrap justify-center"
        >
          <Link
            href="/collections"
            className="px-8 py-4 bg-luxury-gold-royal text-luxury-charcoal rounded-lg font-semibold hover:bg-luxury-gold transition-all shadow-luxury hover:shadow-luxury-deep transform hover:scale-105"
          >
            Explore Collections
          </Link>
          <Link
            href="/store"
            className="px-8 py-4 border-2 border-luxury-gold text-luxury-gold rounded-lg font-semibold hover:bg-luxury-gold hover:text-luxury-charcoal transition-all"
          >
            Visit Store
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <p className="text-luxury-gold mb-2 text-sm">Scroll to Explore</p>
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <div className="w-1 h-2 bg-luxury-gold rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
