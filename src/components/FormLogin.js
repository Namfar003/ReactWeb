import React from 'react'
import { Form,FormControl,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useFormLogin from './useFormLogin'
import ValidateInfo from './validator'
const FormLogin = () => {
    const {handleChang,login,handleSubmit,error} = useFormLogin(ValidateInfo)
  return (
    <>
     <Form onSubmit={handleSubmit}>
          <label className="fw-bold ">ອີເມລ</label>
          <FormControl
            onChange={handleChang}
            value={login.email}
            type="email"
            name='email'
            placeholder="name@example.com..."
          />
            {error?.email && <p className='text-danger mt-1 font'>email is required</p>}
          <label className="fw-bold mt-4">ລະຫັດຜ່ານ</label>
          <FormControl
            onChange={handleChang}
            value={login.password}
            type="password"
            name='password'
            placeholder="password..."
          />
            {error?.password && <p className='text-danger mt-1 font'>password is required</p>}
          </Form>
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
                <Button type="submit" variant="outline-danger"
                >ເຂົ້າສູ່ບະບົບ</Button>
              </div>
            </div>
          </div>
    </>
  )
}

export default FormLogin
