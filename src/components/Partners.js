import React from 'react'
import MainNav from './MainNav'
import MainFooter from './MainFooter'
import { Container , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"

const Partners = () => {
  return (
    <div className='MainHomeExMainDiv'>
        <MainNav />

          <Container className='MainHomeRowFContExpand'>
          <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  الشركاء والداعمين</h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>

            <Col xs='12' md="10" className='MainHomeRowSDivExpand'>
              <div className='MainHomeexpandDiv'> 
                <h4 >
                نسعى حالياً أن نستقطب الرعاة الداعمين المؤثرين من ذوي نظرة التقديرية للعلم والمعرفة والفنون والعمل الاجتماعي. نحن ندعوك لتتعاون معنا لاكتشاف الموهبة ورعاية التميز ودعم الإبداع، لتأصل مكانة مؤسستك في بناء الإنسان المتطلع إلى المعالي.                </h4>
                
                  </div>
            </Col>
          
          </Container>
        
        <MainFooter />
    </div>
  )
}

export default Partners