import React, { useState, useEffect } from 'react'
import MainFooter from './MainFooter'
import FirstNav from './FirstNav'
import { Container , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"
import { Link, useNavigate } from "react-router-dom";


const ResetPassword = () => {
    const initialvalue = {email:""};
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
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        
        if (!values.email){
            errors.email = "email is Required"
        } else if (!regex.test(values.email)) {
            errors.email = "please correct your email"
  
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
          <h3>   استعادة كلمة المرور    </h3>
            <span>
              <img src={CircStyl} />
            </span>
          </div>
          </Col>
    <Col className='ContactMainData  SignInMainData' xs='11'  md="12">
        <form onSubmit={handleSubmit} href="/MainHome" className='ContactMainForm SignInMainForm ResetPassMainForm' >
    <div >
        <h4 className='PsuedoEleRed' href="Name">بريدك الإلكتروني </h4>
        <input name='email' onChange={handleChange} value={formValues.email}
          className='Styleinputwidth StyleinputwidthSign' placeholder='ستصلك رسالة عبر البريد الإلكتروني ' id='Name' type="email" required  />
    </div>
    <p>{formErrors.email}</p>

    
    <Col xs='12'  md="12" className='MainHomeRow' col={6}>
    <div className="submitButStyleDiv SignInButnDiv">
    <button  className="submitButStyle SignInButn ResetPassButn " type="submit"  >
    استعادة كلمة المرور 
    </button>
    </div>
          </Col>
          

    </form>
    </Col>
    


          </Container>
    <MainFooter />
</div>
  )
}

export default ResetPassword