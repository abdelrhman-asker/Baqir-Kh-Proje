import React, { useState } from 'react';
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
import {CgFormatJustify} from "react-icons/cg"
import Maqir from "../photos/Group 39.png"
import Logo from "../photos/اللوجو.png"
import Offcanvas from 'react-bootstrap/Offcanvas';


const MainNav = () => {

    const [isShown, setIsShown] = useState(true);
  
    const handleClick = event => {
      // 👇️ toggle visibility
      setIsShown(current => !current);
    }; 
    const [isShown2, setIsShown2] = useState(true);
  
    const handleClick2 = event => {
      // 👇️ toggle visibility
      setIsShown2(current => !current);
    }; 

  return (
    <div className='MainFooterDiv'>
       <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container style={{height:"5vh"}}>
        <Navbar.Brand href="#home">
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
        
        <Navbar.Toggle className="TogglerFixing"  onClick={handleClick}  aria-controls="responsive-navbar-nav" ><CgFormatJustify/></Navbar.Toggle> 
        <div onClick={handleClick2} style={{display: isShown ? 'none' : 'block' }}   className='DivToCloseSideNav'></div>
        <div    className='DropDownFixedStyling'>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ToMakeHundHei">
          <NavDropdown className='NavDropDownStyle' title="حسابي" style={{direction:'rtl'}} id="collasible-nav-dropdown">
              <NavDropdown.Item className='NavDropDownItem' >
                <Link className='NavDropDownLinks' to='/Profile-Info'>المعلومات الشخصيه</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className='NavDropDownItem' >
              <Link className='NavDropDownLinks' to='/models'>النماذج المسلمة</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className='NavDropDownItem' >
              <Link className='NavDropDownLinks' to='/ChangePass'>تغيير كلمه المرور</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className='NavDropDownItem' >
              <Link className='NavDropDownLinks' to='/LogOut'>تسجيل الخروج</Link>
              </NavDropdown.Item>
             
            </NavDropdown>

            <Nav.Link className='NavDropDownStyle' href="#features">
              <Link  to="/Contact"> التواصل وادعم </Link>
              </Nav.Link>

            <Nav.Link className='NavDropDownStyle' href="#pricing">
              <Link to="/AboutUs"> من نحن </Link>
              </Nav.Link>

            <Nav.Link className='NavDropDownStyle HidAndBlock' href="#pricing">
            <Link to="/">   الرئيسيه </Link>
            </Nav.Link>

            <Nav.Link className='NavDropDownStyle HidAndBlock' href="#pricing">
            <Link to="/AboutBaqir">  مجالات الجائزه </Link>
            </Nav.Link>

            <NavDropdown className='NavDropDownStyle HidAndBlock' style={{direction:'rtl'}}
              id="nav-dropdown-dark-example"
              title=" عن الجائزه "
              menuVariant="dark">
              <NavDropdown.Item  className='NavDropDownItem'>  
                <Link to="/PrizeِAbout">  التعريف بها </Link>
                </NavDropdown.Item>
              <NavDropdown.Item  className='NavDropDownItem'>  
                <Link to="/َPrizeَِQuest">   الرؤيه والرساله والاهداف </Link>
                </NavDropdown.Item>
              <NavDropdown.Item  className='NavDropDownItem'>  
                <Link to="/َPrizeNeeds">    متطلبات عامه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item  className='NavDropDownItem'>  
                <Link to="/َPrizeSign">     خطوات التقديم علي الجائزه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item  className='NavDropDownItem'>  
                <Link to="/َPrizeArbit">   شئون التحكيم   </Link>
                </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link className='NavDropDownStyle HidAndBlock' href="#features">
            <Link to="/PrizeCo">  مجالات الجائزه </Link>
              </Nav.Link>
            
              
            <NavDropdown className='NavDropDownStyle HidAndBlock' style={{direction:'rtl'}}
              id="nav-dropdown-dark-example"
              title="سجل الشرف"
              menuVariant="dark">
              <NavDropdown.Item className='NavDropDownItem'>  
                <Link to="/Discretion">  القديريه </Link>
                </NavDropdown.Item >
              <NavDropdown.Item className='NavDropDownItem'>  
                <Link to="/َQuotes">  مجال الشعر </Link>
                </NavDropdown.Item>
              <NavDropdown.Item className='NavDropDownItem'>  
                <Link to="/HumanSc">  مجال العلوم الاساسيه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item className='NavDropDownItem'>  
                <Link to="/MedicalSc">   مجال العلوم الطبيه </Link>
                </NavDropdown.Item>
              <NavDropdown.Item className='NavDropDownItem'>  
                <Link to="/AgrSc">  مجال الزراعيه   </Link>
                </NavDropdown.Item>
              <NavDropdown.Item className='NavDropDownItem'>  
                <Link to="/EngSc">  مجال الهندسيه </Link>
                </NavDropdown.Item>
            </NavDropdown>

              <Nav.Link className='NavDropDownStyle HidAndBlock' href="#features">
            <Link to="/Partners"> الشركاء والداعمون </Link>
              </Nav.Link>

            <NavDropdown className='NavDropDownStyle HidAndBlock' style={{direction:'rtl'}}
              id="collasible-nav-dropdown"
              title="المركز الاعلامي"
              menuVariant="dark">
              <NavDropdown.Item className='NavDropDownItem'  >  
                <Link to="/"> 2023 حفل عام</Link>
                </NavDropdown.Item>
            </NavDropdown>


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
                <Link to="/"> 2023 حفل عام</Link>
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
                <Link to="/َPrizeSign">     خطوات التقديم علي الجائزه </Link>
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
        <Col>
        <img   src={Maqir} />
        </Col>
        <Col>
        <h3 className='LastNavPara'>حمل نموذج التقديم للمنافسه علي الجائزه </h3>
        </Col>
        <Col>
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