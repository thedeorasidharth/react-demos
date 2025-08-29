import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./App.css";

const ITEMS_PER_PAGE = 5;

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); 

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
          if (!response.ok) {
            throw new Error("Failed to fetch data.");
          }
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

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredUsers.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  
  return (
    <div>
      <div className="p-4 flex flex-col items-center">
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); 
            }}
            className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
          />
        </div>
      </div>
      
      {error && <p className="text-center text-red-500 my-4">Error: {error}</p>}
      
      {loading ? (
        <p className="text-center my-8">Loading users...</p>
      ) : filteredUsers.length === 0 ? (
        <p className="text-center my-8">No users found matching your search.</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {currentItems.map((user, index) => (
              <UserCard
                key={user.email} 
                name={user.name}
                age={user.age}
                email={user.email}
                phone={user.phone}
                address={user.address}
              />
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4 my-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg shadow-md bg-gray-300 text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-lg">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg shadow-md bg-gray-300 text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
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