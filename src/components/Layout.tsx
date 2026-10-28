import { Outlet } from 'react-router-dom'
import { CartDrawer } from './CartDrawer'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return <><Header /><main><Outlet /></main><Footer /><CartDrawer /></>
}
