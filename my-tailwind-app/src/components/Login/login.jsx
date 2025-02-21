import React from "react";
import SignUpForm from "./form";

const Login = () => {
  return (
    <div className="bg-[#E4E2D6] h-screen w-screen flex ">
      <div className=" bg-[#766C40] h-full w-[48%] border-2  rounded-xl m-8">
        <img src="logo_1.svg" alt="login" className="w-[150px] h-[150px] m-4" />
        <div className="ml-10 font-libra text-white text-5xl">Sign up now:<br/>
        Learn the law in a fun and easy</div>
        <img src="red.svg" alt="play" className="w-[400px] ml-8 " />
        <div className="ml-10 font-libra text-white text-5xl"> way!</div>
        <div className="ml-10 mt-4 font-libra text-white text-md">Learn the law through fun games, stories, and quizzes. Get legal updates and access instant <br/> help anytime.</div>
        <img src="loginpic.svg" alt="play" className="w-[450px] ml-20 mt-8" />
        </div>
        <div className="mt-20" >
        <SignUpForm />
        </div>
    </div>
  );
};

export default Login;
