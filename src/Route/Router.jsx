import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import AddRecord from "../pages/Dashboard/AddRecord";
import MyRecordFile from "../pages/Dashboard/MyRecordFile";
import Home from "../components/Home";
import MyProfile from "../pages/Dashboard/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      { path: "my-profile", element: <MyProfile></MyProfile> },
      { path: "add-record", element: <AddRecord></AddRecord> },
      { path: "my-record-file", element: <MyRecordFile></MyRecordFile> },
    ],
  },
]);

export default router;
