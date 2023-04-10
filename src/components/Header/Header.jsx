import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-4 py-4 mx-auto  sm:max-w-xl md:max-w-full  md:px-24 lg:px-72 py-6 flex justify-between main-bg rounded-lg">
      <div className="main-test-color nav-title ">JOBHUNTER</div>
      <div className="nav-link">
        <Link className="nav">Statics</Link>
        <Link className="nav">Applied Job</Link>
        <Link className="nav">Blog</Link>
      </div>
      <div>
        <button className="main-btn-color px-4 py-2">Start Applying</button>
      </div>
    </div>
  );
};

export default Header;
