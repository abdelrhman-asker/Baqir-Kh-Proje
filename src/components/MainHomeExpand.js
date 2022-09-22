import React from 'react'
import MainNav from './MainNav'
import MainFooter from './MainFooter'
import { Container, Row , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"

const MainHome = () => {
  return (
    <div className='MainHomeExMainDiv'>
        <MainNav />

          <Container className='MainHomeRowFContExpand'>
          <Col xs='11'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  التعريف بالجائزه</h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>

            <Col xs='11' md="6" className='MainHomeRowSDivExpand'>
              <div className='MainHomeexpandDiv'> 
                <h4 >
                ي جائزة تعنى بالشؤون الأدبية والعلمية، ودعم وتشجيع الإبداع المعرفي، تمنح بشكل دوري. أسست الجائزة للمساهمة في تطوير وإثراء المجتمع في مجالات الشعر والادب والعلوم الإنسانية والبحث العلمي والإنجازات العلمية
                </h4>
                
                  <span>مسمي الجائزة:</span>
                
                <h4>
                ولقد تم الاتفاق على تسميتها بــ “جائزة الشيخ باقر بوخمسين للإبداع المعرفي”، وذلك تقديراً لهذه الشخصية الوطنية وعطائها والتي أفنت عمرها في تشجيع ودعم العلم والعلماء وخدمة المجتمع والوطن.

                </h4>

                    <span>مقر اجائزة:</span>

                <h4>
                    يكون مقر ومركز نشاط الجائزة الرئيسي محافظة الأحساء.
                </h4>

                <span> النطاق الجغرافي للجائزة:</span>

                <h4>
                لمرحلة الأولى: محافظة الأحساء
                <br/>
                المرحلة الثانية: المنطقة الشرقية
                <br/>
                المرحلة الثالثة: المملكة العربية السعودية
                </h4>

                <span> تاريخ التأسيس: </span>

                <h4>
                هذا وقد اعتبر تاريخ 14 اكتوبر 2020 هو تاريخ تأسيس الجائزة وهو اليوم الذي عقد فيه الاجتماع التاسيسي الأول المعتمد لمجلس أمناء الجائزة وتم فيه الاتفاق على مشروع الجائزة وإطلاق أعمالها
               </h4>

                  </div>
            </Col>
          
          </Container>
        
        <MainFooter />
    </div>
  )
}

export default MainHome