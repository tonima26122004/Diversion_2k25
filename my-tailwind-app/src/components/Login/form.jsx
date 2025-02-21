import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" h-screen  flex font-libra">
      <div className=" flex">
        <form className=" p-8 rounded-lg " onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold">Get Started</h1>
          <p className="text-gray-600">Create your account now</p>
          
          <label className="block mt-4 text-xl">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-[600px]  rounded p-2 mt-1 bg-transparent border-2 border-black"
            required
          />
          
          <label className="block mt-4 text-xl">E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[600px]  rounded p-2 mt-1 bg-transparent border-2 border-black"
            required
          />
          
          <label className="block mt-4 text-xl">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className=" w-[600px]  rounded p-2 mt-1 bg-transparent border-2 border-black"
            required
          /><br/>
          <span className="text-xs text-red-600">make a strong one</span>
          
          <label className="block mt-4 text-xl">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-[600px]  rounded p-2 mt-1 bg-transparent border-2 border-black"
            required
          />
          
          <button
            type="submit"
            className="w-80  bg-[#766C40] text-white p-2 rounded mt-4"
          >
            Sign up →
          </button>
          
          <p className="text-center mt-4">
            Already have an account? <span className="font-semibold">Sign-in</span>
          </p>
          <div className="text-center mt-2">or</div>
          
          <button className="w-full border flex items-center justify-center p-2 mt-2 rounded">
            <img src="google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
