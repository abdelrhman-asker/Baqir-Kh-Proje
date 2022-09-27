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
              كلمة الإدارة التنفيذية       
                     </h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>

            <Col xs='12' md="11" className='MainHomeRowSDivExpand'>
              <div className='MainHomeexpandDiv SpeachTwoMainDiv'> 
                <h4 >
                تنطلق جائزة الشيخ باقر بوخمسين للإبداع المعرفي برؤية واضحة تكمن في الريادة في تكريم المبدعين في مجالات العلوم الانسانية والعلوم العملية والبحث العلمي والمبادرات المعرفية وتحفيزهم للوصول إلى درجات فائقة من الإبداع.
                </h4>
                
                <h4 >
                لقد اهتم مشروع الجائزة بالإضافة الى البعد الوطني الشامل المدعوم من رؤية المملكة 2030م ، إبراز الاحساء كمركز ثقافي مبدع  جامع ومستمر في العطاء .
                </h4>
                
                <h4 >
                ولقد اهتم مجلس إدارة الجائزة بتشيكل لجانه بعناية واختيار من يحظون بخبرات محلية وعالمية للمساهمه في عمل اللجان الادارية والفنية المختلفة وذلك لضمان ظهور مشروع الجائزة بالموضوعية والمهنية  لتكوين بذرة طيبة تُحدث مع مرور الأيام حراك إبداعي معرفي يتقاطع مع ويدعم التوجهات الوطنية.
                </h4>
                
                <h4 >
                ان طموح القائمين على مشروع الجائزة لن يتوقف على اختيار المبدعين والمتفوقين في مجالاتهم العلمية بل سيتعدى الى تاهيلهم للمشاركة في منافسات أوسع واشمل.
                </h4>
                
                <h4 >
                نتمنى النجاح لهذا المشروع الخير ونأمل المشاركة الواسعة والفعاله من الجميع.
                </h4>
                
                

                  </div>
            </Col>
          
          </Container>
        
        <MainFooter />
    </div>
  )
}

export default Speach2