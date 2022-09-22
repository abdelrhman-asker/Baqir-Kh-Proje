import React from 'react'
import './App.css';
import MainHome from './components/MainHome';
import MainHomeExpand from './components/MainHomeExpand';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from "./components/Contact"
import { BrowserRouter, Route, Router, Routes, Link, NavLink } from 'react-router-dom'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHome />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/MainHomeExpand' element={<MainHomeExpand />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App