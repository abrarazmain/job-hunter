import React from "react";
import "./Category.css";

const Category = ({ category }) => {
  const { category_logo, category_name, jobs_available } = category;
  return (
    <div className="category-card">
      <div className="category-icon-container flex items-center justify-center align-middle">
        <img src={category_logo} alt="" />
      </div>
      <h2 className="category-name mt-5 mb-2">{category_name}</h2>
      <h2 className="category-des ">{jobs_available}</h2>
    </div>
  );
};

export default Category;
