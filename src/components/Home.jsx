import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data, "data");
    if (data.name === "raju" && data.password === "123") {
      navigate("/dashboard/my-profile");
      Swal.fire("Go to Your Dashboard");
    }
  };

  return (
    <div>
      <span>simple test ....</span> <br />
      <span>name=raju</span> <br />
      <span>password=123</span>
      <h2 className="text-3xl font-mono text-success font-semibold my-0">
        Teach Doctor
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[100%]">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Admin Name</span>
          </label>
          <input
            type="Secret name"
            placeholder="You Name .. "
            className="input input-bordered"
            {...register("name", { required: true })}
          />
          {/* em er  */}
          {errors.email?.type === "required" && (
            <p className="text-red-600">password is required</p>
          )}
        </div>
        {/*  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="your password"
            className="input input-bordered"
            {...register("password", { required: true })}
          />
          {/* em er  */}
          {errors.password?.type === "required" && (
            <p className="text-red-600">password is required</p>
          )}
        </div>
        {/*  */}
        <div className="form-control mt-3">
          <button type="submit" className="btn btn-sm btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
