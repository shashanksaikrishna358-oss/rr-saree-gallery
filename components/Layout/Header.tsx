'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiHeart } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const menuItems = [
    { label: 'Kanchipuram', href: '/collections/kanchipuram' },
    { label: 'Banarasi', href: '/collections/banarasi' },
    { label: 'Bridal', href: '/collections/bridal' },
    { label: 'Designer', href: '/collections/designer' },
    { label: 'Party Wear', href: '/collections/party' },
    { label: 'About Us', href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-luxury-green/95 backdrop-blur-md border-b border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center group-hover:shadow-gold-glow transition-all">
              <span className="text-luxury-green font-serif font-bold text-lg">RR</span>
            </div>
            <span className="text-luxury-gold font-serif text-xl font-bold hidden sm:inline">RR Saree</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-luxury-ivory hover:text-luxury-gold transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-luxury-gold hover:text-luxury-ivory transition-colors"
              aria-label="Search"
            >
              <FiSearch size={20} />
            </motion.button>

            {/* Wishlist */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-luxury-gold hover:text-luxury-ivory transition-colors"
              aria-label="Wishlist"
            >
              <FiHeart size={20} />
            </motion.button>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-luxury-gold hover:text-luxury-ivory transition-colors relative"
              aria-label="Shopping Cart"
            >
              <FiShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-luxury-gold-royal text-luxury-charcoal text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-luxury-gold"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-4"
          >
            <input
              type="text"
              placeholder="Search sarees..."
              className="w-full px-4 py-2 rounded-lg bg-luxury-green-light/50 text-luxury-ivory placeholder-luxury-gold/50 border border-luxury-gold/30 focus:outline-none focus:border-luxury-gold"
            />
          </motion.div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-luxury-green-dark/95 backdrop-blur-md border-t border-luxury-gold/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-luxury-ivory hover:text-luxury-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  )
}

export default Header
