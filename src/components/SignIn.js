import React, { useState, useEffect } from 'react'
import MainFooter from './MainFooter'
import FirstNav from './FirstNav'
import { Container , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    
  const initialvalue = {username:"", email:"", password:""};
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
          navigate("/MainHome")

      }
  },[formErrors]);
  const validate = (values) => {
      const errors= {}
      // const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!values.username){
          errors.username = "Username is Required"
      }else if  (values.username.length < 8){
        errors.username = "username not Valid ( at least 9 characters )"

    }
      // if (!values.email){
      //     errors.email = "email is Required"
      // } else if (!regex.test(values.email)) {
      //     errors.email = "this isn`t a valid Email"

      // }
      if (!values.password){
          errors.password = "password is Required"
      } else if  (values.password.length < 4){
          errors.password = "password must be stronger ( at least 5 characters )"

      }
      return errors;
  };

  return (
    <div className='ContactMainDiv '>
        <FirstNav />
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}

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
            <form onSubmit={handleSubmit} href="/MainHome" className='ContactMainForm SignInMainForm' >
        <div >
            <h4 className='PsuedoEleRed' href="Name">اسم المستخدم</h4>
            <input name='username' onChange={handleChange} value={formValues.username}
              className='Styleinputwidth StyleinputwidthSign' placeholder='ادخل اسم المستخدم' id='Name' type="text" required  />
        </div>
        <p>{formErrors.username}</p>

        <div>
            <h4 className='PsuedoEleRed' href="Name"> كلمه المرور</h4>
            <input name='password' value={formValues.password} onChange={handleChange}
             className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل  كلمه السر ' id='Pass' type="password" required />
        </div>
        <p>{formErrors.password}</p>

        <div className='CheckboxDiv'>
        <input  type="checkbox" name="AddCheck" id="AddCheck" />
    <label  htmlFor="AddCheck"> تذكرني </label>

        </div>

        <Col xs='12'  md="12" className='MainHomeRow' col={6}>
        <div className="submitButStyleDiv SignInButnDiv">
        <button  className="submitButStyle SignInButn " type="submit"  >
        دخول
        </button>
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