import React,{useState} from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom';
import {
  Button,
  Image,
  Dropdown,
  NavDropdown,
  Modal
  
} from "react-bootstrap";
import Pictures from "../Image/LOGO.png";
import Pic from "../Image/Flag_of_Laos 1.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const handle = () => setShow(!show)
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
          <Link to='/Login'>
          <Button className="me-md-5" type="button" variant="outline-danger" >
            ສ້າງບັນຊີ
          </Button>
          </Link>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
