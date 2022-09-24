import React, { useState } from 'react'
import MainFooter from './MainFooter'
import FirstNav from './FirstNav'
import { Container , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"
import { Link } from "react-router-dom";

const SignIn = () => {
    
    
    // const [user, setUser] = useState("");
    // const handleSubmit= (e) => {
    //     e.preventDefault();
    //     console.log(user)
        
    // };

  return (
    <div className='ContactMainDiv '>
        <FirstNav />
        <Container className='ContactMainCont SignInMainCont'>
        <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>   تسجيل الدخول    </h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>
        <Col className='ContactMainData  SignInMainData' xs='11'  md="12">
            {/* <form onSubmit={handleSubmit} className='ContactMainForm SignInMainForm' href="/"> */}
            <form  className='ContactMainForm SignInMainForm' href="/">
        <div >
            <h4 className='PsuedoEleRed' href="Name">اسم المستخدم</h4>
            {/* <input value={user} onChange={(e) => setUser(e.target.value)} className='Styleinputwidth StyleinputwidthSign' placeholder='ادخل اسم المستخدم' id='Name' type="name" required  /> */}
            <input  className='Styleinputwidth StyleinputwidthSign' placeholder='ادخل اسم المستخدم' id='Name' type="name" required  />
        </div>
        <div>
            <h4 className='PsuedoEleRed' href="Name"> كلمه المرور</h4>
            <input className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل  كلمه السر ' id='Pass' type="password" required />
        </div>
        
        <div className='CheckboxDiv'>
        <input  type="checkbox" name="AddCheck" id="AddCheck" />
    <label  htmlFor="AddCheck"> تذكرني </label>

        </div>

        <Col xs='12'  md="12" className='MainHomeRow' col={6}>
        <div className="submitButStyleDiv SignInButnDiv">
        <input  className="submitButStyle SignInButn " type="submit" formAction='/ProfileInfo' value="دخول"/>
        </div>
              </Col>
              <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand SignInForgDiv'>
              <h3>  
                  هل نسيت كلمه المرور؟
                  <span>
                    <Link to="/ResetPassword">نسيت كلمه المرور...</Link>
                  </span>
                    </h3>
                
              </div>
              </Col>
              <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand SignInNewDiv'>
              <Link to="/CreateNewAccount">   تسجيل حساب جديد    </Link>
                
              </div>
              </Col>

        </form>
        </Col>
        


              </Container>
        <MainFooter />
    </div>
  )
}

export default SignIn