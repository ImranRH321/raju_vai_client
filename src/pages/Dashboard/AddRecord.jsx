import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddRecord = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // send the to server
    if (!data) return alert("empty data not allowed");
    axios
      .post("https://server-file.vercel.app/add-record", data)
      .then((response) => {
        console.log("Data posted successfully:", response.data);
        if (response.data.insertedId) {
          Swal.fire("Good job JaRu vai !", "added new record file", "success");
          reset();
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error.message);
        // Handle the error if needed
      });
    //
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="font-semibold font-serif">
      <h2 className="text-3xl my-3 text-purple-400 ">
        Add Teeth Doctor User Record file
      </h2>
      <div className="w-full max-w-xs h-screen">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex gap-x-2 items-center justify-center">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs h-[30px]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex gap-x-2 items-center">
            <label htmlFor="specialization">Specialization:</label>
            <input
              type="text"
              id="specialization"
              {...register("specialization", {
                required: "Specialization is required",
              })}
              className="input input-bordered w-full max-w-xs h-[30px]"
            />
            {errors.specialization && (
              <p className="text-red-500 text-sm">
                {errors.specialization.message}
              </p>
            )}
          </div>

          <div className="flex gap-x-2 items-center">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  //   value: /^[0-9]{10}$/,
                  //   message: "Invalid phone number",
                },
              })}
              className="input input-bordered w-full max-w-xs h-[30px]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex gap-x-2 items-center">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              {...register("date", { required: "Date is required" })}
              className="input input-bordered w-full max-w-xs h-[30px]"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          <div className="flex gap-x-2 items-center">
            <label htmlFor="villageName"> village:</label>
            <input
              type="text"
              id="villageName"
              {...register("villageName", {
                required: "Village Name is required",
              })}
              className="input input-bordered w-full max-w-xs h-[30px]"
            />
            {errors.villageName && (
              <p className="text-red-500 text-sm">
                {errors.villageName.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-sm bg-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Save Record
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecord;
