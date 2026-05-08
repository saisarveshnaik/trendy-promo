import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="section-space">
      <div className="container-shell text-center">
        <h1 className="text-5xl font-semibold text-white">404</h1>
        <p className="mt-2 text-sm text-slate-300">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-4 inline-block rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-2.5 text-sm font-bold text-slate-950">
          Go to Homepage
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
