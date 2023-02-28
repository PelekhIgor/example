import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom"
import LoginPage from "./login-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate replace to="/login"/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals()