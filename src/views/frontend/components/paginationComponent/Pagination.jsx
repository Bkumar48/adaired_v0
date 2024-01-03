import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./Pagination.scss";

const Pagination = (props) => {
  const [pages, setPages] = useState([]);
  //   const [pageLimit, setPageLimit] = useState(props.itemsPerPage);
  //   const [totalItems, setTotalItems] = useState(props.itemsCount);

  //   useEffect(() => {
  //     setTotalItems(props.itemsCount);
  //     setPageLimit(props.itemsPerPage);
  //     setCurrentPage(1);
  //   }, [props.itemsCount, props.itemsPerPage]);

  useEffect(() => {
    let totalPages = Math.ceil(props.itemsCount / props.itemsPerPage);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPages(pages);
  }, [props.itemsCount, props.itemsPerPage]);

  return (
    <div className="pagination">
      <ul>
        <li className="button prev">
          <button onClick={props.onPrev}>
            <Icon icon="uil:angle-left" />
            Prev
          </button>
        </li>

        {pages.map((page) => (
          <li
            key={page}
            className={`number ${page === props.currentPage ? "active" : ""}`}
            onClick={() => props.onPageClick(page)}
          >
            {page}
          </li>
        ))}

        <li className="button nxt">
          <button
            disabled={props.currentPage === pages.length}
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
