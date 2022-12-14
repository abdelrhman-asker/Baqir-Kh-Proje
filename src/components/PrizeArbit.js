import React from 'react'
import MainNav from './MainNav'
import MainFooter from './MainFooter'
import { Container, Row , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"


const PrizeArbit = () => {
  return (
    <div className='MainHomeExMainDiv'>
        <MainNav />

          <Container className='MainHomeRowFContExpand'>
          <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  شؤون التحكيم </h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>

            <Col xs='12' md="10" className='MainHomeRowSDivExpand'>
              <div className='MainHomeexpandDiv PrizeArbitDiv'> 
               
                
                  <span>
                  التحكــيم
                  </span>
                
                <h4>
                بعد التأكد من مطابقة الإنتاج المقدَم لنيل جوائز المؤسسة وفقاً للشروط المعلنة من الناحية الشكلية، يعرض على لجان التحكيم المؤلفة من المتخصصين في مجالات الجائزة، وتكون قرارات اللجان نهائية بعد اعتمادها من مجلس الجائزة العلمي. ويقوم مجلس الجائزة العلمي بتشكيل لجان تحكيم لجوائز كل دورة من دورات المؤسسة، تعمل وفق قواعد لائحة التحكيم.

                </h4>

                    <span>
                    لائحة التحكـيم:

                    </span>

                <h4>
                أولًا:يشكل مجلس الجائزة العلمي لجنة أو لجان تحكيم من ذوي الخبرة والكفاءة كل في مجاله.
                </h4>
                <h4>
                ثانيًا : يرأس جلسات لجنة التحكيم رئيس تختاره اللجنة من بين أعضائها في أول اجتماع لها، وفي ذات الاجتماع تختار اللجنة مقررها وتحدد أسلوب العمل الذي تسير عليه.
                </h4>
                <h4>
                ثالثًا : يبدأ عمل اللجنة اعتباراً من أول يوم بعد إغلاق باب التقدم لنيل الجائزة، وينتهي عملها بتسليم تقريرها في الموعد الذي يحدده مجلس الجائزة العلمي
                </h4>


                <h4>
                رابعًا : يقدم كل عضو تقريره الخاص مكتوباً معللاً، بأسلوب علمي موضوعي يفصّل فيه رأيه في تحديد الفائزين بالجائزة.
               
                </h4>


                <h4>
                خامسًا : تتخذ قرارات أي من لجان التحكيم بالأغلبية، وفي حالة تعادل الأصوات يرجح الجانب الذي يصوت له رئيسها.
               </h4>
                <h4>
                سادسًا : إذا تعذر حضور عضو اللجنة لأي ظرف طارئ يُكتفى بتقريره المكتوب وليس له حق الاعتراض.
               </h4>
                <h4>
                سابعًا : لجنة التحكيم سرية لا يعلن عن أسماء أعضائها، ولا يجوز لعضو اللجنة الإعلان عن نفسه أو عن نتائج التحكيم أو المداولات.
               </h4>
                <h4>
                ثامنًا : يتنحى عضو لجنة التحكيم عن العضوية في حالة تقدمه – أو أحد أقاربه من الدرجة الأولى لنيل الجائزة.
               </h4>
                <h4>
                تاسعًا : ترفع اللجنة تقريرها التفصيلي موقعاً من أعضائها إلى مجلس الجائزة العلمي الذي يتخذ فيه القرار النهائي وبموافقة الأمين العام للجائزة.
               </h4>

                  </div>
            </Col>
          
          </Container>
        
        <MainFooter />
    </div>
  )
}

export default PrizeArbit