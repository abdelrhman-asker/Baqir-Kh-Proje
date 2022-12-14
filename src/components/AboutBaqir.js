import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import MainFooter from './MainFooter'
import MainNav from './MainNav'
import CircStyl from "../photos/Rectangle 16.png"
import ShkBaqer from "../photos/ShkBaqer.png"

const AboutBaqir = () => {
  return (
    <div className='AboutBaqirMainDiv'>
        <MainNav />
        <Container className='MainHomeRowFContExpand'>
        <Col xs='11'  md="9" className='MainHomeRow' >
            <div  className='MainHomeRowFDivExpand'>
              <h3>   عن الشيخ باقر  </h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>

              <Col xs='12' md="10" className='MainHomeRowSDivExpand'>
              <div className='AboutBaqirDiv'> 

                <h4 >
                الشيخ باقر، العلامة والقاضي والأديب
                </h4>

                <h4 >
                العلامة الشيخ باقر بوخمسـين في سطور
                    “1333 – 1413 هـ”
                </h4>

                <h4 >
                وُلِد وتربّى الشيخ باقر في أسرةٍ علميّة، فأبوه الشيخ موسى بوخمسين، وجَدُّهُ الشيخ عبدالله، وجَدُّهُ الثاني الشيخ حسين، وجَدُّهُ الثالث الشيخ علي آل بوخمسين فالشيخ نشأ وترعرع في هذا البيت العلمي، ونهل من نمير عِلْمِ آبائه وأجداده. وقد لعبت عدة عوامل في تشكيل شخصيّة الشيخ باقر رحمه الله منها : المكانة الاجتماعية  والعلمية لأسرة بوخمسين، وتواصلها وارتباطها مع رجالات الدولة، فضلا عن نبوغ الشيخ وذكائه وتفوقه العلمي، وبذله وعطائه.
                </h4>
            <Row xs={12} className='AboutBaqirTextAImg'> 
            <Col className='AbuutBaqirShkBaqerCol' xs={5} md={5} >
                    <img className='AbuutBaqirShkBaqer' src={ShkBaqer} />
                </Col>
                <Col xs={6}  md={6}  className='AboutBaqirTextAImgLeft' >
                  <span>نشاطه الأدبي والعلمي:</span>
                
                <h4>
                لم يقتصر نشاط سماحة الشيخ الأدبي على الكتابة والتأليف والمشاركة في المنتديات الأدبية والعلمية، والكتابة في الصحف والمجلات التي عاصرها، بل تعدّاها إلى جمع مخطوطات الأدباء والعلماء في عصره، وممّن سبقه في محافظة الأحساء والحفاظ عليها. لقد ألَّف سماحته أكثر من (18 كتابًا) في ميادين وأغراض علمية وأدبية وتاريخية، منها خمسة أو ستة كتب. أدبية، وكتاب في الفلك.

                </h4>
               
                </Col>
                <Col xs={12}  md={11} className='BelowBqirPic'>
                    <span>توليه منصب القضاء:</span>

                <h4>
                كان رحمه الله القاضي المساعد لأستاذه السيد محمد السيد حسين العلي الذي كان كثيرا ما يحيل عليه القضايا للنظر والبت فيها، وبعد وفاة السيد محمد العلي رحمه الله صدر القرار بتاريخ 10/10/1388هـ بتعيينه رحمه الله لمنصب القضاء، لتبدأ مسيرته في هذا المجال لحوالي ربع قرن، اثبت خلالها جدارة وأهلية، حتى وافاه الأجل المحتوم وانتقل إلى رحمة الله تعالى.
                </h4>
                </Col>
            </Row>
                <span>  نشاطه الاجتماعي:</span>

                <h4>
                كان نشاطه الاجتماعي  متميزا على الصعيد المحلي والوطني على حد سواء، ومما جاء في ديوانه الشعري ” نغماتي” بمناسبة تولي المغفور له بإذن الله الملك سعود بن عبد العزيز آل سعود الحكم:
                  </h4>

                <h4>
                يــــا يـومَ ذكرى الـمجـدِ، والأمـجــادِ
                <br/>
                يــــا فــرحــــــة الأبـناء، والأجــداد
                <br/>
                ذكــــرى لها في الـنَّـفس أعظمُ مَوقـِــــع
                <br/>
                إذ أنـَّــــها من أعــــــظـم الأعــيـادِ
                <br/>
                يــــا مـبـعـثَ الآمـــــال، ذكـرُكَ عـــــاطــرٌ
                <br/>
                بالـفـخــــرِ، والإقــــــبال، والإســــــعادِ                                       </h4>

                  </div>
            </Col>
              </Container>
        <MainFooter />
    </div>
  )
}

export default AboutBaqir