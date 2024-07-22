import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import RecipeReviewCard from './components/recipereviewcard.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import './index.css'
import CustomizedTables from './components/CustomizedTables.jsx'
import CollapsibleTable from './components/CollapsibleTable.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CollapsibleTable />
    {/* <App /> */}
  </>,
)
