import { ArrowRight, Leaf, PackageCheck, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ProductGrid } from '../components/ProductGrid'
import { products } from '../data/products'

const categories = [
  { key: 'apparel', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85' },
  { key: 'accessories', image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1200&q=85' },
  { key: 'footwear', image: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=85' },
]

export function HomePage() {
  const { t } = useTranslation()
  const [subscribed, setSubscribed] = useState(false)
  const heroTitle = t('home.heroTitle').split('\n')

  return <>
    <section className="hero">
      <div className="hero-copy"><span className="eyebrow">{t('home.eyebrow')}</span><h1>{heroTitle.map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</h1><p>{t('home.heroBody')}</p><Link className="button dark" to="/shop">{t('common.shopNow')} <ArrowRight /></Link></div>
      <div className="hero-image"><img src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1800&q=90" alt="Contemporary fashion collection" /><div className="hero-note"><span>01</span><p>Essential forms<br />for everyday movement.</p></div></div>
    </section>

    <section className="section featured-section"><div className="section-heading"><div><span className="eyebrow">Selected goods</span><h2>{t('home.featured')}</h2><p>{t('home.featuredBody')}</p></div><Link className="arrow-link" to="/shop">{t('common.viewAll')} <ArrowRight /></Link></div><ProductGrid products={products.filter((product) => product.featured).slice(0, 4)} /></section>

    <section className="manifesto" id="story"><div className="manifesto-image"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=88" alt="Thoughtful everyday style" /></div><div className="manifesto-copy"><span className="eyebrow">Our point of view</span><h2>{t('home.manifestoTitle')}</h2><p>{t('home.manifestoBody')}</p><Link className="arrow-link" to="/shop">{t('common.explore')} <ArrowRight /></Link><div className="values"><div><Leaf /><span>Better materials</span></div><div><PackageCheck /><span>Mindful packaging</span></div><div><RefreshCw /><span>30-day returns</span></div></div></div></section>

    <section className="section category-section"><div className="section-heading"><div><span className="eyebrow">Find your everyday</span><h2>{t('home.categories')}</h2></div></div><div className="category-grid">{categories.map((category, index) => <Link key={category.key} to={`/shop?category=${category.key}`} className="category-card"><img src={category.image} alt="" /><div><span>0{index + 1}</span><h3>{t(`shop.${category.key}`)}</h3><ArrowRight /></div></Link>)}</div></section>

    <section className="newsletter"><div><span className="eyebrow">Lumina letters</span><h2>{t('home.newsletter')}</h2><p>{t('home.newsletterBody')}</p></div>{subscribed ? <p className="success-message">{t('home.subscribed')}</p> : <form onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }}><input type="email" required placeholder={t('home.email')} aria-label={t('home.email')} /><button type="submit">{t('home.subscribe')} <ArrowRight /></button></form>}</section>
  </>
}
