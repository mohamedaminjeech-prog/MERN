import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import DeletePs from "../components/DeletePs";
import EditPs from "../components/EditPs";
import { getpsById } from "../JS/Actions/PsActions";

const DescriptionPS = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const load = useSelector((state) => state.PsReducer.load);
  const ps = useSelector((state) => state.PsReducer.psDetails || {});
  const user = useSelector((state) => state.AuthReducer.user || {});
  const role = user?.role;

  useEffect(() => {
    dispatch(getpsById(id));
  }, [id, dispatch]);

  if (!load && !ps?._id) {
    return (
      <div className="flex h-[60vh] items-center justify-center p-5 text-center">
        <div className="rounded-3xl border border-slate-100 bg-white p-12 shadow-xl shadow-slate-100">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">PS not found</h1>
          <p className="mt-2 text-sm text-gray-500">
            The item you are looking for might have been removed or does not
            exist.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-indigo-500"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative isolate bg-slate-50/50 px-6 py-16 sm:py-24 lg:px-8 min-h-screen">
      {/* Background Decorative Blob */}
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

      <div className="mx-auto max-w-6xl">
        {/* Header / Back Button Bar */}
        <div className="mb-8 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3 text-slate-700 shadow-sm transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-600 hover:shadow-md cursor-pointer"
            title="Go back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 transition-transform group-hover:-translate-x-0.5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              Product Overview
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-1">
              PS Description
            </h1>
          </div>
        </div>

        {load && (
          <div className="mt-8 flex justify-center py-12">
            <Loading />
          </div>
        )}

        <section className="text-gray-600 body-font">
          <div className="container mx-auto px-0 py-0">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
              {/* Product Image Card */}
              <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/60">
                <div className="relative overflow-hidden group">
                  <img
                    src={ps?.photo}
                    alt={ps?.title || "PS image"}
                    className="h-[450px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Product Details Card */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-xl shadow-slate-200/40 backdrop-blur-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 capitalize tracking-tight">
                    {ps?.title || "PS"}
                  </h2>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-200/60">
                    In Stock
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-indigo-600 tracking-tight">
                    ${ps?.price ?? 0}
                  </span>
                  <span className="text-sm font-medium text-gray-400">USD</span>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    About this item
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {ps?.description ||
                      "No description available for this item yet."}
                  </p>
                </div>

                {/* Specs / Meta Grid */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:bg-slate-50">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      Title
                    </p>
                    <p className="mt-1 text-base font-semibold text-gray-900 capitalize truncate">
                      {ps?.title || "-"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:bg-slate-50">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      Price
                    </p>
                    <p className="mt-1 text-base font-bold text-indigo-600">
                      ${ps?.price ?? 0}
                    </p>
                  </div>
                </div>

                {/* Role-based Actions */}
                <div className="mt-10 pt-6 border-t border-slate-100">
                  {role === "admin" ? (
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="flex-1">
                        <EditPs id={ps?._id} ps={ps} />
                      </div>
                      <div className="flex-1">
                        <DeletePs id={ps?._id} />
                      </div>
                    </div>
                  ) : (
                    <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-300 active:scale-[0.98] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      Buy Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DescriptionPS;
