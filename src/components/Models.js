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
              <h3>  النماذج المسلمه</h3>
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
            
                <Table striped  className='ModelsTableTextTable '>
                   <tr className='ModelsTableTextRow '>
                        <td>التسلسل</td>
                        <td>النماذج</td>
                        <td>تاريخ التسليم </td>
                   </tr>
                   
                   <tr className='ModelsTableTextRow'>
                        <td>1</td>
                        <td>نموذج تسليم قصيدة شعر بعنوان يا بهية الحسن </td>
                        <td className='TableDDate'>2\2\2024</td>
                   </tr>
                </Table>
               
               
              
              </Col>







        </Container>



        <MainFooter />
    </div>
  )
}

export default Profileinfo