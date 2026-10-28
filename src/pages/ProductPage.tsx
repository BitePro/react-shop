import { Check, ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { ProductGrid } from '../components/ProductGrid'
import { getProductBySlug, products } from '../data/products'
import { useCartStore } from '../store/cartStore'
import { formatPrice, localize } from '../utils'

export function ProductPage() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const product = getProductBySlug(slug || '')
  const [activeImage, setActiveImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const selectedOption = product?.sizes.find((size) => size.label === selectedSize)
  const currentPrice = product ? product.price + (selectedOption?.priceAdjustment || 0) : 0
  const related = useMemo(() => product ? products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4) : [], [product])

  if (!product) return <div className="not-found"><h1>{t('product.notFound')}</h1><Link className="button dark" to="/shop">{t('common.back')}</Link></div>

  const handleAdd = () => {
    if (!selectedSize) return
    addItem({ productId: product.id, size: selectedSize, unitPrice: currentPrice, quantity })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1200)
  }

  return <div className="product-page">
    <div className="breadcrumbs"><Link to="/shop">{t('nav.shop')}</Link><span>/</span><span>{localize(product.name, i18n.language)}</span></div>
    <div className="product-detail">
      <div className="product-gallery"><div className="product-thumbnails">{product.images.map((image, index) => <button className={activeImage === index ? 'active' : ''} key={image} onClick={() => setActiveImage(index)}><img src={image} alt="" /></button>)}</div><div className="product-main-image"><img src={product.images[activeImage]} alt={localize(product.name, i18n.language)} />{product.badge && <span className={`badge ${product.badge}`}>{t(`badge.${product.badge}`)}</span>}</div></div>
      <section className="product-info"><div className="rating"><Star size={15} fill="currentColor" /><span>{product.rating}</span><a href="#reviews">{product.reviews} {t('product.reviews')}</a></div><h1>{localize(product.name, i18n.language)}</h1><div className="detail-price"><strong>{formatPrice(currentPrice, i18n.language)}</strong>{product.originalPrice && <del>{formatPrice(product.originalPrice + (selectedOption?.priceAdjustment || 0), i18n.language)}</del>}</div><p className="product-description">{localize(product.description, i18n.language)}</p>
        <div className="size-section"><div className="option-heading"><strong>{t('common.size')}</strong><button className="text-button">{t('product.sizeHelp')}</button></div><div className="size-options">{product.sizes.map((size) => <button key={size.label} disabled={!size.available} className={selectedSize === size.label ? 'selected' : ''} onClick={() => setSelectedSize(size.label)}><span>{size.label}</span>{size.priceAdjustment > 0 && <small>+{formatPrice(size.priceAdjustment, i18n.language)}</small>}{selectedSize === size.label && <Check />}</button>)}</div>{selectedOption && <p className="selected-note">{t('product.selected')}: <strong>{selectedOption.label}</strong> · {t('common.price')}: <strong>{formatPrice(currentPrice, i18n.language)}</strong></p>}</div>
        <div className="purchase-row"><div className="quantity-control"><button aria-label="Decrease" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus /></button><span>{quantity}</span><button aria-label="Increase" onClick={() => setQuantity(quantity + 1)}><Plus /></button></div><button className={`button dark add-button ${added ? 'added' : ''}`} disabled={!selectedSize} onClick={handleAdd}>{added ? <><Check /> {t('common.adding')}</> : t('common.addToCart')}</button></div>
        {!selectedSize && <p className="select-reminder">{t('common.size')}</p>}
        <div className="detail-accordions"><details open><summary>{t('product.fit')} <ChevronDown /></summary><ul>{product.details.map((item) => <li key={item.en}>{localize(item, i18n.language)}</li>)}</ul></details><details><summary>{t('product.shipping')} <ChevronDown /></summary><p>{t('product.shippingBody')}</p></details></div>
      </section>
    </div>
    <section className="section related-section"><div className="section-heading"><div><span className="eyebrow">Complete the edit</span><h2>{t('product.related')}</h2></div></div><ProductGrid products={related} /></section>
  </div>
}
