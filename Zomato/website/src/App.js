import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Addresturant from './pages/Addresturant'
import Home from '../src/pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ViewRestaurant from './pages/ViewRestaurant'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/add-restaurant' element={<Addresturant/>}></Route>
      <Route path='/view-restaurant' element={<ViewRestaurant/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
