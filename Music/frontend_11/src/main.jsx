import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import IndukProps from './pages/Induk-Props.jsx'
import Home from './pages/Home.jsx'
import LandingPage from './componen/LandingpPage.jsx'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* <Home /> */}
  </React.StrictMode>,
)
