import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedCard from "./AppliedCard";

const AppliedJob = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [tempAllJobs, setTempAllJobs] = useState([]);

  const loadedData = useLoaderData()

  useEffect(() => {
    const storedJobs = getShoppingCart()
    let cartJobs = []
    if (loadedData) {
      for (const id in storedJobs) {
        const addedJobs =loadedData.jobs&& loadedData.jobs.find((job) => job.id == id)
        cartJobs.push(addedJobs)
      }
      setAllJobs([...cartJobs])
      setTempAllJobs([...cartJobs])
    }
  }, [])
  // console.log(allJobs,tempAllJobs);



  return <div>
    {
      allJobs.map(job => <AppliedCard job={job}></AppliedCard>)
}
  </div>;
};

export default AppliedJob;
