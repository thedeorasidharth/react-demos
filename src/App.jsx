import { useState, useEffect } from "react";
import Header from "./Header";
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users || []); 
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setUsers([]); 
        setLoading(false);
      });
  }, []);

  const handleToggleList = () => {
    setShowList(!showList); 
  };

  return (
    <div>
      <Header title="Demo 5: Conditional Rendering" />
      
      <button onClick={handleToggleList}>
        {showList ? "Hide Users" : "Show Users"}
      </button>

      {showList && (
        loading ? (
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
        )
      )}
    </div>
  );
}

export default App;