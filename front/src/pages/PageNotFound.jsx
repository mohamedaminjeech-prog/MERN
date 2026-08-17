import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="relative isolate min-h-[70vh] overflow-hidden bg-white px-6 py-20 sm:py-28 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
              404 error
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Oops! This page is not in the lineup.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              The page you were looking for may have moved, been removed, or
              never existed. Let’s get you back to a safe spot in the
              marketplace.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                to="/"
                className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
              >
                Back to home
              </Link>
              <Link
                to="/MarketGame"
                className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-indigo-200 hover:text-indigo-600"
              >
                Browse games
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-4xl bg-linear-to-br from-indigo-100 via-violet-100 to-pink-100 blur-2xl" />
            <div className="rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                <span>status</span>
                <span className="rounded-full bg-red-100 px-2 py-1 text-red-600">
                  not found
                </span>
              </div>

              <div className="mt-8 text-[5rem] font-black leading-none text-indigo-600 sm:text-[7rem]">
                404
              </div>

              <div className="mt-8 space-y-3">
                {["Game catalog", "PS collection", "Customer support"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                        ✓
                      </span>
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
