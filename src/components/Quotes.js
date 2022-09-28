import React from 'react'
import MainFooter from './MainFooter'
import MainNav from './MainNav'
import { Container, Row , Col, Table } from 'reactstrap'
import UserImage from "../photos/MoradUser.png"
import { VscEdit } from 'react-icons/vsc';
import CircStyl from "../photos/Rectangle 16.png"
const Quotes = () => {
  return (
    <div  className='MainHomeExMainDiv'>
        <MainNav />
        <Container className='MainHomeRowFContExpand ProfileInfoMainCont DiscTableMainCont'>
        <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3> 
                 مجال الشعر   

              </h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>
      
              
        <Col xs='11'  md="10" className='MainHomeRowOne' col={6}>
            <div  className=' DiscTableText'>
              <Col>
                <Table className=' DiscTableTextTTwo'>
                    <tr className='DiscTableTextRow '>
                        <td colSpan={1}> العام</td>
                        <td colSpan={1}> المركز الأول </td>
                        <td colSpan={1}> المركز الثاني</td>
                        <td colSpan={1}> المركز الثالث</td>
                    </tr>
                   
                </Table>
                </Col>
                <Col >
                <Table  className=' DiscTableTextTTwo DiscTableTextTsec'>
                    <tr className='DiscTableTextRow '>
                        <td colSpan={1}>2023</td>
                        <td colSpan={1}></td>
                        <td colSpan={1}> </td>
                        <td colSpan={1}> </td>
                    </tr>
                   
                </Table>
                </Col>
               
              </div>
              </Col>







        </Container>

        <Container xs='11'  md="10" className='MainHomeRowTwo'>
  <h3>2023</h3>
  <Row  xs="12" className='MainHomeRowTwoMaDiv'>
    <Col xs="3" className='MainHomeRowTwoColOne'>المركز الاول</Col>
    <Col xs="8" className='MainHomeRowTwoColTwo'></Col>
  </Row>
  <Row  xs="12" className='MainHomeRowTwoMaDiv'>
    <Col xs="3" className='MainHomeRowTwoColOne'>المركز الثاني</Col>
    <Col xs="8" className='MainHomeRowTwoColTwo'></Col>
  </Row>
  <Row  xs="12" className='MainHomeRowTwoMaDiv'>
    <Col xs="3" className='MainHomeRowTwoColOne'>المركز الثالث</Col>
    <Col xs="8" className='MainHomeRowTwoColTwo'></Col>
  </Row>
  

</Container>

        <MainFooter />
    </div>
  )
}

export default Quotes