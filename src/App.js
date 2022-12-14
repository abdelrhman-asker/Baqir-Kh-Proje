import * as React from "react";
import './App.css';
import FirstHome from './components/FirstHome';
import MainHome from './components/MainHome';
import MainHomeExpand from './components/MainHomeExpand';
import AboutBaqir from './components/AboutBaqir';
import ReqSteps from './components/ReqSteps';
import AboutUs from './components/AboutUs';
import PrizeCo from './components/PrizeCo';
import SignIn from './components/SignIn';
import ProfileInfo from './components/ProfileInfo';
import Partners from './components/Partners';
import CreateNewAccount from './components/CreateNewAccount';
import Models from './components/Models';
import ChangePass from './components/ChangePass';
import ResetPassword from "./components/ResetPassword"
import Contact from "./components/Contact"
import PrizeQuest from "./components/PrizeQuest"
import PrizeNeeds from "./components/PrizeNeeds"
import PrizeArbit from "./components/PrizeArbit"
import Discretion from "./components/Discretion"
import Quotes from "./components/Quotes"
import HumanSc from "./components/HumanSc"
import MedicalSc from "./components/MedicalSc"
import AgrSc from "./components/AgrSc"
import EngSc from "./components/EngSc"
import AppForms from "./components/AppForms"
import Speach1 from "./components/Speach1"
import Speach2 from "./components/Speach2"
import AboutSite from "./components/AboutSite"
import PrivPol from "./components/PrivPol"


import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="*" element={<FirstHome />} />
          <Route path='/' element={<FirstHome />} />
          <Route path='/MainHome' element={<MainHome />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/MainHomeExpand' element={<MainHomeExpand />} />
          <Route path='/AboutBaqir' element={<AboutBaqir />} />
          <Route path='/ReqSteps' element={<ReqSteps />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/PrizeCo' element={<PrizeCo />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/ProfileInfo' element={<ProfileInfo />} />
          <Route path='/Partners' element={<Partners />} />
          <Route path='/CreateNewAccount' element={<CreateNewAccount />} />
          <Route path='/Models' element={<Models />} />
          <Route path='/ChangePass' element={<ChangePass />} />
          <Route path='/PrizeQuest' element={<PrizeQuest />} />
          <Route path='/PrizeNeeds' element={<PrizeNeeds />} />
          <Route path='/PrizeArbit' element={<PrizeArbit />} />
          <Route path='/Discretion' element={<Discretion />} />
          <Route path='/Quotes' element={<Quotes />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/HumanSc' element={<HumanSc />} />
          <Route path='/MedicalSc' element={<MedicalSc />} />
          <Route path='/AgrSc' element={<AgrSc />} />
          <Route path='/EngSc' element={<EngSc />} />
          <Route path='/AppForms' element={<AppForms />} />
          <Route path='/Speach1' element={<Speach1 />} />
          <Route path='/Speach2' element={<Speach2 />} />
          <Route path='/AboutSite' element={<AboutSite />} />
          <Route path='/PrivPol' element={<PrivPol />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App