// src/FavoritesPage.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

function FavoritesPage() {
  const favorites = useSelector(state => state.favorites);

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        favorites.map((user) => (
          <UserCard
            key={user.email}
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

export default FavoritesPage;