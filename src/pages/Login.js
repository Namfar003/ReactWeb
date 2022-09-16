import React, { useState,useEffect } from "react";
import Pictures from "../Image/LOGO.png";
import Pic from "../Image/Flag_of_Laos 1.png";
import {
  
  FormControl,
  Form,
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
import swal from 'sweetalert2'
import axios from "axios";
function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const handle = () => setShow(!show)

const useForm=()=>{
  const  [values, setValues] = useState ({
    email:'',
    password:''
  })

  const [error, setError] = useState
}
 const handleChange = e =>{

 }
  const newData = {
    email: login.email,
    password: login.password,
  };

  // sweetAlert 
  const showError = () => {
    swal.fire(
      'User could not found',
      '',
      'error'
    )
  }



  const postData = async () => {
    await axios.post('http://localhost:5000/api/SignIn', newData)
    .then((res) => {
      if(res.data){
        swal.fire(
          'Successed Login',
          '',
          'success'
        )
      } else if(res) {
        console.log(res.data);
        showError()
      }
    }).catch((error) => {
      console.log({message:error.message})
    })
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
                  {/* dropdown */}
                  {/* <NavDropdown img="src={Pic} style={{height:25px, width:37.5px}}">
                  <NavDropdown.Item href="#action/3.1">
                    <Image
                      src={Pic}
                      style={{ height: "25px", width: "37.5px" }}
                      className="mt-2"
                    />
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Image
                  src={Pic}
                  style={{ height: "25px", width: "37.5px" }}
                  className="mt-2"
                /> */}

                  {/* <FloatingLabel
                    controlId="floatingSelectGrid"
                    
                    className=" me-md-5 "
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option><img src={Pic} /> </option>
                      <option value="1">ຜູ້ໃຫຍ່</option>
                      <option value="2">ເດັກນ້ອຍ</option>
                      <option value="3">ຄົນດຽວ</option>
                      <option value="4">ຫຼາຍຄົນ</option>
                    </Form.Select>
                  </FloatingLabel> */}

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
          <label className="fw-bold ">ອີເມລ</label>
          <FormControl
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            type="email"
            name='email'
            placeholder="name@example.com..."
          />
          <label className="fw-bold mt-4">ລະຫັດຜ່ານ</label>
          <FormControl
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            type="password"
            name='password'
            placeholder="password..."
          />
          <div className="mt-3 mb-5 d-flex justify-content-between ">
            <div>
              <p>forgot</p>
              <p>password?</p>
              <Link to="/Register">
                <p>ລົງທະບຽນ</p>
              </Link>
            </div>

            <div>
              <div>
                <Button variant="outline-danger"
                 onClick={postData}
                >ເຂົ້າສູ່ບະບົບ</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
</>

    
  );
}

export default Login;
