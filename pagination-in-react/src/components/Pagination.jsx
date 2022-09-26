import React from "react";
import Pagination from "react-js-pagination";
export default function PaginationComponent({
  currentPage,
  limit,
  totalPosts,
  setCurrent,
}) {
  const handlePageChange = (pageNumber) => {
    setCurrent(pageNumber);
  };
  let pages = totalPosts / limit;
  return (
    <div>
      <Pagination
        activePage={currentPage}
        totalItemsCount={totalPosts}
        pageRangeDisplayed={pages}
        onChange={handlePageChange}
        activeClass="pagination-active"
        innerClass="pagination-button"
      />
    </div>
  );
}
