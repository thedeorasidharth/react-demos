import { useSelector, useDispatch } from 'react-redux'; 
import UserCard from './UserCard';

function FavoritesPage() {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (email) => {
    dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      payload: { email }
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        favorites.map((user, index) => (
          <div key={user.email} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <UserCard
              name={user.name}
              age={user.age}
              email={user.email}
              phone={user.phone}
              address={user.address}
            />
            <button onClick={() => handleRemoveFromFavorites(user.email)} style={{ marginLeft: '10px', height: 'fit-content' }}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoritesPage;