import React from 'react'
import Addresturant from './pages/Addresturant'
import Home from '../src/pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/add-restaurant' element={<Addresturant/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
