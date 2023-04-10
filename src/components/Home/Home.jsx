import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Category from "../category/Category";

const Home = () => {
  const { categories } = useLoaderData();
  console.log(categories);

  return (
    <div>
      <Banner></Banner>
      <div className="mt-36 mb-10">
        <h1 className="category-title">Job Category List</h1>
        <p className="category-des text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="category-container grid lg:grid-cols-4 my-container md:grid-cols-2 sm:grid-cols-1">
          {categories.map((category, i) => (
            <Category key={i} category={category}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
