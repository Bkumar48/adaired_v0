import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./Pagination.scss";

const Pagination = (props) => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(props.itemsPerPage);
  const [totalItems, setTotalItems] = useState(props.itemsCount);

  useEffect(() => {
    setTotalItems(props.itemsCount);
    setPageLimit(props.itemsPerPage);
    setCurrentPage(1);
  }, [props.itemsCount, props.itemsPerPage]);

  useEffect(() => {
    let totalPages = Math.ceil(totalItems / pageLimit);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPages(pages);
  }, [totalItems, pageLimit]);

  return (
    <div className="pagination">
      <ul>
        <li className="button prev">
          <button disabled={currentPage === 1} onClick={props.onPrev}>
            <Icon icon="uil:angle-left" />
            Prev
          </button>
        </li>

        {pages.map((page) => (
          <li
            key={page}
            className={`number ${page === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </li>
        ))}

        <li className="button nxt">
          <button
            disabled={currentPage === pages.length}
            onClick={props.onNext}
          >
            Next
            <Icon icon="uil:angle-right" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
