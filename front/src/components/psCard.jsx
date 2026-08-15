import { useNavigate } from "react-router-dom";

const PsCard = ({ ps }) => {
  const navigate = useNavigate();

  if (!ps) return null;

  return (
    <div
      onClick={() => navigate(`/DescriptionPS/${ps._id}`)}
      className="group w-full max-w-xs bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={ps.photo}
          alt={`${ps.make} ${ps.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-4 left-4 bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
          CONSOLE
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-gray-900">{ps.make}</h2>

          <span className="text-indigo-600 font-bold text-lg">${ps.price}</span>
        </div>

        <p className="text-gray-500 mb-5">{ps.model}</p>

        <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-5">
          {ps.year && (
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {ps.year}
            </span>
          )}

          {ps.range && (
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {ps.range} km
            </span>
          )}

          {ps.transmission && (
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {ps.transmission}
            </span>
          )}
        </div>

        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 rounded-lg font-medium transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PsCard;
