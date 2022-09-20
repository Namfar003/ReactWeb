import React, { useState,useEffect } from "react";
import Pictures from "../Image/LOGO.png";
import Pic from "../Image/Flag_of_Laos 1.png";
import {
  Row,
  Col,
  Container,
  Button,
  Modal,
  Navbar,
  Image,
  Nav
} from "react-bootstrap";
import { Link } from "react-router-dom";
import FormLogin from "../components/FormLogin";
function Login() {
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

      <Container>
      <Row md={3} className="d-flex justify-content-center  ">
        <Col
          className=" mt-5 mb-5 shadow-lg pt-3"
          style={{ borderRadius: "2%", border: "1px solid #ecf0f1" }}
        >
          <h3
            className="text-center mt-5 fw-bold "
            style={{ color: "#7f8c8d" }}
          >
            ເຂົ້າສູ່ລະບົບ
          </h3>

         <FormLogin/>
          
        </Col>
      </Row>
    </Container>
</>

    
  );
}

export default Login;
