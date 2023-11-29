import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import Home from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  

  return (
    <div className='grid-container'>
      <Dashboard />
      <Header />
      <Home />
      <Login />
      <Footer />
    </div>
  )
}

export default App
