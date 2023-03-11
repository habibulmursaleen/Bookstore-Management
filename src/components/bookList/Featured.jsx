import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../../redux/filters/actions";
import "../../styles/style.css";

const Featured = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const { status } = filters;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className={`filter-btn ${status === "All" && "active-filter"}`}
            id="lws-filterAll"
            onClick={() => handleStatusChange("All")}
          >
            All
          </button>
          <button
            className={`filter-btn ${status === "Featured" && "active-filter"}`}
            id="lws-filterFeatured"
            onClick={() => handleStatusChange("Featured")}
          >
            Featured
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
