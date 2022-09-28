import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Input } from 'reactstrap';
import { BsSearch } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Maqir from "../photos/Group 39.png"
import Logo from "../photos/اللوجو.png"
import Canvas from "./Canvas"

const MainNav = () => {

    

  return (
    <div className='MainFooterDiv'>
      
       <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container style={{height:"5vh"}}>
        <Navbar.Brand>
        <Col col={4} className="SearchLinksRight" >
       
            <div className='MainNavlinks'>
                    <a href='https://api.whatsapp.com/send/?phone=966538998008&text&type=phone_number&app_absent=0' target="_blank"><BsWhatsapp /></a>
                    <a href='https://twitter.com/baqeraward?s=21&t=oHXMIvQ1PEGYTp4fcNNBJA' target="_blank"><BsTwitter /></a>
                    <a href='https://instagram.com/baqeraward?igshid=NTlmMWMyMzg=' target="_blank"><BsInstagram /></a>
                 
                  </div>
            <div className="wrapper" >
                  <div className="search-input">
                <Input id="myInput" type="text" placeholder=" ...بحث "/>
                <div className="autocom-box on">
                 </div>
                  <div className="icon" id="iconSearch"><BsSearch /></div>
                  </div>
                  </div>
          </Col>
        </Navbar.Brand>
        <Canvas  />

        <div    className='DropDownFixedStyling'>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ToMakeHundHei">
          <NavDropdown className='NavDropDownStyle' title="حسابي" style={{direction:'rtl'}} id="dropdown-autoclose-inside" >
              <NavDropdown.Item  className='NavDropDownItem' >
                <Link className='NavDropDownLinks' to='/ProfileInfo'>المعلومات الشخصيه</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className='NavDropDownItem' >
              <Link className='NavDropDownLinks' to='/models'>النماذج المسلمة</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className='NavDropDownItem' >
              <Link className='NavDropDownLinks' to='/ChangePass'>تغيير كلمه المرور</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className='NavDropDownItem' >
              <Link className='NavDropDownLinks' to='/SignIn'>تسجيل الدخول</Link>
              </NavDropdown.Item>
             
            </NavDropdown>

            <Nav.Link className='NavDropDownStyle' >
              <Link  to="/Contact"> التواصل وادعم </Link>
              </Nav.Link>

            <Nav.Link className='NavDropDownStyle'>
              <Link to="/AboutUs"> من نحن </Link>
              </Nav.Link>

           


          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>

{/* Start of  Green Nav Section */}
<div className='MainGreenNav'>

    <Container className='MainGreenNavCont' col={12}>
      <Col xs='11'  md="11" xl="10" className='MainGreenNavRow' >
        <Col><NavDropdown className='NavDropDownStyleDrop' style={{direction:'rtl'}}
              id="nav-dropdown-dark-example"
              title="المركز الاعلامي"
              menuVariant="dark">
              <NavDropdown.Item  >  
                <Link to="/celebration2023"> 2023 حفل عام</Link>
                </NavDropdown.Item>
            </NavDropdown>
            </Col>

        <Col className='NavDropDownStyleGr'>
        <Link to="/Partners"> الشركاء والداعمون </Link>
        </Col>

        <Col>
        
        <NavDropdown className='NavDropDownStyleDrop' style={{direction:'rtl'}}
              id="nav-dropdown-dark-example"
              title="سجل الشرف"
              menuVariant="dark">
              <NavDropdown.Item>  
                <Link to="/Discretion">  التقديريه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/Quotes">  مجال الشعر </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/HumanSc">  مجال العلوم الاساسيه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/MedicalSc">   مجال العلوم الطبيه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/AgrSc">  مجال الزراعيه   </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/EngSc">  مجال الهندسيه </Link>
                </NavDropdown.Item>
            </NavDropdown>
        </Col>

        <Col className='NavDropDownStyleGr'>
        <Link to="/PrizeCo">  مجالات الجائزة  </Link>
        </Col>

        <Col>
        <NavDropdown className='NavDropDownStyleDrop' style={{direction:'rtl'}}
              id="nav-dropdown-dark-example"
              title=" عن الجائزة  "
              menuVariant="dark">
              <NavDropdown.Item>  
                <Link to="/MainHomeExpand">  التعريف بها </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/PrizeQuest">   الرؤيه والرساله والاهداف </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/PrizeNeeds">    متطلبات عامه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/ReqSteps">     خطوات التقديم علي الجائزه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/PrizeArbit">   شئون التحكيم   </Link>
                </NavDropdown.Item>
            </NavDropdown></Col>
            
        <Col className='NavDropDownStyleGr'>
        <Link to="/AboutBaqir">   عن الشيخ بقير </Link>
        </Col>
        <Col className='NavDropDownStyleGr'>
        <Link to="/">   الرئيسية  </Link>

        </Col>
      </Col>
    </Container>

    <Container className='LastNavCont'>
      <Row className='LastNavRow'>
        <Col xs={2} md={4} className='LastNavMaqirCol'>
        <img    src={Maqir} />
        </Col>
        <Col xs={7} md={5} className='LastNavParaCol'>
        <h3 className='LastNavPara'>
        حمل نموذج التقديم للمنافسة على الجائزة       
            </h3>
        </Col>
        <Col xs={2} md={3} className='LastNavLogoCol' >
        <Link   to="/">
        <img  src={Logo} /></Link>
        </Col>
      </Row>
    </Container>


    </div>

    
{/* End of  Green Nav Section */}

    </div>
  )
}

export default MainNav