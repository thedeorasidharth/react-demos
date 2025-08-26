import { useState } from "react";

function UserCard({ name, age, email, phone, address }) {
  const [showMore, setShowMore] = useState(false);

  const handleToggleDetails = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "300px",
      }}
    >
      <h3>{name}</h3>
      <p>
        Age: {age} | Email: {email}
      </p>

      {showMore && (
        <div style={{ marginTop: "10px" }}>
          <p>
            Phone: {phone}
          </p>
          <p>
            Address: {address}
          </p>
        </div>
      )}

      <button onClick={handleToggleDetails} style={{ marginTop: "10px" }}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default UserCard;