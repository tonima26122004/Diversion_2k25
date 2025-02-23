import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase"; 
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();

  useEffect(() => {
    const typewriter = new Typewriter(document.getElementById("typewriter"), {
      strings: ["Get Started", "Create your account"],
      autoStart: true,
      loop: true,
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Signup successful");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="bg-[#E4E2D6] h-screen w-full flex overflow-y-clip font-libra">
      <div className="bg-[#766C40] w-[45%] border-2 rounded-xl m-4">
        <img src="logo_1.svg" alt="logo" className="w-[100px] h-[100px] m-4" />
        <div className="ml-10 text-white text-5xl">
          Sign up now:<br/>Learn the law in a fun and 
        </div>
        <img src="red.svg" alt="play" className="w-[400px] ml-8" />
        <div className="ml-10 text-white text-5xl">easy way!</div>
        <div className="ml-10 mt-4 text-white text-md">
          Learn the law through fun games, stories, and quizzes. Get legal updates and access instant help anytime.
        </div>
        <img src="loginpic.svg" alt="play" className="w-[400px] ml-20 mt-4" />
      </div>

      <div className="mt-10 w-1/2 flex flex-col justify-center items-center">
        <div id="typewriter" className="text-3xl font-bold text-gray-700 mb-4"></div>
        <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg w-[70%]">
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

          {/* Full Name Field */}
          <div className="mb-4 text-left">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-black bg-transparent rounded mt-1"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4 text-left">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-black bg-transparent rounded mt-1"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 text-left">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-2 border border-black bg-transparent rounded mt-1"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4 text-left">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border border-black bg-transparent rounded mt-1"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Signup Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-80 bg-[#766C40] text-white p-2 rounded-3xl mt-4"
            >
              Sign up →
            </button>
          </div>

          {/* Sign-in Link */}
          <p className="text-center mt-4">
            Already have an account?{" "}
            <button
              className="font-semibold"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Sign-in
            </button>
          </p>

          <div className="text-center mt-2">or</div>

          {/* Google Signup Button */}
          <div className="flex justify-center">
            <button className="border flex items-center justify-center mt-2 rounded-3xl hover:border-2 hover:border-black px-4 py-2">
              <img src="google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
