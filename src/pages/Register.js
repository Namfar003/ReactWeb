import React, { useState } from "react";
import Pictures from "../Image/LOGO.png";
import Pic from "../Image/Flag_of_Laos 1.png";
import { Link  } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormControl,
  label,
  Button,
  Modal,
  Navbar,
  Image,
  Nav
  
} from "react-bootstrap";
import validator from 'validator'
import axios from "axios";
import Swal from "sweetalert2";
import { icons } from "react-icons/lib";
function Register() {
  const [show, setShow] = useState(false);
  const handle = () => setShow(!show)

  const popup = () => {
    Swal.fire("ທ່ານລົງທະບຽບສຳເລັດແລ້ວ", "", "success");
  };
  const popup1 = () => {
    Swal.fire("ທ່ານລົງທະບຽບສຳເລັດແລ້ວ", "", "error");
  };
  const popup2 = () => {
    Swal.fire("ອີເມວມີໃນລະບົບເເລ້ວ", "", "warning");
  };
  const [regis, setRegis] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    profile: "",
  });
  const newData = {
    firstname: regis.firstname,
    lastname: regis.lastname,
    email: regis.email,
    password: regis.password,

    profile: regis.profile,
  };


  const postData = () => {
    const formData = new FormData();
    formData.append("file", regis.profile);
    formData.append("upload_preset", "picture");
    axios
      .post("https://api.cloudinary.com/v1_1/travellaos/image/upload", formData)
      .then((res) => {
        newData["profile"] = res.data.url;
        axios
          .post("http://localhost:5000/api/SignUp", newData)
          .then((res) => {
           if(res?.data?.text1 === 'Email Already Exist'){
                    popup2()
           }else if(res?.data?.firstname == '' || res?.data?.lastname == '' || res?.data?.email == '') {
            popup1()
           }
           else {
            console.log(res.data);
            popup()
           }
             
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [message, setMessage] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("Thank you");
    } else {
      setMessage("Please, enter valid Email!");
    }
  };




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
              ລົງທະບຽນ
            </h3>
            <label className="fw-bold ">ຊື່</label>
            <FormControl
              style={{ fontFamily: "Roboto" }}
              type="text"
              placeholder="first Name..."
              onChange={(e) =>
                setRegis({ ...regis, firstname: e.target.value })
              }
            />
            <label className="fw-bold mt-4">ນາມສະກຸນ</label>
            <FormControl
              style={{ fontFamily: "Roboto" }}
              type="text"
              placeholder="last Name..."
              onChange={(e) => setRegis({ ...regis, lastname: e.target.value })}
            />

            <label className="fw-bold mt-4">ອີເມລ</label>
            <FormControl
              style={{ fontFamily: "Roboto" }}
              type="email"
              placeholder="email..."
              required={true}
              onChange={(e) => setRegis({ ...regis, email: e.target.value })}
              
            />
                 <br />
      <span
        style={{
          fontWeight: "bold",
          color: "red"
        }}
      >
      </span>
            <label className="fw-bold mt-4">ລະຫັດຜ່ານ</label>
            <FormControl
              style={{ fontFamily: "Roboto" }}
              type="password"
              placeholder="password..."
              onChange={(e) => setRegis({ ...regis, password: e.target.value })}
            />
            <label className="fw-bold mt-4">ໂປຣຟາຍ</label>
            <FormControl
              style={{ fontFamily: "Roboto" }}
              type="file"
              name="file"
              placeholder="Profile..."
              onChange={(e) =>
                setRegis({ ...regis, profile: e.target.files[0] })
              }
            />

            <div className="mb-5 mt-3 d-flex justify-content-end">
              <Button variant="success" onClick={postData}>
                ບັນທຶກ
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
