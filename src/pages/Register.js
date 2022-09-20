import React, { useState } from "react";
import Pictures from "../Image/LOGO.png";
import Pic from "../Image/Flag_of_Laos 1.png";
import FormSignUp from '../components/FormSignUp'
import { Link } from "react-router-dom";
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
  Nav,
  Form,
} from "react-bootstrap";
import validateInfo from "../components/validator";
import axios from "axios";
import Swal from "sweetalert2";
import { icons } from "react-icons/lib";
function Register() {
  const [show, setShow] = useState(false);
  const handle = () => setShow(!show);

  // const popup = () => {
  //   Swal.fire("ທ່ານລົງທະບຽບສຳເລັດແລ້ວ", "", "success");
  // };
  // const popup1 = () => {
  //   Swal.fire("ທ່ານລົງທະບຽບສຳເລັດແລ້ວ", "", "error");
  // };
  // const popup2 = () => {
  //   Swal.fire("ອີເມວມີໃນລະບົບເເລ້ວ", "", "warning");
  // };
  // const [register, setRegister] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   profile: "",
  // });
  // const [regis, setRegis] = useState({

  // });

  // const handleChang = (e) => {
  //   const [name, value] = e.target;
  //   setRegister({
  //     ...register,
  //     [name]: value,
  //   });
  //   return handleChang();
  // };

  // const newData = {
  //   firstname: regis.firstname,
  //   lastname: regis.lastname,
  //   email: regis.email,
  //   password: regis.password,
  //   profile: regis.profile,
  // };

  // const postData = () => {
  //   const formData = new FormData();
  //   formData.append("file", regis.profile);
  //   formData.append("upload_preset", "picture");
  //   axios
  //     .post("https://api.cloudinary.com/v1_1/travellaos/image/upload")
  //     .then((res) => {
  //       // newData["profile"] = res.data.url;
  //       axios
  //         .post("http://localhost:5000/api/SignUp")
  //         .then((res) => {
  //           if (res?.data?.text1 === "Email Already Exist") {
  //             popup2();
  //           } else if (
  //             res?.data?.firstname == "" ||
  //             res?.data?.lastname == "" ||
  //             res?.data?.email == ""
  //           ) {
  //             popup1();
  //           } else {
  //             console.log(res.data);
  //             popup();
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
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
                  <Link to="/" style={{ textDecoration: "none" }}>
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
                  <Image
                    onClick={handle}
                    src={Pic}
                    style={{
                      height: "25px",
                      width: "37.5px",
                      cursor: "pointer",
                    }}
                    className="mt-2"
                  />
                  <Modal show={show} onHide={handle}>
                    <Modal.Header closeButton>
                      <Modal.Title>ພາສາ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src={Pic} />
                    </Modal.Body>
                  </Modal>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
          <Link to="/Login">
            <Button className="me-md-5" type="button" variant="outline-danger">
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
           <div>
           <h3
              className="text-center mt-5 fw-bold "
              style={{ color: "#7f8c8d" }}
            >
              ລົງທະບຽນ
            </h3>
           </div>
            <FormSignUp/>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default Register;
