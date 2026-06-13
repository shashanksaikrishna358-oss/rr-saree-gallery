'use client'

import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/Sections/HeroSection'
import SilkFabricSimulation from '@/components/3d/SilkFabricSimulation'

const collectionsPreview = [
  {
    name: 'Kanchipuram Silk',
    description: 'Pure silk sarees with intricate zari work',
    image: '🪡',
    href: '/collections/kanchipuram',
  },
  {
    name: 'Banarasi Silk',
    description: 'Traditional Banarasi weaves with gold zari',
    image: '✨',
    href: '/collections/banarasi',
  },
  {
    name: 'Bridal Collection',
    description: 'Exquisite bridal sarees for your special day',
    image: '👰',
    href: '/collections/bridal',
  },
  {
    name: 'Designer Sarees',
    description: 'Contemporary designs with traditional touch',
    image: '🎨',
    href: '/collections/designer',
  },
]

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Collections Preview */}
      <section className="py-20 bg-luxury-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Collections</h2>
            <p className="section-subheading">Explore our curated selection of premium sarees</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionsPreview.map((collection, index) => (
              <motion.a
                key={collection.name}
                href={collection.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="luxury-card group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-luxury-green/10 to-luxury-gold/10 flex items-center justify-center overflow-hidden relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {collection.image}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-luxury-green mb-2 group-hover:text-luxury-gold transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-luxury-charcoal/70 text-sm">{collection.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sarees */}
      <section className="py-20 bg-luxury-green text-luxury-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-luxury-gold">Featured Sarees</h2>
            <p className="text-xl text-luxury-ivory/80">Handpicked selections from our exclusive collection</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1, duration: 0.6 }}
                className="bg-luxury-green-light/50 rounded-lg overflow-hidden backdrop-blur border border-luxury-gold/20"
              >
                <div className="h-64 bg-gradient-to-br from-luxury-gold/20 to-luxury-ivory/10 flex items-center justify-center">
                  <div className="text-6xl">🧵</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-luxury-gold">Premium Silk Saree</h3>
                  <p className="text-luxury-ivory/70 mb-4">Experience the elegance of authentic craftsmanship</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-luxury-gold">₹12,999</span>
                    <button className="luxury-button text-sm">View</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-luxury-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Why Choose RR Saree Gallery?</h2>
            <p className="section-subheading">The epitome of luxury and authenticity</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '✨',
                title: 'Premium Quality',
                description: 'Authentic silk sarees from renowned weavers',
              },
              {
                icon: '🏆',
                title: 'Certified Authenticity',
                description: 'Every saree comes with authenticity certificate',
              },
              {
                icon: '💚',
                title: 'Customer Care',
                description: '24/7 dedicated support for your queries',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="luxury-card p-8 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold text-luxury-green mb-2">{item.title}</h3>
                <p className="text-luxury-charcoal/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-green to-luxury-green-dark text-luxury-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-luxury-gold">
              Begin Your Royal Journey
            </h2>
            <p className="text-xl mb-12 text-luxury-ivory/80">
              Discover the perfect saree that tells your story of elegance and grace
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <button className="luxury-button">Shop Now</button>
              <button className="luxury-button-outline">Learn More</button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
