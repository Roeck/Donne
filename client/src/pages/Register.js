import React, { useState, useEffect } from 'react'
import { Logo, FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {console.log(e.targer)}

  const onSubmit = (e) => {
      e.preventDefault()
      console.log(e.target)
  }

  return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
            <Logo />
            <h3>LOGIN</h3>
            {/* name input */}
            <FormRow
                type='text'
                name='name'
                value={values.name}
                handleChange={handleChange}
            />
            {/* email input */}
             <FormRow
                type='email'
                name='email'
                value={values.email}
                handleChange={handleChange}
            />
            {/* password input */}
             <FormRow
                type='password'
                name='password'
                value={values.password}
                handleChange={handleChange}
            />
            <button type='submit' className='btn btn-block'>
                SUBMIT
            </button>
        </form>
    </Wrapper>
  )
}

export default Register
