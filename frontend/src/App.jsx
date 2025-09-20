import React from 'react'
import Home from './pages/Home'
import Navbar from './componants/Navbar'
import MainRoutes from './pages/routes/MainRoutes'

const App = () => {
  return (
    <div className='h-screen w-screen text-2xl py-6 px-[2%] bg-gray-100 text-black '>
     <Navbar/>
     <MainRoutes/>
    </div>
  )
}

export default App