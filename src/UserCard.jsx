// src/UserCard.jsx

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'; // useSelector import kiya

function UserCard({ name, age, email, phone, address }) {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();

  // useSelector se Redux store ke favorites ko lo
  const favorites = useSelector(state => state.favorites);

  // Check karo ki current user favorites list me hai ya nahi
  const isFavorite = favorites.some(favUser => favUser.email === email);

  const handleToggleDetails = () => {
    setShowMore(!showMore);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch({
        type: 'REMOVE_FROM_FAVORITES',
        payload: { email }
      });
      alert(`${name} removed from favorites!`);
    } else {
      dispatch({ 
        type: 'ADD_TO_FAVORITES',
        payload: { name, age, email, phone, address } 
      });
      alert(`${name} added to favorites!`);
    }
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

      <button onClick={handleToggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default UserCard;