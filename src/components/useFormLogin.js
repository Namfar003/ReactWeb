import React,{useState} from 'react'
import axios from "axios";
import Swal from 'sweetalert2'
const useFormLogin = (validate) => {
    const [error, setError] = useState({})
    const [login, setLogin] = useState({
      email: "",
      password: "",
    });
    
    const handleChang = e => {
       const {name, value} = e.target;
       setLogin({
          ...login,
          [name]:value
       })
    }
    const newData = {
      email:login.email,
      password:login.password,
    }
    const swalAlert = () => {
      Swal.fire("ທ່ານລົງທະບຽບສຳເລັດແລ້ວ", "", "success");
    }
    const swalAlert1 = () => {
      Swal.fire("ອີເມວມີໃນລະບົບເເລ້ວ", 'ກະລຸນາສະຫມັກອີເມວໃຫ່ມ', "error");
    }
     //  Register 
     const signIn = async () => {
      axios.post('http://localhost:5000/api/SignIn', newData)
      .then((res) => {
        console.log(res.data)
        // if(res.data.text1 == 'Email Already Exist') {
        //   swalAlert1()
        // } else {
        //   swalAlert()
        // }
      }).catch((error) => {
        console.log(error)
      })
     }
  
    const handleSubmit = e => {
      e.preventDefault();
      setError(validate(login));
      signIn();
     
    }
  
     return {handleChang,login,handleSubmit,error}
}

export default useFormLogin

