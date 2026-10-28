import { useEffect, useState, type FormEvent } from 'react'
import { Globe2, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const openCart = useCartStore((state) => state.openCart)
  const count = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0))

  useEffect(() => {
    document.documentElement.lang = i18n.language === 'zh' ? 'zh-CN' : 'en'
  }, [i18n.language])

  const changeLanguage = () => {
    const next = i18n.language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(next)
    localStorage.setItem('lumina-language', next)
  }

  const submitSearch = (event: FormEvent) => {
    event.preventDefault()
    navigate(`/shop?q=${encodeURIComponent(search)}`)
    setSearchOpen(false)
    setMenuOpen(false)
  }

  return (
    <>
      <div className="announcement">{t('announcement')}</div>
      <header className="site-header">
        <button className="icon-button mobile-only" aria-label={t('common.menu')} onClick={() => setMenuOpen(true)}><Menu /></button>
        <Link className="logo" to="/">LUMINA<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink to="/">{t('nav.home')}</NavLink>
          <NavLink to="/shop">{t('nav.shop')}</NavLink>
          <a href="#story">{t('nav.story')}</a>
        </nav>
        <div className="header-actions">
          <button className="language-button" onClick={changeLanguage} aria-label="Change language"><Globe2 size={18} /><span>{i18n.language === 'zh' ? 'EN' : '中文'}</span></button>
          <button className="icon-button search-button" aria-label={t('common.search')} onClick={() => setSearchOpen(true)}><Search /></button>
          <button className="icon-button cart-button" aria-label={t('common.cart')} onClick={openCart}><ShoppingBag />{count > 0 && <span>{count}</span>}</button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-head"><Link className="logo" to="/" onClick={() => setMenuOpen(false)}>LUMINA<span>.</span></Link><button className="icon-button" onClick={() => setMenuOpen(false)}><X /></button></div>
        <nav>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>{t('nav.home')}</NavLink>
          <NavLink to="/shop" onClick={() => setMenuOpen(false)}>{t('nav.shop')}</NavLink>
          <a href="#story" onClick={() => setMenuOpen(false)}>{t('nav.story')}</a>
        </nav>
        <button className="mobile-language" onClick={changeLanguage}><Globe2 />{i18n.language === 'zh' ? 'English' : '中文'}</button>
      </div>
      {menuOpen && <button className="overlay" aria-label={t('common.close')} onClick={() => setMenuOpen(false)} />}

      <div className={`search-overlay ${searchOpen ? 'open' : ''}`}>
        <div className="search-inner">
          <div className="search-head"><span>{t('common.search')}</span><button className="icon-button" onClick={() => setSearchOpen(false)}><X /></button></div>
          <form onSubmit={submitSearch}><Search /><input autoFocus={searchOpen} value={search} onChange={(event) => setSearch(event.target.value)} placeholder={t('shop.searchPlaceholder')} /><button type="submit">{t('common.search')}</button></form>
        </div>
      </div>
    </>
  )
}
