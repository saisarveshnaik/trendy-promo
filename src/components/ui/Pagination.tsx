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
        className="cta-secondary rounded-full px-4 py-2 text-sm disabled:opacity-40"
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
              ? 'cta-primary'
              : 'cta-secondary'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="cta-secondary rounded-full px-4 py-2 text-sm disabled:opacity-40"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination
