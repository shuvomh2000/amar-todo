import React from 'react'
import Button from '../components/layouts/Button'
import Container from '../components/layouts/Container'
import InputBox from '../components/layouts/InputBox'

const Registration = () => {
  return (
    <Container>
        <div>
            <h1 className='font-semibold text-primary text-[42px] mt-[38px] capitalize text-center'>amar todo</h1>
        </div>
        <div>
            <InputBox title="full name" type="text" placeholder="enter your full name"/>
            <InputBox title="email" type="email" placeholder="enter your email"/>
            <InputBox title="password" type="password" placeholder="enter your password"/>
            <Button title="sign up" className="w-full font-semibold text-white text-lg uppercase py-3 rounded-[20px] bg-primary"/>
        </div>
        <div className='text-center my-8'>
            <h3 className='font-regular text-bl text-lg'>Already have an account?  <span className='text-primary'> login</span></h3>
            <h6 className='font-regular text-grey text-lg'>or</h6>
        </div>
        <div>
        <Button title="continue with google" className="w-full font-regular text-bl text-base capitalize py-3 rounded-[20px] bg-white border border-primary mb-5 hover:bg-primary hover:text-white ease-out duration-300"/>
        <Button title="continue with facebook" className="w-full font-regular text-bl text-base capitalize py-3 rounded-[20px] bg-white border border-primary hover:bg-primary hover:text-white ease-out duration-300"/>
        </div>
    </Container>
  )
}

export default Registration