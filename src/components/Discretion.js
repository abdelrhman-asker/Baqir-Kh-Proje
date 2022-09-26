import React from 'react'
import MainFooter from './MainFooter'
import MainNav from './MainNav'
import { Container, Row , Col, Table } from 'reactstrap'
import UserImage from "../photos/MoradUser.png"
import { VscEdit } from 'react-icons/vsc';
import CircStyl from "../photos/Rectangle 16.png"


const Discretion = () => {
  return (
    <div  className='MainHomeExMainDiv'>
        <MainNav />
        <Container className='MainHomeRowFContExpand ProfileInfoMainCont'>
        <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  التقديرية </h3>
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
            <div  className=' DiscTableText'>
                <Table className=' DiscTableTextTTwo'>
                    <tr className='DiscTableTextRow '>
                        <td colSpan={1}> العام</td>
                        <td colSpan={1}> المركز الأول </td>
                        <td colSpan={1}> المركز الثاني</td>
                        <td colSpan={1}> المركز الثالث</td>
                    </tr>
                   
                </Table>
                <Table  className=' DiscTableTextTTwo DiscTableTextTsec'>
                    <tr className='DiscTableTextRow '>
                        <td colSpan={1}>2023</td>
                        <td colSpan={1}></td>
                        <td colSpan={1}> </td>
                        <td colSpan={1}> </td>
                    </tr>
                   
                </Table>
               
               
              </div>
              </Col>







        </Container>



        <MainFooter />
    </div>
  )
}

export default Discretion