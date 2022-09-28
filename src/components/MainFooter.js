import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"
import RedhaLogo from "../photos/مؤسسة رضاء بوخمسين - شعار png.png"
import { Link } from "react-router-dom";


const MainFooter = () => {
  return (
    <div col={12} className='MainFooterdiv'>
      <Container col={12} className='MainFooterCont'>
        <Row className='FirstFooterCont' col={12}>
          <Col className='ColFooterCont' col={4}>
            <div className='ColFooterContDiv'>
            <h4>كلمات ترحيبية </h4>
              <div>
                
                <Link to="/Speach1">كلمه مجلس الامناء</Link>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              <div>
                
                <Link to="/Speach2">كلمة الإدارة التنفيذية</Link>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
            </div>
          </Col>


          <Col className='ColFooterCont' col={4}>
          <div className='ColFooterContDiv'>
            <h4> احدث المقالات</h4>
              <div>
                
                <Link to="/AboutSite">  عن الموقع</Link>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              <div>
                
                <Link to="/AppForms">  نماذج التقديم</Link>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
            </div>
          </Col>
          <Col className='ColFooterCont' col={4}>
          <div className='ColFooterContDiv'>
            <h4>روابط مهمة</h4>
              <div>
                
                <Link to="/PrivPol">   سياسة الخصوصية</Link>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Col className='LastImgFooter' col={12}>
          <img height="111px" src={RedhaLogo} />
        </Col>
        <Row className='LastFooterPara'>
          <h4>
           <span> جميع الحقوق محفوظه </span>
           <span>لمؤسسة رضاء حسن باقر ابوخمسين الوفقية  </span> 
          </h4>
        </Row>
      </Container>
    </div>
  )
}

export default MainFooter