import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CgFormatJustify} from "react-icons/cg"
import { MdOutlineAccountCircle } from 'react-icons/md';

const Canvas = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="CanvasStylingOnNAv">
      <Button variant="transparent "  onClick={handleShow}>
      <CgFormatJustify size={40}/>
      </Button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="ms-auto ToMakeHundHei">
        <Nav.Link className='NavDropDownStyle'  style={{direction:'rtl'}} id="dropdown-autoclose-inside" >
          <Link  to="/SignIn"> 
          حسابي
          <MdOutlineAccountCircle size={20} />

 </Link>


             
            </Nav.Link>

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
                <Link to="/MainHomeExpand">  التعريف بها </Link>
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
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Canvas