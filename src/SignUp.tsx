// import React, { useState } from "react";

const LogIn = (): any => {
  return (
    <section className="h-screen w-screen bg-gradient-to-br from-[#c31432] to-[#240b36] flex justify-center items-center">
      <form className="w-[450px] h-[550px] border-2 border-[#F05941] p-10">
        <h2 className="text-[36px] text-center text-white">Sign Up</h2>
        <input
          type="text"
          name=""
          id="username"
          placeholder="User name"
          className="h-[40px] w-full outline-none rounded-lg bg-[#ff000048] px-5 text-lg my-10 text-white"
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="password"
          className="h-[40px] w-full outline-none rounded-lg bg-[#ff000048] px-5 text-lg mb-8 text-white"
        />

        <div className="flex justify-between text-white px-1">
          <span>
            <input type="checkbox" name="x" id="" />
            <p className="inline ml-3">show password</p>
          </span>
        </div>
        <button className="text-white w-full h-[40px] bg-[#ff000048] rounded-lg mt-[120px]">
          create
        </button>
      </form>
    </section>
  );
};
export default LogIn;
