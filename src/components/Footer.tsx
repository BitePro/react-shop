import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export function Footer() {
  const { t } = useTranslation()
  return <footer className="footer">
    <div className="footer-main"><div className="footer-brand"><Link className="logo light" to="/">LUMINA<span>.</span></Link><p>{t('footer.copy')}</p></div><div><h3>{t('footer.shop')}</h3><Link to="/shop">{t('shop.all')}</Link><Link to="/shop?category=apparel">{t('shop.apparel')}</Link><Link to="/shop?category=accessories">{t('shop.accessories')}</Link><Link to="/shop?category=footwear">{t('shop.footwear')}</Link></div><div><h3>{t('footer.help')}</h3><a href="#shipping">{t('footer.shipping')}</a><a href="#faq">{t('footer.faq')}</a><a href="#privacy">{t('footer.privacy')}</a></div><div className="social-links"><h3>Follow</h3><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight /></a><a href="https://www.pinterest.com" target="_blank" rel="noreferrer">Pinterest <ArrowUpRight /></a></div></div>
    <div className="footer-bottom"><span>© 2026 Lumina Goods</span><span>USD · Worldwide</span></div>
  </footer>
}
