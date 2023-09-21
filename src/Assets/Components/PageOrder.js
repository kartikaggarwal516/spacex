import React, { memo } from "react";
import Pagination from "react-js-pagination";
import { useSelector, useDispatch } from "react-redux";
import { handlePageChange } from "../Actions/Actions";

const PageOrder = () => {
  const activePage = useSelector((state) => state.activePage);
  const dispatch = useDispatch();

  const handlePageChangeCallback = (pageNumber) => {
    dispatch(handlePageChange(pageNumber));
  };

  return (
    <div className="pagebox">
      <Pagination
        itemClass="page-item"
        linkClass="page-link"
        activePage={activePage}
        itemsCountPerPage={3}
        totalItemsCount={114}
        pageRangeDisplayed={5}
        onChange={handlePageChangeCallback}
      />
    </div>
  );
};

export default memo(PageOrder);
