import React from 'react'
import {Button,FormControl,Form} from 'react-bootstrap'
import useForm from './useForm'
import ValidateInfo from './validator'
import {Link} from 'react-router-dom'
import '../css/font.css'
const FormSignUp = () => {
  const {handleChang, values, handleSubmit,error} = useForm(ValidateInfo)
  return (
    <>
    <Form onSubmit={handleSubmit}>
              <label className="fw-bold ">ຊື່</label>
              <FormControl
                style={{ fontFamily: "Roboto" }}
                type="text"
                placeholder="first Name..."
                name="firstname"
                onChange={handleChang}
                value={values.firstname}
              />
              {error?.firstname && <p className='text-danger mt-1 font'>firstname is required</p>}
              <label className="fw-bold mt-4">ນາມສະກຸນ</label>
              <FormControl
                style={{ fontFamily: "Roboto" }}
                type="text"
                placeholder="last Name..."
                name="lastname"
                onChange={handleChang}
                value={values.lastname}
              />
              {error?.lastname && <p className='text-danger mt-1 font'>lastname is required</p>}
              <label className="fw-bold mt-4">ອີເມລ</label>
              <FormControl
                style={{ fontFamily: "Roboto" }}
                type="email"
                name="email"
                placeholder="email..."
                onChange={handleChang}
                value={values.email}
              />
                {error?.email && <p className='text-danger mt-1 font'>email is required</p>}
              <span
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              ></span>
              <label className="fw-bold mt-4">ລະຫັດຜ່ານ</label>
              <FormControl
                style={{ fontFamily: "Roboto" }}
                type="password"
                placeholder="password..."
                name="password"
                onChange={handleChang}
                value={values.password}
              />
                {error?.password && <p className='text-danger mt-1 font'>password is required</p>}
              <label className="fw-bold mt-4">ໂປຣຟາຍ</label>
              <FormControl
                style={{ fontFamily: "Roboto" }}
                type="file"
                name="file"
                placeholder="Profile..."
                onChange={handleChang}
              />
              <div className="mb-5 mt-3 d-flex justify-content-between align-items-center mt-2">
              <Button variant="success" type="submit">
                ບັນທຶກ
              </Button>
              <div>
              <h6>ລົງທະບຽນເເລ້ວ <Link to='/login'>ເຂົ້າສູ່ລະບົບ</Link> </h6>
              </div>
            </div>
            </Form>
    </>
  )
}

export default FormSignUp
