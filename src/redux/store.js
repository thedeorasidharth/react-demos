import { createStore } from 'redux';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined; 
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};

const initialState = {
  favorites: [],
};

function userReducer(state = initialState, action) {
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
    default:
      return state;
  }
}

const persistedState = loadState();

const store = createStore(
  userReducer,
  persistedState 
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;