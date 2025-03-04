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
import Detail from './pages/Detail';
import Search from './pages/Search';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import Profile from './pages/Profile';
import Cart from './pages/Cart';



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
    element:<><AppLayout/></>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"detail",
        element:<Detail/>
      },
      
      {
        path:"search",
        element:<Search/>
      },
      {
        path:"cart",
        element:<Cart/>
      }
      
    ]
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  
  
  
]);
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>

    
  )
}

export default App