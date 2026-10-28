import { useEffect } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CartPage } from './pages/CartPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductPage } from './pages/ProductPage'
import { ShopPage } from './pages/ShopPage'
import { useCartStore } from './store/cartStore'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const { t } = useTranslation()
  const checkoutMessage = useCartStore((state) => state.checkoutMessage)
  const clearCheckoutMessage = useCartStore((state) => state.clearCheckoutMessage)

  useEffect(() => {
    if (!checkoutMessage) return
    const timer = window.setTimeout(clearCheckoutMessage, 5000)
    return () => window.clearTimeout(timer)
  }, [checkoutMessage, clearCheckoutMessage])

  return <>
    <ScrollToTop />
    <Routes><Route element={<Layout />}><Route index element={<HomePage />} /><Route path="shop" element={<ShopPage />} /><Route path="product/:slug" element={<ProductPage />} /><Route path="cart" element={<CartPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes>
    {checkoutMessage && <div className="toast"><CheckCircle2 /><span>{t('cart.demo')}</span><button onClick={clearCheckoutMessage}><X /></button></div>}
  </>
}
