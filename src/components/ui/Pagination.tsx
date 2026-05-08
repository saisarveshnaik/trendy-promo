type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) {
    return null
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
      <button
        type="button"
        className="rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 disabled:opacity-40"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? 'page' : undefined}
          className={`h-10 min-w-10 rounded-full px-3 text-sm font-bold transition ${
            currentPage === page
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950'
              : 'border border-white/20 bg-white/[0.03] text-slate-200 hover:border-cyan-300/50'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 disabled:opacity-40"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination
