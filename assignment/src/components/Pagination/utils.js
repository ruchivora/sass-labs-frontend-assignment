export function getVisiblePages(totalPages, maxVisiblePages = 5, currentPage) {
  
  const pages = [];

  if (totalPages <= maxVisiblePages) {
    /* If total pages are less than or equal to max visible, show all */
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    /* Include the first page */
    pages.push(1);

    /* Add leading ellipsis if current page is far from the start */
    if (currentPage > 3) {
      pages.push("...");
    }

    /* Add pages around the current page */
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let index = start; index <= end; index++) {
      pages.push(index);
    }

    /* Add trailing ellipsis if current page is far from the end */
    if (currentPage < (totalPages - 2)) {
      pages.push("...");
    }

    /* Include the last page */
    pages.push(totalPages);
  }

  return pages;
};