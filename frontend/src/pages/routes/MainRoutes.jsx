
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />


        
    </Routes>
  )
}

export default MainRoutes