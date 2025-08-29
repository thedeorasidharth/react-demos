import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const ITEMS_PER_PAGE = 5;

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("users");
    if (localData) {
      setUsers(JSON.parse(localData));
      setLoading(false);
    } else {
      const fetchUsers = async () => {
        try {
          setLoading(true);
          const response = await fetch("/data.json");
          if (!response.ok) throw new Error("Failed to fetch data.");
          const data = await response.json();
          setUsers(data.users || []);
          setError(null);
          localStorage.setItem("users", JSON.stringify(data.users || []));
        } catch (err) {
          setError(err.message);
          setUsers([]);
        } finally {
          setLoading(false);
        }
      };
      fetchUsers();
    }
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full max-w-lg px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Error + Loading */}
      {error && <p className="text-center text-red-500 my-4">Error: {error}</p>}
      {loading ? (
        <p className="text-center text-gray-600">Loading users...</p>
      ) : filteredUsers.length === 0 ? (
        <p className="text-center text-gray-600">No users found matching your search.</p>
      ) : (
        <>
          {/* Users Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((user) => (
              <UserCard key={user.email} {...user} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg shadow bg-gray-300 text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-lg font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg shadow bg-gray-300 text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UsersPage;
