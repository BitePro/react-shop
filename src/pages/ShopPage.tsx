import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { ProductGrid } from '../components/ProductGrid'
import { products } from '../data/products'
import type { ProductCategory } from '../types'

type SortOption = 'featured' | 'low' | 'high' | 'rating'

export function ShopPage() {
  const { t, i18n } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)
  const category = searchParams.get('category') || 'all'
  const query = searchParams.get('q') || ''
  const sort = (searchParams.get('sort') || 'featured') as SortOption

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams)
    if (!value || value === 'all' || value === 'featured') next.delete(key)
    else next.set(key, value)
    setSearchParams(next)
  }

  const result = useMemo(() => {
    const normalized = query.toLowerCase().trim()
    return products
      .filter((product) => category === 'all' || product.category === category)
      .filter((product) => !normalized || `${product.name.en} ${product.name.zh} ${product.description.en} ${product.description.zh}`.toLowerCase().includes(normalized))
      .sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : sort === 'rating' ? b.rating - a.rating : Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
  }, [category, query, sort])

  const categories: Array<'all' | ProductCategory> = ['all', 'apparel', 'accessories', 'footwear']

  return <div className="shop-page">
    <header className="shop-hero"><span className="eyebrow">Lumina edit · 2026</span><h1>{t('shop.title')}</h1><p>{t('shop.body')}</p></header>
    <div className="shop-toolbar">
      <div className="category-tabs">{categories.map((item) => <button className={category === item ? 'active' : ''} key={item} onClick={() => setParam('category', item)}>{t(`shop.${item}`)}</button>)}</div>
      <div className="shop-actions"><button className="filter-trigger" onClick={() => setFiltersOpen(true)}><SlidersHorizontal /> {t('common.filters')}</button><label><span>{t('common.sort')}</span><select value={sort} onChange={(event) => setParam('sort', event.target.value)}><option value="featured">{t('shop.sortFeatured')}</option><option value="low">{t('shop.sortLow')}</option><option value="high">{t('shop.sortHigh')}</option><option value="rating">{t('shop.sortRating')}</option></select></label></div>
    </div>
    <div className="catalog-layout">
      <aside className={`filter-panel ${filtersOpen ? 'open' : ''}`}><div className="filter-mobile-head"><h2>{t('common.filters')}</h2><button className="icon-button" onClick={() => setFiltersOpen(false)}><X /></button></div><div className="filter-group"><h3>{t('common.search')}</h3><label className="inline-search"><Search /><input value={query} onChange={(event) => setParam('q', event.target.value)} placeholder={t('shop.searchPlaceholder')} /></label></div><div className="filter-group"><h3>{t('home.categories')}</h3>{categories.map((item) => <label className="radio-row" key={item}><input type="radio" name="category" checked={category === item} onChange={() => setParam('category', item)} /><span>{t(`shop.${item}`)}</span></label>)}</div>{(query || category !== 'all') && <button className="text-button clear-button" onClick={() => setSearchParams({})}>{t('common.clear')}</button>}<button className="button dark full filter-done" onClick={() => setFiltersOpen(false)}>{t('common.viewAll')} ({result.length})</button></aside>
      <section className="catalog"><div className="catalog-meta"><span>{result.length} {t('common.results')}</span>{query && <span>“{query}”</span>}</div>{result.length ? <ProductGrid products={result} /> : <div className="empty-results"><Search /><h2>{t('shop.noResults')}</h2><button className="button outline" onClick={() => setSearchParams({})}>{t('common.clear')}</button></div>}</section>
    </div>
    {filtersOpen && <button className="overlay filter-overlay" aria-label="Close" onClick={() => setFiltersOpen(false)} />}
  </div>
}
