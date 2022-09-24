import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Input } from 'reactstrap';
import { BsSearch } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { RiSnapchatLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
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
                    <a href='https://wa.me/966552580070' target="_blank"><AiOutlineWhatsApp /></a>
                    <a href='https://twitter.com/ramelag2' target="_blank"><FiTwitter /></a>
                    <a href='https://www.instagram.com/ramel_ag/' target="_blank"><AiOutlineInstagram /></a>
                    <a href='https://www.snapchat.com/add/ag_ramel'target="_blank"><RiSnapchatLine /></a>
                    <a href='https://www.tiktok.com/@ramel_ag?_t=8VNkBgXR6oQ&_r=1' target="_blank"><FaTiktok /></a>
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
              <NavDropdown.Item className='NavDropDownItem' >
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
      <Row className='MainGreenNavRow' col={12}>
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
                <Link to="/Discretion">  القديريه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/َQuotes">  مجال الشعر </Link>
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
        <Link to="/PrizeCo">  مجالات الجائزه </Link>
        </Col>

        <Col>
        <NavDropdown className='NavDropDownStyleDrop' style={{direction:'rtl'}}
              id="nav-dropdown-dark-example"
              title=" عن الجائزه "
              menuVariant="dark">
              <NavDropdown.Item>  
                <Link to="/PrizeِAbout">  التعريف بها </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/َPrizeَِQuest">   الرؤيه والرساله والاهداف </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/َPrizeNeeds">    متطلبات عامه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/ReqSteps">     خطوات التقديم علي الجائزه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>  
                <Link to="/َPrizeArbit">   شئون التحكيم   </Link>
                </NavDropdown.Item>
            </NavDropdown></Col>
            
        <Col className='NavDropDownStyleGr'>
        <Link to="/AboutBaqir">   عن الشيخ بقير </Link>
        </Col>
        <Col className='NavDropDownStyleGr'>
        <Link to="/">   الرئيسيه </Link>

        </Col>
      </Row>
    </Container>

    <Container className='LastNavCont'>
      <Row className='LastNavRow'>
        <Col className='LastNavMaqirCol'>
        <img xs={4}   src={Maqir} />
        </Col>
        <Col xs={4} className='LastNavParaCol'>
        <h3 className='LastNavPara'>حمل نموذج التقديم للمنافسه علي الجائزه </h3>
        </Col>
        <Col xs={3} >
        <Link to="/">
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