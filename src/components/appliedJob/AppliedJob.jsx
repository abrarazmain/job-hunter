import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedCard from "./AppliedCard";

const AppliedJob = () => {
  const [allJobs, setAllJobs] = useState([]);

  const loadedData = useLoaderData();

  useEffect(() => {
    const storedJobs = getShoppingCart();
    let cartJobs = [];
    if (loadedData) {
      for (const id in storedJobs) {
        const addedJobs =
          loadedData.jobs && loadedData.jobs.find((job) => job.id == id);
        console.log(addedJobs);

        cartJobs.push(addedJobs);
      }
      setAllJobs([...cartJobs]);
    }
  }, []);

  return (
    <div>
      {allJobs.map((job, i) => (
        <AppliedCard key={i} job={job}></AppliedCard>
      ))}
    </div>
  );
};

export default AppliedJob;
