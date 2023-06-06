import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import AboutMe from '../Components/AboutMe.jsx';
import MyProjects from '../Components/MyProjects.jsx';
import './index.css';

const router = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/myprojects",
    element: <MyProjects />,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterProvider router={router} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
