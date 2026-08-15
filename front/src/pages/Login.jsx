import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../JS/Actions/authActions";

const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(user, navigate));
  };

  console.log(user);
  return (
    <section className="text-gray-600 body-font min-h-screen flex items-center">
      <div className="container px-5 py-24 mx-auto flex justify-center">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white rounded-lg shadow-md p-8"
        >
          <h1 className="text-3xl font-medium title-font text-gray-900 text-center mb-8">
            Welcome Back
          </h1>

          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              onChange={handleInputChange}
              name="email"
              type="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-2 px-4"
              placeholder="example@email.com"
            />
          </div>

          <div className="relative mb-6">
            <label className="leading-7 text-sm text-gray-600">Password</label>
            <input
              onChange={handleInputChange}
              name="password"
              type="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-2 px-4"
              placeholder="********"
            />
          </div>

          <button className="w-full text-white bg-indigo-500 border-0 py-3 px-6 hover:bg-indigo-600 rounded text-lg">
            Login
          </button>

          <p className="text-sm text-gray-500 text-center mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-500 cursor-pointer">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
