const Home = () => {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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

      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
          New digital marketplace
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Discover your next favorite game and console.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Explore premium games, accessories, and the latest digital experiences
          in one modern marketplace built for enthusiasts.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/MarketGame"
            className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Explore Games
          </a>
          <a
            href="/MarketPs"
            className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:border-indigo-200 hover:text-indigo-600"
          >
            Browse PS Collection
          </a>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">
        {[
          {
            title: "Curated products",
            text: "Handpicked items and exclusive deals for gaming lovers.",
          },
          {
            title: "Fast checkout",
            text: "Smooth browsing and simple product discovery experience.",
          },
          {
            title: "Community trusted",
            text: "Built for players who want quality, value, and design.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
