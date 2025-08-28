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
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); 
        }}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px' }}
      />
      
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      
      {loading ? (
        <p>Loading users...</p>
      ) : filteredUsers.length === 0 ? (
        <p>No users found matching your search.</p>
      ) : (
        <>
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

          <div className="pagination-container">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UsersPage;