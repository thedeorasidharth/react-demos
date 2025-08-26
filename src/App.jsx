import { useState, useEffect } from "react";
import Header from "./Header";
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header title="Demo 4: React State with useState" />

      {loading ? (
        <p>Loading users...</p>
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
      )}
    </div>
  );
}

export default App;