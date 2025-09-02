import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App.jsx';
import './App.css';
import { ThemeProvider } from './ThemeContext.jsx';

// Redux Store Setup
const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
};

const favoritesReducer = (state = initialState, action) => {
  let newState;
  
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      newState = {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
      localStorage.setItem('favorites', JSON.stringify(newState.favorites));
      return newState;
      
    case 'REMOVE_FROM_FAVORITES':
      newState = {
        ...state,
        favorites: state.favorites.filter(user => user.email !== action.payload.email)
      };
      localStorage.setItem('favorites', JSON.stringify(newState.favorites));
      return newState;
      
    default:
      return state;
  }
};

const store = createStore(favoritesReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);