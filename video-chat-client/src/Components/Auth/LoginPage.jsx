import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUser } from "../../Redux/Actions/action";
import { useNavigate } from "react-router-dom";
import { MdVideoCameraFront } from "react-icons/md";
import { registerNewUser } from "../../utils/wssConnection/wssConnection";

const LoginPage = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [username, setUsername] = useState("");

  let handleChange = e => {
    setUsername(e.target.value);
  };
  let handleSubmit = e => {
    e.preventDefault();

    console.log(username);
    registerNewUser(username);
    dispatch(CreateUser(username));
    navigate("/dashboard");
  };
  return (
    <section className="w-full h-screen mx-auto flex items-center bg-blue-300 shadow-lg ">
      <article className="w-1/5 h-3/5 bg-slate-400 mx-auto rounded-lg">
        <div className="form-group relative flex justify-center p-5">
          <MdVideoCameraFront className="w-32 h-24 absolute text-center fill-black" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full  h-full flex flex-col justify-center items-center"
        >
          <div className="form-group w-4/5 py-8">
            <lable htmlFor="username" className="font-bold text-xl uppercase">
              Username
            </lable>
            <input
              type="text"
              className="form-control w-full h-12 p-2 rounded-md"
              placeholder="Enter your name"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group w-4/5 py-8">
            <button className="bg-white w-full h-12 rounded-md uppercase  font-bold">
              Start VideoChat
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default LoginPage;
