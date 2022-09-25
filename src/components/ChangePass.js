import React, { useState, useEffect } from 'react'

import MainFooter from './MainFooter'
import MainNav from './MainNav'
import { Container, Row , Col, Table } from 'reactstrap'
import UserImage from "../photos/MoradUser.png"
import { VscEdit } from 'react-icons/vsc';
import CircStyl from "../photos/Rectangle 16.png"
import { Link, useNavigate } from "react-router-dom";

const ChangePass = () => {

  const initialvalue = {password:"", conpassword:"" ,newpassword:""};
  const [formValues, setFormValues]= useState(initialvalue);
  const [formErrors, setFormErrors]= useState({});
  const [isSubmit, setIsSubmit]= useState(false);
  const handleChange = (e) => {
      const {name,value} = e.target
      setFormValues({...formValues,[name]:value});
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
  };
  useEffect(() => {
      console.log(formErrors)
      if(Object.keys(formErrors).length === 0 && isSubmit ){
          console.log(formValues)
          navigate("/ProfileInfo")

      }
  },[formErrors]);
  const validate = (values) => {
      const errors= {}
      
      if (!values.password){
          errors.password = "password is Required"
      } else if  (values.password.length < 4){
          errors.password = "password must be stronger ( at least 5 characters )"

      }
      if (!values.newpassword){
          errors.newpassword = "Please confirm your password is Required"
      } else if  (values.newpassword.length < 4){
        errors.newpassword = "password must be stronger ( at least 5 characters )"

      }
      if (!values.conpassword){
          errors.conpassword = "Please confirm your password is Required"
      } else if  (values.conpassword !== values.newpassword){
          errors.conpassword = "Please Chech Your password"

      }
      return errors;
  };
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
            
              <form onSubmit={handleSubmit}  className='ContactMainForm SignInMainForm ChangePassFormEdit' href="/">

        <div>
            <h4 className='PsuedoEleRed' href="Name">  كلمه المرور الحاليه</h4>
            <input name='password' value={formValues.password} onChange={handleChange} 
             className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل  كلمه المرور الحاليه ' id='Pass' type="password" required />
        </div>
        <p>{formErrors.password}</p>

        <div>
            <h4 className='PsuedoEleRed' href="Name">  ادخل كلمه المرور الجديده</h4>
            <input name='newpassword' value={formValues.newpassword} onChange={handleChange} 
             className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل كلمه المرور الجديده ' id='Pass' type="password" required />
        </div>
        <p>{formErrors.newpassword}</p>

        <div>
            <h4 className='PsuedoEleRed' href="Name">  تاكيد كلمه المرور الجديده</h4>
            <input name='conpassword' value={formValues.conpassword} onChange={handleChange} 
             className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل كلمه المرور الجديده مره اخري ' id='Pass' type="password" required />
        </div>
        <p>{formErrors.conpassword}</p>

       

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

export default ChangePass