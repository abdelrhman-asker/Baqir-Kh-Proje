import React from 'react'
import MainFooter from './MainFooter'
import MainNav from './MainNav'
import { Container, Row , Col } from 'reactstrap'
import CircStyl from "../photos/Rectangle 16.png"
import Form from 'react-bootstrap/Form';


const Contact = () => {
  return (
    <div className='ContactMainDiv'>
        <MainNav />
        <Container className='ContactMainCont'>
        <Col xs='12'  md="12" className='MainHomeRow' col={6}>
            <div  className='MainHomeRowFDivExpand'>
              <h3>  التواصل والدعم</h3>
                <span>
                  <img src={CircStyl} />
                </span>
              </div>
              </Col>
        <Col className='ContactMainData' xs='11'  md="12">
            <form className='ContactMainForm' href="/">
        <div >
            <h4 href="Name">الاسم</h4>
            <input className='Styleinputwidth' placeholder='الاسم' id='Name' type="name"  />
        </div>
        <div>
            <h4 className='PsuedoEleRed' href="Name">البريد الالكتروني</h4>
            <input className='Styleformwidth' placeholder='البريد الالكتروني ' id='Name' type="email" required />
        </div>
        <div>
            <h4 className='PsuedoEleRed' href="Name"> مجال الاستفسار</h4>
            <Form.Select className='FormSelStyle Styleformwidth' required aria-label="Default select example">
                <option value="" disabled selected hidden >   اختر من القائمة</option>
                <option size="lg" className='OptSelStyle ' value="1">
                    <h5>
                    المنافسه علي الجائزه
                    </h5>
                    </option>
                <option className='OptSelStyle ' value="2">رعاية فرع من الفروع</option>
                <option style={{Color:"white"}} className='OptSelStyle ' value="3">المشاركه في إحدي لجان التنظيم</option>
                <option className='OptSelStyle ' value="4">استفسار عام</option>
                <option className='OptSelStyle ' value="5"> أخرى</option>
                </Form.Select>

        </div>
        <div>
        <h4 className='PsuedoEleRed' href="Name"> نص الاستفسار</h4>
            <textarea className='StyleTextwidth' placeholder='...نص الاستفسار' id='Name' type="text" required />
        </div>
        <div className="submitButStyleDiv ">
        <input  className="submitButStyle " type="submit" formAction='/' value="تسليم"/>
        </div>



        </form>
        </Col>


              </Container>
        <MainFooter />
    </div>
  )
}

export default Contact