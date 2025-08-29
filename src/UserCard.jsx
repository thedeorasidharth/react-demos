import { useDispatch, useSelector } from "react-redux";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function UserCard({ name, age, email, phone, address }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((favUser) => favUser.email === email);
  const { theme } = useContext(ThemeContext);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FROM_FAVORITES", payload: { email } });
    } else {
      dispatch({
        type: "ADD_TO_FAVORITES",
        payload: { name, age, email, phone, address },
      });
    }
  };

  return (
    <div
      className={`shadow-md rounded-xl p-4 border hover:shadow-lg transition flex flex-col justify-between 
      ${theme === "dark" ? "bg-gray-900 text-gray-100 border-gray-700" : "bg-white text-gray-800 border-gray-200"}`}
    >
      {/* Top: Name + Favorite */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <Star
          onClick={handleToggleFavorite}
          className={`w-6 h-6 cursor-pointer transition ${
            isFavorite ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
          }`}
        />
      </div>

      <p className="text-sm mt-2">
        <span className="font-medium">Age:</span> {age} |{" "}
        <span className="font-medium">Email:</span> {email}
      </p>

      {/* Show More → Navigate to UserDetails */}
      <div className="mt-3">
        <button
          onClick={() =>
            navigate(`/user/${email}`, {
              state: { user: { name, age, email, phone, address } },
            })
          }
          className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default UserCard;
