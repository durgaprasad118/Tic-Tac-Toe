import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Game from './Game';
import TicTacToe from './TicTacToe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/game',
    element: <Game />,
  },
  {
    path: '/tictactoe',
    element: <TicTacToe />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
