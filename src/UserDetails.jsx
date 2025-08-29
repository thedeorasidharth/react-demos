import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function UserDetails() {
  const { email } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(location.state?.user || null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!user) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const found = users.find((u) => u.email === email);
      setUser(found || null);
    }
  }, [email, user]);

  if (!user) {
    return (
      <p className="text-center mt-20 text-gray-600 dark:text-gray-300 text-lg">
        User not found
      </p>
    );
  }

  return (
    <div
      className={`flex-1 min-h-screen flex flex-col items-center justify-center 
      ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"}`}
    >
      <img
        src="/user.png"
        alt={user.name}
        className="w-36 h-36 rounded-full border-4 border-indigo-500 shadow-md object-cover"
      />

      <h2 className="mt-4 text-2xl font-bold">{user.name}</h2>

      <div className="mt-4 space-y-2 text-center text-lg">
        <p><span className="font-medium">Age:</span> {user.age}</p>
        <p><span className="font-medium">Email:</span> {user.email}</p>
        <p><span className="font-medium">Phone:</span> {user.phone}</p>
        <p><span className="font-medium">Address:</span> {user.address}</p>
      </div>
    </div>
  );
}

export default UserDetails;
