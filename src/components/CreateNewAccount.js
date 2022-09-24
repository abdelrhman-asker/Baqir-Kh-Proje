import React, { useState } from 'react'
import MainFooter from './MainFooter'
import FirstNav from './FirstNav'
import { Container , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Formik } from 'formik';

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
              <h3>   تسجيل حساب جديد     </h3>
                <span>
                  <img src={CircStyl} />
                </span>
                <br/>
               
              </div>
              <div className='ReqSpanTopDiv'>
              <span className='ReqSpanTop'>
                نرحب بك كعضو مسجل في موقعنا. نود أن نعلمك أن التسجيل معنا هي أولى الخطوات للتقدم على المنافسة في الجائزة. بعد تسجيل حسابك، يمكنك أن تقوم بالتقدم على واحدة من مجالات المنافسة.
                </span></div>
              </Col>
        <Col className='ContactMainData  SignInMainData' xs='11'  md="12">
            {/* <form onSubmit={handleSubmit} className='ContactMainForm SignInMainForm' href="/"> */}
            <form  className='ContactMainForm SignInMainForm' href="/">
        <div >
            <h4 className='PsuedoEleRed' href="Name">اسم المستخدم</h4>
            {/* <input value={user} onChange={(e) => setUser(e.target.value)} className='Styleinputwidth StyleinputwidthSign' placeholder='ادخل اسم المستخدم' id='Name' type="name" required  /> */}
            <input  className='Styleinputwidth StyleinputwidthSign' placeholder='الرجاء ادخال الاسم بالإنجليزي بدون مسافات ' id='Name' type="name" required  />
        </div>
        <div>
            <h4 className='PsuedoEleRed' href="Name"> كلمه المرور</h4>
            <input className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل  كلمه المرور ' id='Pass' type="password" required />
        </div>
        <div>
            <h4 className='PsuedoEleRed' href="Name">  تاكيد كلمه المرور</h4>
            <input  className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل كلمة المرور مرة أخرى ' id='Pass' type="password" required />
        </div>
        <div>
            <h4 className='PsuedoEleRed' href="Name">  البريد الإلكتروني</h4>
            <input className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل البريد الإلكتروني ' id='Pass' type="email" required />
        </div>
        <div>
            <h4 className='PsuedoEleRed' href="Name">   تاكيد البريد الإلكتروني </h4>
            <input className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل البريد الإلكتروني مرة أخرى ' id='Pass' type="email" required />
        </div>
        <div>
            <h4 className='PsuedoEleRed' href="Name">   ادخل اسمك الشخصي </h4>
            <input className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل اسمك بالعربي ' id='Pass' type="email" required />
        </div>
        <div>
 <FormGroup>
          <Label className='PsuedoEleRed' for="exampleDate">تاريخ الميلاد </Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>

        </div>
        <div>
        <h4 className='PsuedoEleRed' href="Name"> السيرة الذاتية</h4>
            <textarea className='StyleTextwidth' placeholder='يرجى كتابة 3-7 جمل على الأقل عنك وعن العمل الذي ستقدمه' id='Name' type="text" required />
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