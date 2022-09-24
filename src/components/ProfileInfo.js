import React from 'react'
import MainFooter from './MainFooter'
import MainNav from './MainNav'
import { Container, Row , Col, Table } from 'reactstrap'
import UserImage from "../photos/MoradUser.png"
import { VscEdit } from 'react-icons/vsc';
import CircStyl from "../photos/Rectangle 16.png"

const Profileinfo = () => {
  return (
    <div  className='MainHomeExMainDiv'>
        <MainNav />
        <Container className='MainHomeRowFContExpand ProfileInfoMainCont'>
        <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  الحساب الشخصي</h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>
        <Col xs='12'  md="12" className='ProfAboRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
            <span className='ProfileInfoProfIco'>
                  <img src={UserImage} />
                  <span className='ProfileInfoEditico'>
                  <VscEdit /></span>
                </span>
                
              </div>
              </Col>
        <Col xs='12'  md="12" className='ProfAboRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  مرحبًا،مراد  </h3>
                
              </div>
              </Col>

              
        <Col xs='10'  md="12" className='MainHomeRow' col={6}>
            <div  className='ProfAboutTableText'>
                <Table>
                    <tr>
                        <th>الاسم :</th>
                        <td>- مراد أحمد علي </td>
                    </tr>
                    <tr>
                        <th>السيرة الذاتية :</th>
                        <td>انا هادي كريم،22 سنة،مصمم جرافيك خبرة كثر من اربع سنوات فى مجال التصميم اسعى دائما للتطور والافضل , وأعمل دائماً وجاهداً لأكون في مستوى عالِ من الإحترافيه والمهارة في هذا المجال الرائع.استخدم مستقل ك منصة لعرض مواهبي واستثمارها بشكل صحيح شكرا لزيارة حسابي. </td>
                    </tr>
                    <tr>
                        <th> البريد الإلكتروني: </th>
                        <td>morad_aly87@gmail .com  </td>
                    </tr>
                    <tr>
                        <th> اسم المستخدم : </th>
                        <td>moradaly </td>
                    </tr>
                </Table>
               
               
              </div>
              </Col>







        </Container>



        <MainFooter />
    </div>
  )
}

export default Profileinfo