import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';
import Users from './pages/Users';
import Posts from "./pages/Posts";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Outlet } from 'react-router-dom';
import Login from './pages/Login';
import AuthContext from './context/AuthContext';
import { User } from './types/User';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { basicUser } from './utils/BasicUser';


const LayoutWrapper = () => {
  return (
    <div className='border-1'>
      <Layout />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "/blog",
        element: <ProtectedRoute>
          <Posts />
        </ProtectedRoute>
      },
      {
        path: "/users",
        element: <ProtectedRoute>
          <Users />
        </ProtectedRoute>
      }, {
        path: '/',
        element: <Login />
      }
    ]
  }

]);

function App() {
  // Fill the context 'user'.
  const [user, setUser] = useState<User>(basicUser)
  useEffect(() => {
    const userStg = localStorage.getItem("user");
    const user = userStg ? JSON.parse(userStg) : undefined;
    if (user) {
      setUser(user);
    }
  }, [])

  return (
    <div className='dark:bg-black'>
      <AuthContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </div>

  );
}

export default App;
