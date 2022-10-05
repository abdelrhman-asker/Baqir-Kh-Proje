import React, { useState, useEffect } from 'react'
import MainFooter from './MainFooter'
import FirstNav from './FirstNav'
import { Container , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const SignIn = () => {
    
    
  const initialvalue = {username:"", email:"", password:"", conpassword:"" , conemail:"" ,texta:""};
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
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!values.username){
          errors.username = "Username is Required"
      }else if  (values.username.length < 8){
        errors.username = "username not Valid ( at least 9 characters )"

    }
      if (!values.email){
          errors.email = "email is Required"
      } else if (!regex.test(values.email)) {
          errors.email = "this isn`t a valid Email"

      }
      if (!values.conemail){
          errors.conemail = "Confirm email is Required"
      } else if (values.conemail !== values.email) {
          errors.conemail = "Please Check Your email"

      }
      if (!values.password){
          errors.password = "password is Required"
      } else if  (values.password.length < 4){
          errors.password = "password must be stronger ( at least 5 characters )"

      }
      if (!values.conpassword){
          errors.conpassword = "Please confirm your password is Required"
      } else if  (values.conpassword !== values.password){
          errors.conpassword = "Please Chech Your password"

      }
      if (!values.texta){
          errors.texta = "Please type your resume"
      } else if  (values.texta.split(" ").length < 3){
          errors.texta = "Please type 3-7 sentences"

      }
      return errors;
  };

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
            <form onSubmit={handleSubmit} className='ContactMainForm SignInMainForm' href="/">
        <div >
            <h4 className='PsuedoEleRed' href="Name">اسم المستخدم</h4>
            {/* <input value={user} onChange={(e) => setUser(e.target.value)} className='Styleinputwidth StyleinputwidthSign' placeholder='ادخل اسم المستخدم' id='Name' type="name" required  /> */}
            <input  name='username' onChange={handleChange} value={formValues.username}
            className='Styleinputwidth StyleinputwidthSign' placeholder='الرجاء ادخال الاسم بالإنجليزي بدون مسافات ' id='Name' type="text" required  />
        </div>
        <p>{formErrors.username}</p>

        <div>
            <h4 className='PsuedoEleRed' href="Name"> كلمه المرور</h4>
            <input name='password' value={formValues.password} onChange={handleChange} 
            className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل  كلمه المرور ' id='Pass' type="password" required />
        </div>
        <p>{formErrors.password}</p>

        <div>
            <h4 className='PsuedoEleRed' href="Name">  تاكيد كلمه المرور</h4>
            <input  name='conpassword' value={formValues.conpassword} onChange={handleChange}
            className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل كلمة المرور مرة أخرى ' id='Pass' type="password" required />
        </div>
        <p>{formErrors.conpassword}</p>

        <div>
            <h4 className='PsuedoEleRed' href="Name">  البريد الإلكتروني</h4>
            <input name='email' value={formValues.email} onChange={handleChange}
            className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل البريد الإلكتروني ' id='Pass' type="email" required />
        </div>
        <p>{formErrors.email}</p>

        <div>
            <h4 className='PsuedoEleRed' href="Name">   تاكيد البريد الإلكتروني </h4>
            <input name='conemail' value={formValues.conemail} onChange={handleChange}
            className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل البريد الإلكتروني مرة أخرى ' id='Pass' type="email" required />
        </div>
        <p>{formErrors.conemail}</p>

        <div>
            <h4 className='PsuedoEleRed' href="Name">   ادخل اسمك الشخصي </h4>
            <input className='Styleformwidth StyleinputwidthSign' placeholder=' ادخل اسمك بالعربي ' id='Pass' type="text" required />
        </div>
        <div>
 <FormGroup>
          <Label className='PsuedoEleRed' for="exampleDate">تاريخ الميلاد </Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>

        </div>
        <div>
        <h4 className='PsuedoEleRed' href="Name"> السيرة الذاتية</h4>
            <textarea name='texta' value={formValues.texta} onChange={handleChange}
            className='StyleTextwidth' placeholder='يرجى كتابة 3-7 جمل على الأقل عنك وعن العمل الذي ستقدمه' id='Name' type="text" required />
        </div>
        <p>{formErrors.texta}</p>


        <Col xs='12'  md="12" className='MainHomeRow' col={6}>
        <div className="submitButStyleDiv SignInButnDiv">
        <button  className="submitButStyle SignInButn " type="submit" formAction='/ProfileInfo' value="دخول">دخول</button>
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