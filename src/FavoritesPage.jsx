import { useSelector } from "react-redux";
import UserCard from "./UserCard";

function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-8rem)] flex-col">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          My Favorites
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          No favorites added yet.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        My Favorites
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((user) => (
          <UserCard key={user.email} {...user} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
