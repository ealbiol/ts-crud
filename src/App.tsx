import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';
import Users from './pages/Users';
import Posts from "./pages/Posts";
import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/posts",
    element: <Posts></Posts>
  },
  {
    path: "/users",
    element: <Users></Users>
  },

]);



function App() {
  return (
    <div>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
