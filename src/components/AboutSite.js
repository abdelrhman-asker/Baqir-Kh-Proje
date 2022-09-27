import React from 'react'
import MainNav from './MainNav'
import MainFooter from './MainFooter'
import { Container, Row , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"

const Speach2 = () => {
  return (
    <div className='MainHomeExMainDiv'>
        <MainNav />

          <Container className='MainHomeRowFContExpand'>
          <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  
              عن الموقع 
                </h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>

            <Col xs='12' md="11" className='MainHomeRowSDivExpand'>
              <div className='MainHomeexpandDiv SpeachTwoMainDiv'> 
                <h4 >
                هذا الموقع هو البوابة الإلكترونية الرسمية التي تنطلق منها الجائزة للتواصل مع عموم جمهورنا الكريم والذي من خلاله نهدف إلى التواصل معهم وإشراكهم في فعاليات الجائزة، وهو بإشراف وإدارة وتحرير إدارة الجائزة.
                </h4>
                
                <h4 >
                جائزة الشيخ باقر بوخمسين للإبداع المعرفي وهذا الموقع هما مبادرتان تتبعان لمؤسسة رضاء حسن باقر بوخمسين الوقفية. وهو صندوق اجتماعي خيري مرخص من قبل وزارة الموارد البشرية والتنمية الاجتماعية.                </h4>
                
                
                

                  </div>
            </Col>
          
          </Container>
        
        <MainFooter />
    </div>
  )
}

export default Speach2