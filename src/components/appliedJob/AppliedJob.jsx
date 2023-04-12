import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../fakedb";
import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
  const [jobId, setJobId] = useState([]);

  useEffect(() => {
    let newId = [];
    const test = localStorage.getItem("applied-job");
    newId.push(JSON.parse(test));
    setJobId(newId);
  }, []);

  const { jobs } = useLoaderData();
  console.log(jobs, jobId);

  return <div>hellow</div>;
};

export default AppliedJob;
