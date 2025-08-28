import { configureStore } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
  }
};

const persistedState = loadState();

const userReducer = (state = { favorites: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      const isAlreadyFavorite = state.favorites.some(user => user.email === action.payload.email);
      if (isAlreadyFavorite) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(user => user.email !== action.payload.email),
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: userReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;