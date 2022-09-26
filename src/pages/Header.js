import React,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom';
import {LoginContext} from '../Context/index'
import {CgProfile} from 'react-icons/cg'
import {CgLogOff} from 'react-icons/cg'
import {FaUserCircle} from 'react-icons/fa'
import {BiEditAlt} from 'react-icons/bi'
import {ImProfile} from 'react-icons/im'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {FaUserEdit} from 'react-icons/fa'
import {
  Button,
  Image,
  Dropdown,
  NavDropdown,
  Modal,
  DropdownButton
  
} from "react-bootstrap";
import Pictures from "../Image/LOGO.png";
import Pic from "../Image/Flag_of_Laos 1.png";

const Header = () => {
  const navigate =useNavigate()
  const {isLogin, firstname,email, setIsLogin} = useContext(LoginContext)
  const [show, setShow] = useState(false);
  const handle = () => setShow(!show)


const logout = () => {
  localStorage.clear('token')
  setIsLogin(false)
}

const link =()=>{
navigate("/EditName")
}


  return (
    <>
      <div>
        <Navbar
          bg="light"
          expand="lg"
          style={{ height: "auto" }}
          className="d-flex justify-content-between"
        >
          <div className="d-flex justify-content-between ">
            <div className="ms-md-5">
              <Image src={Pictures} className="me-md-4" />
            </div>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Link to='/' style={{textDecoration:'none'}}>
                  <Nav.Link href="#link" className="pe-4 fw-bold">
                    ໂຮງແຮມ ແລະ ທີ່ພັກ
                  </Nav.Link>
                  </Link>
                 
                  <Nav.Link href="#link" className="pe-4  fw-bold">
                    ຂ່າວສານ
                  </Nav.Link>
                  <Nav.Link href="#link" className="pe-4  fw-bold">
                    ເຂົ້າຮ່ວມກັບເຮົາ
                  </Nav.Link>
                  <Nav.Link href="#link" className="pe-4  fw-bold">
                    ກ່ຽວກັບເຮົາ
                  </Nav.Link>
                  <Nav.Link href="#link" className="pe-4  fw-bold">
                    ສູນຊ່ວຍເຫຼືອ
                  </Nav.Link>
                  <Image onClick={handle}
                      src={Pic}
                      style={{ height: "25px", width: "37.5px",cursor:'pointer' }}
                      className="mt-2"

                    />
                

                  {/* modal */}
                   <Modal show={show} onHide={handle}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        ພາສາ
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                     <img src={Pic}/>
                    </Modal.Body>
                   </Modal>


                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
          {!isLogin ?
          <Link to='/Login'>
          <Button className="me-md-5" type="button" variant="outline-danger" >
            ສ້າງບັນຊີ
          </Button>
          </Link> : 
          <div className="me-md-5 d-flex bg-primary " style={{ borderRadius:'5px'}} >
         {/* <h4 className=""> {firstname}</h4>
         <button className="btn btn-danger" onClick={logout}>log Out</button> */}
         
      <CgProfile 
      className="fs-4 mt-2 ms-md-1 text-light"
      />
      <DropdownButton
      align="end"
      
      id="dropdown-menu-align-end"
    >
      <Dropdown.Item eventKey="1"><p className="" style={{fontFamily:'Roboto'}}> <FaUserCircle className="me-md-2 fs-5" /> {firstname}</p></Dropdown.Item>
      <Dropdown.Item eventKey="2" style={{fontFamily:'Roboto'}} className='d-flex' onClick={link} > <MdOutlineMarkEmailUnread className="me-md-2 fs-5 text-success" /><p>{email}</p> </Dropdown.Item>
      <Dropdown.Item eventKey="2" style={{fontFamily:'Roboto'}} className='d-flex' onClick={link} > <FaUserEdit  className="me-md-2 fs-5" /><p>Edit Profile</p> </Dropdown.Item>
     
      <Dropdown.Item eventKey="2" style={{fontFamily:'Roboto'}} className='d-flex' onClick={logout}> <CgLogOff  className="me-md-2 fs-5 text-danger" /><p>Log out</p> </Dropdown.Item>
      
    </DropdownButton>

          </div>
}
        </Navbar>
      </div>
    </>
  );
};

export default Header;
