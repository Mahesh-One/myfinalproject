import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './login'
import Navbar from './navbar'
import Register from './Register'
import Home from './Home'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
    </div>
  )
}