import { useDispatch, useSelector } from "react-redux";
import { lougoutUser } from "../JS/Actions/authActions";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.AuthReducer.user || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="relative isolate bg-slate-50/50 px-6 py-16 sm:py-24 lg:px-8 min-h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Account Settings
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-2">
            My Profile
          </h1>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-xl shadow-slate-200/40 backdrop-blur-sm">
          <div className="flex flex-col items-center text-center pb-8 border-b border-slate-100">
            

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-5 capitalize tracking-tight">
              {user?.name || "User"}
            </h2>

            <span className="mt-2 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 border border-indigo-200/60 uppercase tracking-wide">
              {user?.role || "Member"}
            </span>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition-colors hover:bg-slate-50">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Email Address
              </p>
              <p className="mt-1 text-base font-semibold text-gray-900 truncate">
                {user?.email || "No email provided"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition-colors hover:bg-slate-50">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Phone Number
              </p>
              <p className="mt-1 text-base font-semibold text-gray-900">
                {user?.phone || "No phone provided"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition-colors hover:bg-slate-50">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Account Type
              </p>
              <p className="mt-1 text-base font-bold text-indigo-600 capitalize">
                {user?.role || "User"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition-colors hover:bg-slate-50">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Member Since
              </p>
              <p className="mt-1 text-base font-semibold text-gray-900">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })
                  : "August 2026"}
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex-1 inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-300 active:scale-[0.98] cursor-pointer">
              Edit Profile
            </button>

            <button onClick={() => dispatch(lougoutUser(navigate))} className="flex-1 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:text-red-600 hover:border-red-200 active:scale-[0.98] cursor-pointer">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
