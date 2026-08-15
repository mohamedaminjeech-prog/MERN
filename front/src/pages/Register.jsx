import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../JS/Actions/authActions";

const Register = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(newUser, navigate));
  };

  return (
    <section className="isolate min-h-screen bg-white px-6 py-16 sm:py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-25 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
            Create your account
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Join the marketplace in a few quick steps.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600">
            Build your profile, discover trending products, and start exploring
            games and consoles designed for players like you.
          </p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <p className="text-sm text-gray-600">Already a member?</p>
            <Link
              to="/login"
              className="mt-3 inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Sign in
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleRegister}
          className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 sm:p-9"
        >
          <h2 className="text-3xl font-semibold text-gray-900">Register</h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill in your details to create your account.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                onChange={handleInputChange}
                name="firstName"
                type="text"
                required
                placeholder="John"
                className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                onChange={handleInputChange}
                name="lastName"
                type="text"
                required
                placeholder="Doe"
                className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                onChange={handleInputChange}
                name="email"
                type="email"
                required
                placeholder="example@email.com"
                className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                onChange={handleInputChange}
                name="phone"
                type="tel"
                required
                placeholder="+216 XX XXX XXX"
                className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                onChange={handleInputChange}
                name="password"
                type="password"
                required
                placeholder="********"
                className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <button className="mt-7 w-full rounded-xl bg-indigo-600 py-3 text-lg font-semibold text-white transition hover:bg-indigo-500">
            Register
          </button>

          <p className="mt-5 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
