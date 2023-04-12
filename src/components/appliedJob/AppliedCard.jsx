import React from "react";
import { Link } from "react-router-dom";
import "./AppliedJob.css";

const AppliedCard = ({ job }) => {
  const {
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
      id,
    location,
    company_logo,
  } = job;

    return (
      <>
      
      <div className="my-container">
      <div className="applied-card flex justify-between align-middle items-center px-4">
        <div className="flex justify-center align-middle items-center">
          <div className="img flex justify-center item-center mt-8 ms-4 align-middle ">
            <img className="my-auto" src={company_logo} alt="" />
          </div>
          <div className="">
            <div>
              <div className="">
                <h2 className="job-name">{job_title}</h2>
                <p className="job-company">{company_name}</p>
              </div>
              <div className=" main-text-color flex gap-4">
                <button className="job-type">{remote_or_onsite}</button>
                <button className="job-type">{fulltime_or_parttime}</button>
              </div>
              <div className="flex">
                <div className="flex justify-center items-center gap-2 job-company">
                  {" "}
                  <span>
                    <img src="../../../public/Icons/Frame-4.png" alt="" />
                  </span>{" "}
                  Location : {location}
                </div>
                <div className="flex justify-center items-center gap-2 job-company">
                  {" "}
                  <span>
                    <img src="../../../public/Icons/Frame.png" alt="" />
                  </span>{" "}
                  Salary : {salary}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/jobs/${id}`}>
            <button className="job-btn px-4 py-3 mt-5 main-btn-color">
              View Details
            </button>
          </Link>
        </div>
      </div>
            </div>
            </>
  );
};

export default AppliedCard;
