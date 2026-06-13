'use client'

import React, { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const categories = [
  { id: 'kanchipuram', name: 'Kanchipuram', count: 24 },
  { id: 'banarasi', name: 'Banarasi', count: 18 },
  { id: 'bridal', name: 'Bridal', count: 32 },
  { id: 'designer', name: 'Designer', count: 16 },
  { id: 'party', name: 'Party Wear', count: 20 },
]

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('kanchipuram')
  const [priceRange, setPriceRange] = useState([5000, 50000])
  const [sortBy, setSortBy] = useState('newest')

  return (
    <div className="min-h-screen bg-luxury-ivory">
      {/* Header */}
      <section className="bg-gradient-to-r from-luxury-green to-luxury-green-dark text-luxury-ivory py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 text-luxury-gold">Our Collections</h1>
          <p className="text-xl text-luxury-ivory/80">Explore our curated selection of premium silk sarees</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Categories */}
              <div className="luxury-card p-6">
                <h3 className="text-lg font-serif font-bold text-luxury-green mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-luxury-gold-royal text-luxury-charcoal font-semibold'
                          : 'text-luxury-charcoal hover:bg-luxury-gold/10'
                      }`}
                    >
                      <span className="flex justify-between">
                        <span>{cat.name}</span>
                        <span className="text-sm opacity-70">({cat.count})</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="luxury-card p-6">
                <h3 className="text-lg font-serif font-bold text-luxury-green mb-4">Price Range</h3>
                <input
                  type="range"
                  min="5000"
                  max="50000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="mt-4 text-sm text-luxury-charcoal/70">
                  ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                </div>
              </div>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              {/* Sort Bar */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-luxury-gold/20">
                <p className="text-luxury-charcoal/70">
                  Showing <span className="font-semibold">12</span> products
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-luxury-gold/30 bg-luxury-ivory text-luxury-charcoal"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="luxury-card overflow-hidden group cursor-pointer"
                  >
                    <div className="h-80 bg-gradient-to-br from-luxury-green/10 to-luxury-gold/10 flex items-center justify-center overflow-hidden relative">
                      <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🧵</span>
                      <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-luxury-gold/80 flex items-center justify-center hover:bg-luxury-gold transition-all">
                        ♡
                      </button>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-serif font-bold text-luxury-green mb-2">Premium Silk Saree</h3>
                      <p className="text-sm text-luxury-charcoal/60 mb-4">Kanchipuram | Pure Silk</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-2xl font-bold text-luxury-gold-royal">₹12,999</p>
                          <p className="text-sm line-through text-luxury-charcoal/50">₹15,999</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-sm text-luxury-gold">★★★★★</span>
                        </div>
                      </div>
                      <button className="w-full mt-4 luxury-button">View Details</button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      page === 1
                        ? 'bg-luxury-gold-royal text-luxury-charcoal'
                        : 'bg-luxury-ivory border border-luxury-gold/30 hover:border-luxury-gold'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collections
