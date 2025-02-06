import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from './pages/Login';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AppLayout from './pages/AppLayout';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Landing/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/home",
    element:<><AppLayout/></>
  }
  
]);
const App = () => {
  return (
    
      <RouterProvider router={router}/>
    
  )
}

export default App