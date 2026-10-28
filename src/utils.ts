import type { Product } from './types'

export const formatPrice = (price: number, language: string) => new Intl.NumberFormat(language === 'zh' ? 'zh-CN' : 'en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0,
}).format(price)

export const localize = (value: Product['name'], language: string) => value[language === 'zh' ? 'zh' : 'en']
