import React from "react";
import SignUpForm from "./form";

const Login = () => {
  return (
    <div className="bg-[#E4E2D6] h-screen w-full flex overflow-y-clip ">
      <div className=" bg-[#766C40]  w-[45%] border-2  rounded-xl  m-4">
        <img src="logo_1.svg" alt="login" className="w-[100px] h-[100px] m-4" />
        <div className="ml-10 font-libra text-white text-5xl">Sign in now:<br/>
        Continue your journey and  </div>
        <img src="red.svg" alt="play" className="w-[400px] ml-8 " />
        <div className="ml-10 font-libra text-white text-5xl">stay informed!</div>
        <div className="ml-10 mt-4 font-libra text-white text-md">Welcome back! Dive right back into learning the law with fun games, <br/> stories, and quizzes. Stay updated and keep progressing with ease.</div>
        <img src="loginpic.svg" alt="play" className="w-[400px] ml-20 mt-4" />
        </div>
        <div className="mt-10" >
        <SignUpForm />
        </div>
    </div>
  );
};

export default Login;
