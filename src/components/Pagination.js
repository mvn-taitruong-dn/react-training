import React from "react";

function Pagination(props) {
  const { page, onPageChange, pageList } = props;

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <ul className="pagination">
      <li className="pagination-item">
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Prev
        </button>
      </li>
      {pageList.map((indexPage) => (
        <li className="pagination-item" key={indexPage}>
          <button
            className={indexPage === page ? "active" : ""}
            onClick={() => handlePageChange(indexPage)}
          >
            {indexPage}
          </button>
        </li>
      ))}

      <li className="pagination-item">
        <button
          disabled={page === pageList.length}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
