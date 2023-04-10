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
      <div className="mt-36 mb-10">
        <h1 className="category-title">Featured Jobs</h1>
        <p className="category-des text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="job-container my-container grid grid-cols-2">
          <div className="job-card">
            <img
              className="mt-12 mb-10 job-img"
              src="../../../public/Logo/netflix-4 1.png"
              alt=""
            />
            <h2 className="job-name">Technical Database Engineer</h2>
            <p className="job-company">Google LLC</p>
            <div className=" main-text-color flex gap-4">
              <div className="job-type">Remote</div>
              <div className="job-type">Full Time</div>
            </div>
            <div className="job-location flex gap-4">
              <div>Dhaka, Bangladesh</div>
              <div>Salary : 100K - 150K</div>
            </div>
            <button className="job-btn">View Details</button>
          </div>
          <div className="job-card">
            <img
              className="mt-12 job-img"
              src="../../../public/Logo/netflix-4 1.png"
              alt=""
            />
            <h2 className="job-name ms-8">Technical Database Engineer</h2>
            <p className="job-company">Google LLC</p>
            <div className="job-type main-text-color flex gap-4">
              <div>Remote</div>
              <div>Full Time</div>
            </div>
            <div className="job-location flex gap-4">
              <div>Dhaka, Bangladesh</div>
              <div>Salary : 100K - 150K</div>
            </div>
            <button className="job-btn">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
