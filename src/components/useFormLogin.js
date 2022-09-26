import React, { useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {LoginContext} from '../Context/index'
import {useNavigate} from 'react-router-dom'
const useFormLogin = (validate) => {
  const navigate = useNavigate()
  const {setFirstname , setIsLogin, email, setEmail}  = useContext(LoginContext)
  const [error, setError] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChang = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const newData = {
    email: values.email,
    password: values.password,
  };
  const swalAlert = () => {
    Swal.fire("ທ່ານເຂົ້າສູ່ລະບົບສຳເລັດແລ້ວ", "", "success");
  };
  const swalAlert1 = () => {
    Swal.fire("ອີເມວມີໃນລະບົບເເລ້ວ", "ກະລຸນາສະຫມັກອີເມວໃຫ່ມ", "error");
  };
  //  logins
  const login = async () => {
    axios
      .post("http://localhost:5000/api/SignIn", newData)
      .then((res) => {
        console.log(res.data);
        if (res.data.text1 == "Email Already Exist") {
          swalAlert1();
        } else {
          swalAlert();
          setIsLogin(true)
          navigate('/')
          localStorage.setItem("token", res.data.Sign_In_Email_Successed.token);
          localStorage.setItem("firstname", res.data.Sign_In_Email_Successed.firstname);
          localStorage.setItem('email',res.data.Sign_In_Email_Successed.email)
          setEmail(localStorage.getItem('email'))
          setFirstname(localStorage.getItem('firstname'))


        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
    login();
  };

  return { handleChang, values, handleSubmit, error };
};

export default useFormLogin;
