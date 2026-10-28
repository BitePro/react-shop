import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <div className="not-found"><span className="eyebrow">404</span><h1>Off the path.</h1><p>The page you are looking for has moved or no longer exists.</p><Link className="button dark" to="/">Back home</Link></div>
}
