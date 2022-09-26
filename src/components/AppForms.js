import React from 'react'
import MainNav from './MainNav'
import MainFooter from './MainFooter'
import { Container, Row , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"
import { Link } from 'react-router-dom'
const AppForms = () => {
  return (
    <div className='MainHomeExMainDiv'>
        <MainNav />

          <Container className='MainHomeRowFContExpand'>
          <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  نماذج التقديم 

              </h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>

            <Col xs='12' md="6" className='MainHomeRowSDivExpand'>
              <div className='MainHomeexpandDiv'> 
              <h4>
              لخطوات التقديم وتعبئة النماذج يرجى الإطلاع على الخطوات الإرشادية                
                  <Link to='/ReqSteps' >Admin1@baqeraward.net</Link>
                    </h4>

              <h4>
              نماذج التقديم ترسل إلى البريد الإلكتروني :
                                  <a href='mailto:Admin1@baqeraward.net' >
                    Admin1@baqeraward.net
                                            </a>
                    </h4>
                
                 
                
               
                  </div>
            </Col>
          
          </Container>
        
        <MainFooter />
    </div>
  )
}

export default AppForms