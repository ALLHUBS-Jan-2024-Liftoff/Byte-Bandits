import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import { createTheme } from '@mui/material'
import MealPrep from './pages/Account/MealPrep.jsx'
import Account from './pages/Account/Index.jsx'


const Layout = () =>{
  return (
    <div className='Container'>
     <Header />
     <Outlet />
    
    </div>
  )
}

const router = createBrowserRouter([{
  path:'/',
  element:<Layout />,
  children:[{
    path:'/',
    element:<App />
  },{
    path:'/about',
    element:<About />
  },
  {
    path:'/account/meal-prep',
    element:<MealPrep />
  },
  {
    path:'/account',
    element:<Account />
  },
  // {
  //   path:'/',
  //   element:<App />
  // },
  // {
  //   path:'/',
  //   element:<App />
  // },
  // {
  //   path:'/',
  //   element:<App />
  // }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);
