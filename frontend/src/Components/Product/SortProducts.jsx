import React from "react";

const SortByPrice = ({ sorting, setSorting }) => {
  // Handle the change event when the sorting option is selected
  const handleSortChange = (e) => {
    setSorting(e.target.value);
  };

  return (
    <div className="sorting d-flex justify-content-end mb-3 pb-5 ms-3">
      <label htmlFor="sort-select">تصنيف حسب</label>
      <select id="sort-select" onChange={handleSortChange} value={sorting}>
        <option className="option" value="low-price">
          الأقل سعرًا
        </option>
        <option className="option" value="high-price">
          الأعلى سعرَا{" "}
        </option>
      </select>
    </div>
  );
};

export default SortByPrice;
