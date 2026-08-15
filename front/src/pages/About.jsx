const About = () => {
  const stats = [
    { label: "Curated items", value: "1.2K+" },
    { label: "Satisfied players", value: "98%" },
    { label: "Fast support", value: "24/7" },
  ];

  const values = [
    {
      title: "Quality first",
      text: "We hand-pick premium games and gear to ensure every product meets the standards players expect.",
    },
    {
      title: "Player driven",
      text: "Every collection is designed around the real needs of gaming communities, from casual fans to pros.",
    },
    {
      title: "Simple experience",
      text: "A clean, friendly shopping journey helps users discover great finds without unnecessary friction.",
    },
  ];

  return (
    <div className="isolate bg-white px-6 py-20 sm:py-28 lg:px-8">
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

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
              About us
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Built for players who want more from their gaming world.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              We created this platform to make discovering great games,
              accessories, and digital experiences easier, faster, and more
              enjoyable for every kind of gamer.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/MarketGame"
                className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Explore market
              </a>
              <a
                href="/contact"
                className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:border-indigo-200 hover:text-indigo-600"
              >
                Contact us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-slate-50 p-5 text-center"
                >
                  <div className="text-3xl font-bold text-indigo-600">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-100">
                Our mission
              </p>
              <p className="mt-3 text-xl font-medium leading-8">
                To connect players with the best digital products and
                experiences in one inspiring place.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Why we exist
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              A better way to discover gaming essentials.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/50"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-lg font-bold text-indigo-700">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
