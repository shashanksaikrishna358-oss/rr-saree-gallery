'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMinus, FiPlus, FiHeart, FiShare2 } from 'react-icons/fi'
import Link from 'next/link'

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  const product = {
    id: params.id,
    name: 'Premium Kanchipuram Silk Saree',
    category: 'Kanchipuram',
    price: 24999,
    originalPrice: 32999,
    rating: 4.8,
    reviews: 45,
    description: 'An exquisite blend of tradition and elegance, this Kanchipuram silk saree features intricate zari work and pure silk fabric.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800',
    ],
    inStock: true,
  }

  return (
    <div className="min-h-screen bg-luxury-ivory">
      {/* Breadcrumb */}
      <div className="bg-luxury-green/5 border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 text-sm">
            <Link href="/" className="text-luxury-green hover:text-luxury-gold">Home</Link>
            <span>/</span>
            <Link href="/collections" className="text-luxury-green hover:text-luxury-gold">Collections</Link>
            <span>/</span>
            <span className="text-luxury-charcoal/70">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="aspect-square bg-gradient-to-br from-luxury-green/10 to-luxury-gold/10 rounded-lg flex items-center justify-center text-8xl">
                🧵
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <button
                    key={i}
                    className="aspect-square bg-luxury-green/10 rounded-lg hover:ring-2 ring-luxury-gold transition-all flex items-center justify-center text-4xl"
                  >
                    🧵
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <p className="text-luxury-gold text-sm font-semibold mb-2">KANCHIPURAM COLLECTION</p>
                <h1 className="text-4xl font-serif font-bold text-luxury-green mb-2">{product.name}</h1>
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-luxury-charcoal/70">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <span className="text-4xl font-bold text-luxury-gold-royal">₹{product.price.toLocaleString()}</span>
                <span className="text-lg line-through text-luxury-charcoal/50">₹{product.originalPrice.toLocaleString()}</span>
                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>

              <p className="text-luxury-charcoal/80">{product.description}</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-luxury-charcoal mb-2">Quantity</label>
                  <div className="flex gap-2 w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 border border-luxury-gold/30 rounded-lg hover:bg-luxury-gold/10"
                    >
                      <FiMinus />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-16 text-center border border-luxury-gold/30 rounded-lg"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 border border-luxury-gold/30 rounded-lg hover:bg-luxury-gold/10"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 luxury-button">Add to Cart</button>
                  <button className="px-6 py-3 border-2 border-luxury-gold text-luxury-gold rounded-lg hover:bg-luxury-gold/10 transition-all">
                    <FiHeart className="inline mr-2" /> Wishlist
                  </button>
                  <button className="px-6 py-3 border-2 border-luxury-gold text-luxury-gold rounded-lg hover:bg-luxury-gold/10 transition-all">
                    <FiShare2 />
                  </button>
                </div>
              </div>

              {product.inStock ? (
                <p className="text-green-600 font-semibold">✓ In Stock - Ships within 2-3 days</p>
              ) : (
                <p className="text-red-600 font-semibold">Out of Stock</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-luxury-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 border-b border-luxury-gold/20 mb-8">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-semibold transition-all ${
                  activeTab === tab
                    ? 'text-luxury-green border-b-2 border-luxury-green'
                    : 'text-luxury-charcoal/70 hover:text-luxury-green'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {activeTab === 'description' && (
              <p className="text-luxury-charcoal/80 leading-relaxed">
                This exquisite Kanchipuram silk saree represents the pinnacle of traditional weaving craftsmanship. Made from 100% pure silk with intricate zari work, this saree is a perfect blend of elegance and tradition. The saree features a stunning pallu with traditional motifs and a contrasting blouse.
              </p>
            )}
            {activeTab === 'specifications' && (
              <div className="space-y-3">
                <p><strong>Material:</strong> 100% Pure Silk</p>
                <p><strong>Color:</strong> Maroon with Gold Zari</p>
                <p><strong>Length:</strong> 6.5 yards</p>
                <p><strong>Care:</strong> Dry clean recommended</p>
              </div>
            )}
            {activeTab === 'reviews' && (
              <p className="text-luxury-charcoal/80">No reviews yet. Be the first to review!</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
