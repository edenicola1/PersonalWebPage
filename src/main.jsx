import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import AboutMe from '../Components/AboutMe.jsx';
import MyProjects from '../Components/MyProjects.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/myprojects",
    element: <MyProjects />,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);
