import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Category from "../category/Category";
import JobCard from "./JobCard/JobCard";

const Home = () => {
  const { categories } = useLoaderData();
  console.log(categories);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("jobs.json");
      const jobs = await data.json();
      setJobs(jobs);
    };
    fetchData();
  }, []);

  const newJobs = jobs.jobs;
  console.log(newJobs);
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
        <div className="job-container my-container grid xl:grid-cols-2 md:grid-cols-1">
          {newJobs &&
            newJobs.map((job) => <JobCard key={job.id} job={job}></JobCard>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
