import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import GameCard from "../components/GameCard";
import AddGame from "../components/AddGame"; // أصلحنا الاسم هنا ليشير للألعاب
import { getAllgames } from "../JS/Actions/GameActions";

const MarketGame = () => {
  const load = useSelector((state) => state.GameReducer.load);
  const games = useSelector((state) => state.GameReducer.games || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllgames());
  }, [dispatch]);

  return (
    <div className="isolate bg-white px-6 py-16 sm:py-24 lg:px-8">
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

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Marketplace
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Game Market
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-gray-600">
              Discover fresh titles, trending picks, and standout digital
              experiences.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <AddGame />
          </div>
        </div>

        {load && (
          <div className="mt-8">
            <Loading />
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {games &&
            games.map((game) => <GameCard game={game} key={game._id} />)}
        </div>
      </div>
    </div>
  );
};

export default MarketGame;
