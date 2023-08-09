import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const MyRecordFile = () => {
  //
  const {
    data: myRecordFileData,
    isLoading,
    error,
  } = useQuery(["my record file"], async () => {
    const res = await axios.get("https://server-file.vercel.app/my-record-file");
    return res.data;
  });
  //
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //
  //  table data found
  /* 
               <tr>
              <th>All</th>
              <td>Name</td>
              <td>date</td>
              <td>phone</td>
              <td>specialization</td>
              <td>villageName</td>
            </tr>
            <tr key={data._id}>
                <th>{i + 1}</th>
                <td>{data.name}</td>
                <td>{data.date}</td>
                <td>{data.phone}</td>
                <td>{data.specialization}</td>
                <td>{data.villageName}</td>
              </tr>
  */
  return (
    <div className="w-full h-screen p-5 font-semibold font-serif">
      <h1 className="text-2xl text-primary mb-4">
        My Record file {myRecordFileData?.length || []}{" "}
      </h1>
      {/*  */}
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr className="border">
              <th className="border">All</th>
              <td className="border">Name</td>
              <td className="border">date</td>
              <td className="border">phone</td>
              <td className="border">specialization</td>
              <td className="border">villageName</td>
            </tr>
          </thead>
          <tbody>
            {myRecordFileData.map((data, i) => (
              <tr key={data._id}>
                <th className="border">{i + 1}</th>
                <td className="border">{data.name}</td>
                <td className="border">{data.date}</td>
                <td className="border">{data.phone}</td>
                <td className="border">{data.specialization}</td>
                <td className="border">{data.villageName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*  */}
    </div>
  );
};

export default MyRecordFile;
