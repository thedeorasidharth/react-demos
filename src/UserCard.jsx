import { useState } from "react";

function UserCard({ name, age, email, phone, address }) {
  const [showMore, setShowMore] = useState(false);
  
  const handleToggleDetails = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>
        Age: {age} | Email: {email}
      </p>

      {showMore && (
        <div className="user-details">
          <p>
            Phone: {phone}
          </p>
          <p>
            Address: {address}
          </p>
        </div>
      )}

      <button onClick={handleToggleDetails} className="toggle-button">
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default UserCard;