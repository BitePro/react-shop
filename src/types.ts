export type LocalizedText = {
  en: string
  zh: string
}

export type ProductCategory = 'apparel' | 'accessories' | 'footwear'

export type ProductSize = {
  label: string
  priceAdjustment: number
  available: boolean
}

export type Product = {
  id: string
  slug: string
  name: LocalizedText
  category: ProductCategory
  description: LocalizedText
  details: LocalizedText[]
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  images: string[]
  sizes: ProductSize[]
  badge?: 'new' | 'sale' | 'bestseller'
  featured?: boolean
}

export type CartItem = {
  key: string
  productId: string
  size: string
  unitPrice: number
  quantity: number
}
