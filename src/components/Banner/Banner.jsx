import React from "react";
import './Banner.css'
import bannerImg from '../../../public/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
  return (
    <div>
      <div className="px-4 py-6 lg:flex justify-center align-middle  mx-auto  sm:max-w-xl md:max-w-full  md:px-24 lg:px-72 py-6 main-bg">
        <div className="my-auto">
          <h1 className="banner-title">
            One Step <br /> Closer To Your{" "}
            <span className="main-text-color">Dream Job</span>
          </h1>
          <p className="banner-des py-4">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <button className="main-btn-color px-4 py-3">Get Started</button>
        </div>
        <div>
        <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
