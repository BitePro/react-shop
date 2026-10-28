import { Minus, Plus, ShoppingBag } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getProductById } from '../data/products'
import { useCartStore } from '../store/cartStore'
import { formatPrice, localize } from '../utils'

export function CartPage() {
  const { t, i18n } = useTranslation()
  const { items, updateQuantity, removeItem, demoCheckout } = useCartStore()
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)

  if (!items.length) return <div className="empty-page"><ShoppingBag size={50} strokeWidth={1} /><h1>{t('cart.empty')}</h1><Link to="/shop" className="button dark">{t('common.continueShopping')}</Link></div>

  return <div className="cart-page"><h1>{t('cart.title')}</h1><div className="cart-page-layout"><div className="cart-page-items">{items.map((item) => { const product = getProductById(item.productId); if (!product) return null; return <article key={item.key}><img src={product.images[0]} alt="" /><div><Link to={`/product/${product.slug}`}><h2>{localize(product.name, i18n.language)}</h2></Link><p>{t('common.size')}: {item.size}</p><div className="quantity-control small"><button onClick={() => updateQuantity(item.key, item.quantity - 1)}><Minus /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.key, item.quantity + 1)}><Plus /></button></div><button className="text-button" onClick={() => removeItem(item.key)}>{t('common.remove')}</button></div><strong>{formatPrice(item.unitPrice * item.quantity, i18n.language)}</strong></article> })}</div><aside><div><span>{t('common.subtotal')}</span><strong>{formatPrice(subtotal, i18n.language)}</strong></div><p>{t('cart.checkoutNote')}</p><button className="button dark full" onClick={demoCheckout}>{t('common.checkout')}</button></aside></div></div>
}
