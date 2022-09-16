import React, { useState } from "react";

const useForm = (validate) => {
  const [error, setError] = useState({})
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    profile: "",
  });

  const handleChang = e => {
     const {name, value} = e.target;
     setValues({
        ...values,
        [name]:value
     })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setError(validate(values))

  }

   return {handleChang,values,handleSubmit,error}
};

export default useForm;
