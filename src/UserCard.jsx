import { useState } from "react";
import { useDispatch } from 'react-redux'; 

function UserCard({ name, age, email, phone, address }) {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch(); 

  const handleToggleDetails = () => {
    setShowMore(!showMore);
  };

  const handleAddToFavorites = () => {
    dispatch({ 
      type: 'ADD_TO_FAVORITES',
      payload: { name, age, email, phone, address } 
    });
    alert(`${name} added to favorites!`);
  };

  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>
        Age: {age} | Email: {email}
      </p>

      {showMore && (
        <div className="user-details">
          <p>Phone: {phone}</p>
          <p>Address: {address}</p>
        </div>
      )}
      
      <button onClick={handleToggleDetails} className="toggle-button" style={{ marginRight: '10px' }}>
        {showMore ? "Show Less" : "Show More"}
      </button>

      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
  );
}

export default UserCard;