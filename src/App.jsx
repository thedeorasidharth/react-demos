import { useState, useEffect } from "react";
import Header from "./Header";
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // JSON file se fetch karna
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header title="Demo-3: Props with JSON" />

      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            age={user.age}
            email={user.email}
          />
        ))
      )}
    </div>
  );
}

export default App;
