import React from 'react'
import MainNav from './MainNav'
import MainFooter from './MainFooter'
import CircStyl from "../photos/Rectangle 16.png"
import { Container, Row, Col } from 'reactstrap'


const ReqSteps = () => {
  return (
    <div className='ReqStepsMainDiv'>
        <MainNav />
    <Container className='ReqStepsMainCont' >
        <Row>
        <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>   خطوات التقديم علي الجائزة</h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>
        </Row>

        <Col xs="10" className='ReqStepsRowsMain'>
            {/* Pasuedo element */}
            <h3 className='ReqStepsHMain'>
                <span className='ReqStepsSpanMain'>1</span>
            (المشارك)
           
                الحصول على طلب الاشتراك في مسابقات الجائزة من الموقع الإلكتروني – نموذج رقم 1
                www.baqerawar.net 
            </h3>
            
         </Col>
        <Col xs="10" className='ReqStepsRowsMain'>
            {/* Pasuedo element */}
            <h3 className='ReqStepsHMain'>
            <span className='ReqStepsSpanMain'>2</span>
            مع التأكد من تعبئة وتوقيع النموذج بالكامل (المشارك)
            تعبئة نموذج رقم-1 وإرساله بالبريد إلى Admin1@baqeraward.net 
            </h3>
            
         </Col>
        <Col xs="10" className='ReqStepsRowsMain'>
            {/* Pasuedo element */}
            <h3 className='ReqStepsHMain'>
            <span className='ReqStepsSpanMain'>3</span>
                سيتم ارسال رسالة استلام الطلب عن طريق البريد الإلكتروني والرسائل النصية والموجود في نموذج طلب المشاركة (إدارة الجائزة ) 
            </h3>
            
         </Col>
        <Col xs="10" className='ReqStepsRowsMain'>
            {/* Pasuedo element */}
            <h3 className='ReqStepsHMain'>
            <span className='ReqStepsSpanMain'>4</span>
                مراجعة طلب المشاركة والتأكد من اكتمال النماذج وإعلام المشارك بالموافقة من عدمها عن طريق البريد الإلكتروني (إدارة الجائزة)
            </h3>
            
         </Col>
        <Col xs="10" className='ReqStepsRowsMain'>
            {/* Pasuedo element */}
            <h3 className='ReqStepsHMain'>
            <span className='ReqStepsSpanMain'>5</span>
                إرسال النموذج رقم 2 عن طريق البريد الإلكتروني إلى المرشح (إدارة الجائزة)
            </h3>
            
         </Col>
        <Col xs="10" className='ReqStepsRowsMain'>
            {/* Pasuedo element */}
            <h3 className='ReqStepsHMain'>
            <span className='ReqStepsSpanMain'>6</span>
            تعبئة نموذج رقم 2 والمختص بشروط ومتطلبات التقديم في مسابقات الجائزة لكل مجال وإرساله إلى 
            Admin1@baqeraward.net 
            </h3>
            
         </Col>
        <Col xs="10" className='ReqStepsRowsMain'>
            {/* Pasuedo element */}
            <h3 className='ReqStepsHMain'>
            <span className='ReqStepsSpanMain'>7</span>
                بعد اكمال متطلبات التقديم سيتم إرسال رسالة عن طريق البريد الإلكتروني بالموافقة على المشاركة من عدمها في المسابقة مع الإشارة إلى الفرع (إدارة الجائزة)
            </h3>
            
         </Col>
        <Col xs="10" className='ReqStepsRowsMain'>
            {/* Pasuedo element */}
            <h3 className='ReqStepsHMain'>
            <span className='ReqStepsSpanMain'>8</span>
                تحويل المشارك إلى منسق المجلس العلمي المختص والذي سيتابع المشارك (إدارة الجائزة)
            </h3>
            
         </Col>
       
    </Container>


        <MainFooter />
    </div>
  )
}

export default ReqSteps