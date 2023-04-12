import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./jobDetails.css";
import { addToDB, addToDb, getShoppingCart } from "../../fakedb";


// use local storage to manage cart data
const addToDb4 = id => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
      shoppingCart[id] = 1;
  }
  else {
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
  }
  localStorage.setItem('applied-job', JSON.stringify(shoppingCart));
}


const JobDetails = () => {
  const { jobID } = useParams();
  const { jobs } = useLoaderData();
  const job = jobs.find((job) => job.id == jobID);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    id,
    job_title,
    contact_information,
    location,
  } = job;

  return (
    <>
      <h1 className="text-center font-bold text-4xl my-12 main-text-color">
        JOB DETAILS
      </h1>
      <div className="my-container details-container grid grid-cols-2 gap-5">
        <div className="my-auto">
          <p className="font-bold my-3">
            JOB DESCRIPTION:{" "}
            <span className="thin-text">{job_description}</span>
          </p>
          <p className="font-bold my-3">
            JOB RESPONSIBILITY:{" "}
            <span className="thin-text">{job_responsibility}</span>
          </p>
          <p className="font-bold my-3">
            EDUCATIONAL REQUIREMENT:{" "}
            <span className="thin-text">{educational_requirements}</span>
          </p>
          <p className="font-bold my-3">
            EXPERIENCE: <span className="thin-text">{experiences}</span>
          </p>
        </div>
        <div className="details-card my-auto p-2">
          <h2 className="font-bold text-xl">Job Details</h2>{" "}
          <hr className="my-3" />
          <div className="flex items-center align-middle my-3 gap-2">
            <span>
              <img src="../../../public/Icons/Frame.png" alt="" />
            </span>{" "}
            <span className="bold-text">Salary:</span>{" "}
            <span className="thin-text">{salary}</span>
          </div>
          <div className="flex items-center align-middle my-3 gap-2">
            <span>
              <img src="../../../public/Icons/Frame.png" alt="" />
            </span>{" "}
            <span className="bold-text">Job Title:</span>{" "}
            <span className="thin-text">{job_title}</span>
          </div>
          <h2 className="font-bold text-xl my-4">Contact Information</h2>
          <hr className="my-3" />
          <div className="flex items-center align-middle my-3 gap-2">
            <span>
              <img src="../../../public/Icons/Frame-2.png" alt="" />
            </span>{" "}
            <span className="bold-text">Phone:</span>{" "}
            <span className="thin-text">{contact_information.phone}</span>
          </div>
          <div className="flex items-center align-middle my-3 gap-2">
            <span>
              <img src="../../../public/Icons/Frame-3.png" alt="" />
            </span>{" "}
            <span className="bold-text">Email:</span>{" "}
            <span className="thin-text">{contact_information.email}</span>
          </div>
          <div className="flex items-center align-middle my-3 gap-2">
            <span>
              <img src="../../../public/Icons/Frame-4.png" alt="" />
            </span>{" "}
            <span className="bold-text">Address:</span>{" "}
            <span className="thin-text">{location}</span>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={() => addToDb4(id)}
              className="main-btn-color px-4 py-2"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
