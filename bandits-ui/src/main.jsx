import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import RecipeReviewCard from './components/recipereviewcard.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <App /> */}
  </React.StrictMode>,
)
