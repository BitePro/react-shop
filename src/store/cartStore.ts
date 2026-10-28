import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem } from '../types'

type CartState = {
  items: CartItem[]
  isOpen: boolean
  checkoutMessage: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (item: Omit<CartItem, 'key'>) => void
  updateQuantity: (key: string, quantity: number) => void
  removeItem: (key: string) => void
  demoCheckout: () => void
  clearCheckoutMessage: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      checkoutMessage: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      addItem: (item) => set((state) => {
        const key = `${item.productId}-${item.size}`
        const existing = state.items.find((cartItem) => cartItem.key === key)
        if (existing) {
          return {
            isOpen: true,
            checkoutMessage: false,
            items: state.items.map((cartItem) => cartItem.key === key
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity, unitPrice: item.unitPrice }
              : cartItem),
          }
        }
        return { isOpen: true, checkoutMessage: false, items: [...state.items, { ...item, key }] }
      }),
      updateQuantity: (key, quantity) => set((state) => ({
        items: quantity < 1 ? state.items.filter((item) => item.key !== key) : state.items.map((item) => item.key === key ? { ...item, quantity } : item),
      })),
      removeItem: (key) => set((state) => ({ items: state.items.filter((item) => item.key !== key) })),
      demoCheckout: () => set({ checkoutMessage: true, isOpen: false }),
      clearCheckoutMessage: () => set({ checkoutMessage: false }),
    }),
    { name: 'lumina-cart', partialize: (state) => ({ items: state.items }) },
  ),
)
