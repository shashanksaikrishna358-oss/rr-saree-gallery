'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCreditCard, FiTruck, FiCheckCircle } from 'react-icons/fi'

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  })

  const steps = [
    { number: 1, title: 'Shipping', icon: FiTruck },
    { number: 2, title: 'Payment', icon: FiCreditCard },
    { number: 3, title: 'Confirmation', icon: FiCheckCircle },
  ]

  return (
    <div className="min-h-screen bg-luxury-ivory py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isCompleted = step.number < currentStep
              const isActive = step.number === currentStep

              return (
                <div key={step.number} className="flex-1 flex items-center">
                  <motion.div
                    className={`flex flex-col items-center flex-1 ${
                      index !== steps.length - 1 ? 'relative' : ''
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        isCompleted || isActive
                          ? 'bg-luxury-gold-royal text-white'
                          : 'bg-luxury-green/20 text-luxury-charcoal'
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <p
                      className={`text-sm font-semibold ${
                        isCompleted || isActive ? 'text-luxury-green' : 'text-luxury-charcoal/50'
                      }`}
                    >
                      {step.title}
                    </p>

                    {index !== steps.length - 1 && (
                      <div
                        className={`absolute top-6 left-1/2 w-1/2 h-1 ${
                          isCompleted ? 'bg-luxury-gold-royal' : 'bg-luxury-green/20'
                        }`}
                      />
                    )}
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 luxury-card p-8"
          >
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-bold text-luxury-green">Shipping Address</h2>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="col-span-2 sm:col-span-1 px-4 py-3 border border-luxury-gold/30 rounded-lg focus:outline-none focus:border-luxury-gold"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="col-span-2 sm:col-span-1 px-4 py-3 border border-luxury-gold/30 rounded-lg focus:outline-none focus:border-luxury-gold"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-luxury-gold/30 rounded-lg focus:outline-none focus:border-luxury-gold"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-luxury-gold/30 rounded-lg focus:outline-none focus:border-luxury-gold"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-3 border border-luxury-gold/30 rounded-lg focus:outline-none focus:border-luxury-gold"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 border border-luxury-gold/30 rounded-lg focus:outline-none focus:border-luxury-gold"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="px-4 py-3 border border-luxury-gold/30 rounded-lg focus:outline-none focus:border-luxury-gold"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full px-4 py-3 border border-luxury-gold/30 rounded-lg focus:outline-none focus:border-luxury-gold"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-bold text-luxury-green">Payment Method</h2>
                <div className="space-y-3">
                  {['Razorpay', 'Google Pay', 'Credit Card', 'Net Banking'].map((method) => (
                    <label key={method} className="flex items-center p-4 border-2 border-luxury-gold/30 rounded-lg cursor-pointer hover:bg-luxury-gold/5 transition-all">
                      <input type="radio" name="payment" value={method} className="w-4 h-4" />
                      <span className="ml-3 font-semibold text-luxury-charcoal">{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <FiCheckCircle className="text-green-600" size={32} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-luxury-green">Order Confirmed!</h2>
                <p className="text-luxury-charcoal/70">Thank you for your order. You will receive a confirmation email shortly.</p>
                <p className="text-sm text-luxury-charcoal/50">Order #RR-123456</p>
              </div>
            )}

            <div className="flex gap-4 mt-8 pt-8 border-t border-luxury-gold/20">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex-1 px-6 py-3 border-2 border-luxury-gold text-luxury-gold rounded-lg hover:bg-luxury-gold hover:text-luxury-charcoal transition-all font-semibold"
                >
                  Back
                </button>
              )}
              {currentStep < 3 && (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="flex-1 luxury-button"
                >
                  {currentStep === 2 ? 'Place Order' : 'Continue'}
                </button>
              )}
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="luxury-card p-8 h-fit"
          >
            <h2 className="text-xl font-serif font-bold text-luxury-green mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-luxury-gold/20">
              <div className="flex justify-between">
                <span className="text-luxury-charcoal/70">Subtotal</span>
                <span className="font-semibold">₹43,998</span>
              </div>
              <div className="flex justify-between">
                <span className="text-luxury-charcoal/70">Tax (18%)</span>
                <span className="font-semibold">₹7,920</span>
              </div>
              <div className="flex justify-between">
                <span className="text-luxury-charcoal/70">Shipping</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
            </div>

            <div className="flex justify-between text-2xl font-bold text-luxury-gold-royal">
              <span>Total</span>
              <span>₹51,918</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
