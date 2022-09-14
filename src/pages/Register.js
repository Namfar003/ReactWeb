import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  label,
  Button,
} from "react-bootstrap";
import validator from 'validator'
import axios from "axios";
import Swal from "sweetalert2";
import { icons } from "react-icons/lib";
function Register() {
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
