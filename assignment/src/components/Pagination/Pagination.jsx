import { PropTypes } from 'prop-types';
import { getVisiblePages } from './utils';
import styles from './Pagination.module.css';

export function Pagination({totalElements, currentPage = 1, onPageChange}) {

  const totalPages = Math.ceil(totalElements / 5);
  const isFirstPage = (currentPage === 1);
  const isLastPage = (currentPage === totalPages);
  const maxVisiblePages = 5;

  const visiblePages = getVisiblePages(totalPages, maxVisiblePages, currentPage);

  return(
    <>
      <nav aria-label="Pagination Navigation" className={styles.paginationContainer}>
        <div className={styles.pagination}>
          {/* Previous Button */}
          <button 
            aria-label="Go to previous page"
            disabled={isFirstPage ? true : false}
            onClick={()=>{onPageChange(currentPage - 1)}}
          > &lt; &nbsp; Prev
          </button>
          
          {/* Page Numbers */}
          {visiblePages.map((page, index) =>
            page === "..." ? (
              <button 
                key={index} 
                className={styles.ellipsis}
                aria-label="More pages"
              >
                ...
              </button>
            ) : (
              <button
                key={index}
                className={(page === currentPage) ? styles.active : ''}
                onClick={() => onPageChange(page)}
                aria-label={`page ${page}`}
              >
                {page}
              </button>
            )
          )}

          {/* Next Button */}
          <button 
            disabled={isLastPage ? true : false}
            onClick={()=>{onPageChange(currentPage + 1)}}
            aria-label="Go to next page"
          > Next &nbsp; &gt;
          </button>
        </div>
      
    </nav>
    </>
  )
}

Pagination.propTypes = {
  totalElements: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};