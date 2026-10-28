import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getProductById } from '../data/products'
import { useCartStore } from '../store/cartStore'
import { formatPrice, localize } from '../utils'

export function CartDrawer() {
  const { t, i18n } = useTranslation()
  const { items, isOpen, closeCart, updateQuantity, removeItem, demoCheckout } = useCartStore()
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
  const remaining = Math.max(0, 120 - subtotal)

  return (
    <>
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="cart-head"><div><span className="eyebrow">LUMINA</span><h2>{t('cart.title')} <small>({items.reduce((sum, item) => sum + item.quantity, 0)})</small></h2></div><button className="icon-button" onClick={closeCart}><X /></button></div>
        {items.length === 0 ? (
          <div className="empty-cart"><ShoppingBag size={42} strokeWidth={1.2} /><p>{t('cart.empty')}</p><Link className="button dark" to="/shop" onClick={closeCart}>{t('common.continueShopping')}</Link></div>
        ) : (
          <>
            <div className="shipping-progress"><p>{remaining === 0 ? t('cart.freeShipping') : <><strong>{formatPrice(remaining, i18n.language)}</strong> {t('cart.away')}</>}</p><div><span style={{ width: `${Math.min(100, subtotal / 120 * 100)}%` }} /></div></div>
            <div className="cart-items">
              {items.map((item) => {
                const product = getProductById(item.productId)
                if (!product) return null
                return <article className="cart-item" key={item.key}>
                  <Link to={`/product/${product.slug}`} onClick={closeCart}><img src={product.images[0]} alt={localize(product.name, i18n.language)} /></Link>
                  <div className="cart-item-main"><div><Link to={`/product/${product.slug}`} onClick={closeCart}><h3>{localize(product.name, i18n.language)}</h3></Link><p>{t('common.size')}: {item.size}</p></div><strong>{formatPrice(item.unitPrice * item.quantity, i18n.language)}</strong><div className="cart-item-bottom"><div className="quantity-control small"><button onClick={() => updateQuantity(item.key, item.quantity - 1)}><Minus /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.key, item.quantity + 1)}><Plus /></button></div><button className="text-button" onClick={() => removeItem(item.key)}>{t('common.remove')}</button></div></div>
                </article>
              })}
            </div>
            <div className="cart-summary"><div><span>{t('common.subtotal')}</span><strong>{formatPrice(subtotal, i18n.language)}</strong></div><p>{t('cart.checkoutNote')}</p><button className="button dark full" onClick={demoCheckout}>{t('common.checkout')}</button></div>
          </>
        )}
      </aside>
      {isOpen && <button className="overlay cart-overlay" aria-label={t('common.close')} onClick={closeCart} />}
    </>
  )
}
