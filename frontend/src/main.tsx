import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import ErrorPage from './ErrorPage';
import Main from './Layout/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signUp",
        element: <SignUp />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="p-4 h-screen flex items-center justify-center">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
