'use client'

import { create } from 'zustand'
import { Saree } from '@/types'

interface WishlistStore {
  items: Saree[]
  addItem: (saree: Saree) => void
  removeItem: (sareeId: string) => void
  isInWishlist: (sareeId: string) => boolean
  getCount: () => number
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],

  addItem: (saree) => {
    set((state) => {
      if (state.items.find((item) => item.id === saree.id)) {
        return state
      }
      return { items: [...state.items, saree] }
    })
  },

  removeItem: (sareeId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== sareeId),
    }))
  },

  isInWishlist: (sareeId) => {
    return get().items.some((item) => item.id === sareeId)
  },

  getCount: () => {
    return get().items.length
  },
}))
