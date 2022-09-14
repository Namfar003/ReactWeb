import React, { useState } from "react";
import {
  Button,
  FormControl,
  Form,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from 'sweetalert2'
import axios from "axios";
function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

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
            placeholder="name@example.com..."
          />
          <label className="fw-bold mt-4">ລະຫັດຜ່ານ</label>
          <FormControl
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            type="password"
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
  );
}

export default Login;
