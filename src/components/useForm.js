import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const useForm = (validate) => {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    profile: "",
  });

  const handleChang = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const newData = {
    firstname: values.firstname,
    lastname: values.lastname,
    email: values.email,
    password: values.password,
    profile: values.profile,
  };
  const swalAlert = () => {
    Swal.fire("ທ່ານລົງທະບຽບສຳເລັດແລ້ວ", "", "success");
  };
  const swalAlert1 = () => {
    Swal.fire("ອີເມວມີໃນລະບົບເເລ້ວ", "ກະລຸນາສະຫມັກອີເມວໃຫ່ມ", "error");
  };
  //  Register
  const register = async () => {
    axios
      .post("http://localhost:5000/api/SignUp", newData)
      .then((res) => {
        if (res.data.text1 == "Email Already Exist") {
          swalAlert1();
        } else {
          swalAlert();
          navigate("/Login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
    register();
  };

  return { handleChang, values, handleSubmit, error };
};

export default useForm;
