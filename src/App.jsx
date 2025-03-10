import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import Pagenotfound from './Pages/Pagenotfound'
import Allproject from './Pages/Allproject'
import Footer from './Components/Footer'

function App() {

  return (
    <>
  
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Allproject' element={<Allproject/>}/>
  <Route path='/Dashboard' element={<Dashboard/>}/>
  <Route path='/Login' element={<Auth/>}/>
  <Route path='/Register' element={<Auth register={true}/>}/>
  <Route path='*' element={<Pagenotfound/>}/>

  </Routes> 
  <Footer/>
    </>
  )
}

export default App
