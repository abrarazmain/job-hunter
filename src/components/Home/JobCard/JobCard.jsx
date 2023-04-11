import React from "react";
import { Link, useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    company_logo,
    company_name,
    remote_or_onsite,
    location,
    job_title,
    salary,
    fulltime_or_parttime,
    id,
  } = job;
  return (
    <div className="job-card my-3">
      <img className="mt-12 mb-10 job-img" src={company_logo} alt="" />
      <h2 className="job-name">{job_title}</h2>
      <p className="job-company">{company_name}</p>
      <div className=" main-text-color flex gap-4">
        <button className="job-type">{remote_or_onsite}</button>
        <button className="job-type">{fulltime_or_parttime}</button>
      </div>
      <div className="job-location flex gap-4">
        <div className="flex justify-center items-center gap-2 job-company">
          <span>
            <img src="../../../public/Icons/Frame-4.png" alt="" />
          </span>
          {location}
        </div>
        <div className="flex justify-center items-center gap-2 job-company">
          {" "}
          <span>
            <img src="../../../public/Icons/Frame.png" alt="" />
          </span>{" "}
          Salary : {salary}
        </div>
      </div>
      <Link to={`/jobs/${id}`}>
        <button className="job-btn px-4 py-3 mt-5 main-btn-color">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
