import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"
import VisionLogo from "../photos/Saudi_Vision_2030_logo.png"
import HorzPic from "../photos/CirclesSmall.jpeg"
import ShkBaqer from "../photos/ShkBaqer.png"
import { Link } from "react-router-dom";
const MainHome = () => {
  return (
    <div className='MainHomeMAinDiv'>
        

          <Container  className='MainHomeCont'>
          <Col  xs="12" md="9" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDiv'>
              <h3>  التعريف بالجائزه</h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>

              <Col  xs="12" sm="10" md="9" >
             <div  className='MainHomeRowSDiv'>
              <h4> 
                هي جائزة تعنى بالشؤون الأدبية والعلمية، ودعم وتشجيع الإبداع المعرفي، تمنح بشكل دوري. أسست الجائزة للمساهمة في تطوير وإثراء المجتمع في مجالات الشعر والادب والعلوم الإنسانية والبحث العلمي والإنجازات العلمية.

              </h4>
              </div>
              </Col>
            <Col xs="12" md="9" className='MainHomeLinkCol'>
              <Link to="/MainHomeExpand" >متابعه القراءة</Link>
            </Col>

          </Container>

          <Col col={12} className='MainHomeSecCont'>
            <Row className='MainHomeSecRow'>
              <Col md="6">
              <img src={VisionLogo}  />
              </Col>
              <Col className='MainHomeColPressHere' md="6">
              <div className='PrevPressHereText'>خطوات التقديم علي الجائزة</div>
              <div>
                <Link to="/ReqSteps">اضغط هنا</Link>
              </div>
              </Col>
            </Row>
          </Col>
          

          <Col xs={12} xl={10}  className='MainHomeThirdCont'>
            <Row className='MainHomeThirdRow' xs={12}>
              <Col xs={6} md={5} className='MainHomeThirdLeftCol' >
              <div>
                <h3>
                الشيخ باقر، العلامة والقاضي والأديب
                </h3>
                <h4>

               
                وُلِد وتربّى الشيخ باقر في أسرةٍ علميّة، فأبوه الشيخ موسى بوخمسين، وجَدُّهُ الشيخ عبدالله، وجَدُّهُ الثاني الشيخ حسين، وجَدُّهُ الثالث الشيخ علي آل بوخمسين فالشيخ نشأ وترعرع في هذا البيت العلمي.
                <Link to="/AboutBaqir" className='LastLinkMainHome'> متابعة القراءة ….</Link>
                </h4>
                </div>
                <div className='MainHomeHorzPics' >
                  <img width="72px" height="25px" src={HorzPic} />
                </div>
              </Col>
              <Col className='MainHomeShkBaqerCol' xs={6} md={5} >
              <img className='MainHomeShkBaqer'  src={ShkBaqer}/>
              </Col>


            </Row>
          
          </Col>



    </div>
  )
}

export default MainHome