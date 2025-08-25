function UserCard({ name, age, email }) {
  return (
    <div style={{
      border: "1px solid gray",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px",
      width: "250px"
    }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserCard;
