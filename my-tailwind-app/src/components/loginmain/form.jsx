import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase"; // ✅ Ensure correct path

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/hub"); // Redirect to main page after login
    } catch (err) {
      setError("Failed to sign in. Please check your email and password.");
      console.error(err);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/hub"); // Redirect after successful login
    } catch (err) {
      setError("Failed to sign in with Google.");
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex font-libra">
      <div className="flex">
        <form className="p-8 rounded-lg" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold">Welcome back:</h1>
          <p className="text-black">Sign in to your account now</p>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <label className="block mt-4 text-xl">E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[600px] rounded p-2 mt-1 bg-transparent border-2 border-black"
            required
          />

          <label className="block mt-4 text-xl">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-[600px] rounded p-2 mt-1 bg-transparent border-2 border-black"
            required
          />

          <div className="flex items-center mt-4 border border-black bg-white p-1 rounded-md w-40">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2 h-4 w-4"
            />
            <label className="text-sm">Remember me</label>
          </div>

          <br />
          <button className="text-xs text-red-600">Forgot password?</button>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-80 bg-[#766C40] text-white p-2 rounded-3xl mt-4"
            >
              Sign in →
            </button>
          </div>

          <p className="text-center mt-4">
            Don't have an account?
            <button className="font-semibold" onClick={() => navigate("/signup")}>
              Sign up now
            </button>
          </p>
          <div className="text-center mt-2">or</div>
          <div className="flex justify-center">
            <button
              type="button"
              className="w-1/3 border flex items-center justify-center mt-2 rounded-3xl hover:border-2 hover:border-black"
              onClick={handleGoogleSignIn}
            >
              <img src="google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
