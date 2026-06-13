'use client'

import { create } from 'zustand'
import { CartItem, Saree } from '@/types'

interface CartStore {
  items: CartItem[]
  addItem: (saree: Saree, quantity: number) => void
  removeItem: (sareeId: string) => void
  updateQuantity: (sareeId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getCount: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (saree, quantity) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.sareeId === saree.id)
      
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.sareeId === saree.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        }
      }

      return {
        items: [
          ...state.items,
          {
            id: `${saree.id}-${Date.now()}`,
            userId: '',
            sareeId: saree.id,
            quantity,
            saree,
            addedAt: new Date(),
          },
        ],
      }
    })
  },

  removeItem: (sareeId) => {
    set((state) => ({
      items: state.items.filter((item) => item.sareeId !== sareeId),
    }))
  },

  updateQuantity: (sareeId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(sareeId)
      return
    }

    set((state) => ({
      items: state.items.map((item) =>
        item.sareeId === sareeId ? { ...item, quantity } : item
      ),
    }))
  },

  clearCart: () => {
    set({ items: [] })
  },

  getTotal: () => {
    return get().items.reduce(
      (total, item) => total + (item.saree?.price || 0) * item.quantity,
      0
    )
  },

  getCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0)
  },
}))
