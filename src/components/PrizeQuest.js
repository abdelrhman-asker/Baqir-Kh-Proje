import React from 'react'
import MainNav from './FirstNav'
import MainFooter from './MainFooter'
import { Container, Row , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"

const PrizeQuest = () => {
  return (
    <div className='MainHomeExMainDiv '>
        <MainNav />
        <Container className='MainHomeRowFContExpand'>
          <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  
              الرؤية والرسالة والأهداف 
              </h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>

            <Col xs='12' md="6" className='MainHomeRowSDivExpand'>
              <div className='MainHomeexpandDiv'> 
                  <span>
                  الرؤية والرسالة والأهداف

                  </span>
                  <span>
                  الرؤية:

                  </span>

                <h4 >
                الريادة في تكريم وإبراز إنجازات المبدعين من أبناء الوطن في مجال “الشعر والأدب، والبحث العلمي والتقني، والمبادرات المعرفية”، وتحفيزهم للوصول إلى درجات فائقة من الإبداع.
                </h4>
                
                
                

                    <span>
                    الرسالة:
                      </span>

                <h4>
                تعميق مفاهيم التميز والإبداع، من خلال تبنّي المعايير العالمية، والتشجيع على التنافس الشريف، بما يضمن أعلى معايير الجودة .
                </h4>

                <span> 
                الأهداف:
                  </span>

                <h4>
                إذكاء روح التنافس الشريف بين المبدعين من أبناء الوطن .
                <br/>
                تطوير الممارسات الإبداعية في المجتمع .
                <br/>
                إبراز دور المبدعين وتكريمهم .
                <br/>
                إحتضان المبدعين والمساهمة في تطويرهم .
                                </h4>


                  </div>
            </Col>
          
          </Container>

        <MainFooter />
    </div>
  )
}

export default PrizeQuest