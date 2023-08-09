import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            {/* Open drawer  */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            {/* use img */}
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[200px] h-[300px] bg-base-200  text-base-content">
            {/* Sidebar content here */}
            <li className="w-[150px] mb-3">
              <Link
                className="btn btn-xs btn-success text-white pb-4"
                to="/dashboard/my-profile"
              >
                My Profile
              </Link>
            </li>
            <li className="w-[150px]">
              <Link
                className="btn btn-xs btn-success text-white pb-4"
                to="/dashboard/add-record"
              >
                Add Record File
              </Link>
            </li>
            <li className="w-[150px] mt-4">
              <Link
                className="btn btn-xs btn-success text-white pb-4"
                to="/dashboard/my-record-file"
              >
                My Record file
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
