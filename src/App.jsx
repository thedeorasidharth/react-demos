// src/App.jsx

import { useState, useEffect } from "react";
import Header from "./Header";
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data.json");
        
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        
        const data = await response.json();
        setUsers(data.users);
        setError(null); 
      } catch (err) {
        setError(err.message); 
        setUsers([]); 
      } finally {
        setLoading(false); 
      }
    };

    fetchUsers();
  }, []); 

  return (
    <div>
      <Header title="Demo 6: React Hooks (useEffect + useState)" />

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {loading ? (
        <p>Loading users...</p>
      ) : (
        users.length === 0 ? (
          <p>No Data Found!</p>
        ) : (
          users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              age={user.age}
              email={user.email}
              phone={user.phone}
              address={user.address}
            />
          ))
        )
      )}
    </div>
  );
}

export default App;