import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="section-space">
      <div className="container-shell text-center">
        <h1 className="text-5xl font-semibold text-slate-900">404</h1>
        <p className="mt-2 text-sm text-slate-600">The page you are looking for does not exist.</p>
        <Link to="/" className="cta-primary mt-4 inline-block px-5 py-2.5 text-sm">
          Go to Homepage
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
