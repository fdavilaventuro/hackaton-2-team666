const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div>
        {pageNumbers.map(page => (
          <button key={page} onClick={() => onPageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    );
  };
  
  interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }

export default Pagination