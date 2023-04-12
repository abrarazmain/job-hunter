import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";
import JobDetails from "./components/jobDetails/JobDetails";
import AppliedJob from "./components/appliedJob/AppliedJob";
import Charts from "./components/Charts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("category.json"),
      },
      {
        path: "jobs/:jobID",
        element: <JobDetails></JobDetails>,
        loader:()=> fetch('jobs.json')
      },
      {
        path: 'appliedJob',
        element: <AppliedJob></AppliedJob>,
        loader:()=>fetch('jobs.json')
      }, {
        path: 'charts',
        element:<Charts></Charts>
      }
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
