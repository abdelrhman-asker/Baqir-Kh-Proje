import React from 'react'
import './App.css';
import MainHome from './components/MainHome';
import MainHomeExpand from './components/MainHomeExpand';
import AboutBaqir from './components/AboutBaqir';
import ReqSteps from './components/ReqSteps';
import AboutUs from './components/AboutUs';
import PrizeCo from './components/PrizeCo';
import SignIn from './components/SignIn';
import ProfileInfo from './components/ProfileInfo';
import Partners from './components/Partners';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from "./components/Contact"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHome />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/MainHomeExpand' element={<MainHomeExpand />} />
          <Route path='/AboutBaqir' element={<AboutBaqir />} />
          <Route path='/ReqSteps' element={<ReqSteps />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/PrizeCo' element={<PrizeCo />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/ProfileInfo' element={<ProfileInfo />} />
          <Route path='/Partners' element={<Partners />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App