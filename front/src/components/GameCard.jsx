import { useNavigate } from "react-router-dom";

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  if (!game) return null;

  return (
    <div
      onClick={() => navigate(`/Description/${game._id}`)}
      className="group w-full max-w-xs bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={ game.photo }
          alt={game.title }
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {game.title }
          </h2>

          <span className="text-indigo-600 font-bold text-lg">
            ${game.price}
          </span>
        </div>

        <p className="text-gray-500 mb-5 line-clamp-2 text-sm">
          {game.description || game.model}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/Description/${game._id}`);
          }}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 rounded-lg font-medium transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default GameCard;
