'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi'
import Link from 'next/link'

const Cart = () => {
  const cartItems = [
    {
      id: '1',
      name: 'Premium Kanchipuram Silk Saree',
      price: 24999,
      quantity: 1,
      image: '🧵',
    },
    {
      id: '2',
      name: 'Banarasi Silk Saree',
      price: 18999,
      quantity: 1,
      image: '🧵',
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = Math.round(subtotal * 0.18)
  const shipping = subtotal >= 50000 ? 0 : 200
  const total = subtotal + tax + shipping

  return (
    <div className="min-h-screen bg-luxury-ivory py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif font-bold text-luxury-green mb-12"
        >
          Shopping Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-4"
          >
            {cartItems.map((item) => (
              <div key={item.id} className="luxury-card p-6 flex gap-6">
                <div className="w-24 h-24 bg-luxury-green/10 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                  {item.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-luxury-green mb-2">{item.name}</h3>
                  <p className="text-luxury-charcoal/70 mb-4">₹{item.price.toLocaleString()}</p>
                  <div className="flex gap-4 items-center">
                    <div className="flex gap-2 w-fit">
                      <button className="px-3 py-1 border border-luxury-gold/30 rounded hover:bg-luxury-gold/10">-</button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button className="px-3 py-1 border border-luxury-gold/30 rounded hover:bg-luxury-gold/10">+</button>
                    </div>
                    <button className="ml-auto text-red-500 hover:text-red-700">
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-luxury-gold-royal">₹{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="luxury-card p-8 h-fit"
          >
            <h2 className="text-xl font-serif font-bold text-luxury-green mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-luxury-gold/20">
              <div className="flex justify-between text-luxury-charcoal/70">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-luxury-charcoal/70">
                <span>Tax (18%)</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-luxury-charcoal/70">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
            </div>

            <div className="flex justify-between text-2xl font-bold text-luxury-gold-royal mb-8">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <Link href="/checkout" className="block w-full luxury-button text-center">
              Proceed to Checkout
            </Link>
            <Link href="/collections" className="block w-full mt-3 luxury-button-outline text-center">
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Cart
