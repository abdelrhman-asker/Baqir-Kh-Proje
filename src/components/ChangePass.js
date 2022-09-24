import React from 'react'

import MainFooter from './MainFooter'
import MainNav from './MainNav'
import { Container, Row , Col, Table } from 'reactstrap'
import UserImage from "../photos/MoradUser.png"
import { VscEdit } from 'react-icons/vsc';
import CircStyl from "../photos/Rectangle 16.png"
import { Link } from "react-router-dom";

const Profileinfo = () => {
  return (
    <div  className='MainHomeExMainDiv'>
        <MainNav />
        <Container className='MainHomeRowFContExpand ProfileInfoMainCont'>
        <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  تغيير كلمه المرور</h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>
        <Col xs='12'  md="12" className='ProfAboRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
            <span className='ProfileInfoProfIco'>
                  <img src={UserImage} />
                  <span className='ProfileInfoEditico'>
                  <VscEdit /></span>
                </span>
                
              </div>
              </Col>
        <Col xs='12'  md="12" className='ProfAboRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  مرحبًا،مراد  </h3>
                
              </div>
              </Col>

              
              <Col className='ContactMainData  SignInMainData' xs='11'  md="12">
            
              <form  className='ContactMainForm SignInMainForm ChangePassFormEdit' href="/">

        <div>
            <h4 className='PsuedoEleRed' href="Name">  كلمه المرور الحاليه</h4>
            <input className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل  كلمه المرور الحاليه ' id='Pass' type="password" required />
        </div>
        <div>
            <h4 className='PsuedoEleRed' href="Name">  ادخل كلمه المرور الجديده</h4>
            <input  className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل كلمه المرور الجديده ' id='Pass' type="password" required />
        </div>
        <div>
            <h4 className='PsuedoEleRed' href="Name">  تاكيد كلمه المرور الجديده</h4>
            <input className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل كلمه المرور الجديده مره اخري ' id='Pass' type="password" required />
        </div>
       
       

        <Col xs='12'  md="12" className='MainHomeRow' col={6}>
        <div className="submitButStyleDiv SignInButnDiv">
        <input  className="submitButStyle SignInButn " type="submit" formAction='/ProfileInfo' value=" تغيير"/>
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
              

        </form>
        </Col>
               
               
              
              







        </Container>



        <MainFooter />
    </div>
  )
}

export default Profileinfo