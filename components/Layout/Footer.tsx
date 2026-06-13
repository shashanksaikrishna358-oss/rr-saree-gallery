'use client'

import React from 'react'
import Link from 'next/link'
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Collections',
      links: [
        { label: 'Kanchipuram', href: '/collections/kanchipuram' },
        { label: 'Banarasi', href: '/collections/banarasi' },
        { label: 'Bridal', href: '/collections/bridal' },
        { label: 'Designer', href: '/collections/designer' },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Shipping Info', href: '/shipping' },
        { label: 'Returns', href: '/returns' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'About',
      links: [
        { label: 'Our Story', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ]

  return (
    <footer className="bg-luxury-charcoal border-t border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 pb-12 border-b border-luxury-gold/20"
        >
          <h3 className="text-2xl font-serif text-luxury-gold mb-4">Subscribe to Our Newsletter</h3>
          <div className="flex gap-2 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-luxury-green-dark text-luxury-ivory placeholder-luxury-gold/50 border border-luxury-gold/30 focus:outline-none focus:border-luxury-gold"
            />
            <button className="px-6 py-3 bg-luxury-gold-royal text-luxury-charcoal rounded-lg hover:bg-luxury-gold transition-all font-semibold">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center">
                <span className="text-luxury-green font-serif font-bold">RR</span>
              </div>
              <span className="text-luxury-gold font-serif font-bold">RR Saree Gallery</span>
            </div>
            <p className="text-luxury-ivory/70 text-sm">
              Luxury sarees that tell stories of royal elegance and timeless beauty.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-luxury-gold font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-luxury-ivory/70 hover:text-luxury-gold transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-luxury-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-luxury-ivory/60 text-sm">
            © {currentYear} RR Saree Gallery. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { icon: FiFacebook, href: '#' },
              { icon: FiInstagram, href: '#' },
              { icon: FiTwitter, href: '#' },
              { icon: FiMail, href: '#' },
            ].map(({ icon: Icon }, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-luxury-gold/70 hover:text-luxury-gold transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
