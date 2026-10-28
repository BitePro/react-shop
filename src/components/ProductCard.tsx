import { ArrowUpRight, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { Product } from '../types'
import { formatPrice, localize } from '../utils'

export function ProductCard({ product }: { product: Product }) {
  const { t, i18n } = useTranslation()

  return (
    <article className="product-card">
      <Link className="product-image-wrap" to={`/product/${product.slug}`}>
        {product.badge && <span className={`badge ${product.badge}`}>{t(`badge.${product.badge}`)}</span>}
        <img src={product.images[0]} alt={localize(product.name, i18n.language)} loading="lazy" />
        <img className="product-image-hover" src={product.images[1]} alt="" loading="lazy" />
        <span className="quick-view"><span>{t('common.learnMore')}</span><ArrowUpRight size={16} /></span>
      </Link>
      <div className="product-card-info">
        <div className="rating"><Star size={13} fill="currentColor" /><span>{product.rating}</span><span className="reviews">({product.reviews})</span></div>
        <Link to={`/product/${product.slug}`}><h3>{localize(product.name, i18n.language)}</h3></Link>
        <div className="price-row"><strong>{formatPrice(product.price, i18n.language)}</strong>{product.originalPrice && <del>{formatPrice(product.originalPrice, i18n.language)}</del>}</div>
      </div>
    </article>
  )
}
