import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-container flex justify-between main-bg">
      <div className="main-test-color ">CarearHub</div>
      <div className="">
        <Link className="nav">Statics</Link>
        <Link className="nav">Applied Job</Link>
        <Link className="nav">Blog</Link>
      </div>
      <div>
        <button className="main-btn-color px-4 py-3">Start Applying</button>
      </div>
    </div>
  );
};

export default Header;
