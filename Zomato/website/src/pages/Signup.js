import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const [data , setData ] = useState({
        username:"",
        email:"",
        password:"" 
    })
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name , value } = e.target;
        setData(prev=>({...prev, [name]:value}))
        console.log(data , "heheh")
        
    }
    const handleSubmit = async (e)=>{
        fetch("http://localhost:4500/register/signup", {
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },body:JSON.stringify(data)
        }).then(()=>{
            console.log('Registered')
            navigate('/login')
            
          }).catch((err)=>{
            console.log(err,"err")
      
          })
    }

  return (
    <>
        <NavBar />
        <Container style={{textAlign:'center',justifyContent:'center'}}>
            <h1 className='m-auto'>
                    Register
            </h1>
            <Form className='m-auto' style={{justifyContent:'center'}}>
                <Form.Group className='col-3 m-auto '>
                    <Form.Control className='m-3' onChange={handleChange} value={data.username} name='username' type='text' placeholder='Username'></Form.Control>
                    <Form.Control className='m-3' onChange={handleChange} value={data.email} name='email' type='email' placeholder='Email'></Form.Control>
                    <Form.Control className='m-3' onChange={handleChange} value={data.password} name='password' type='password' placeholder='password'></Form.Control>
                </Form.Group>
                    <Form.Group className='col-4 m-auto'>
                        <Button className='col-4 m-3' onClick={handleSubmit} >Sign up</Button>
                    </Form.Group>
            </Form>
        </Container>
    </>

  )
}

export default Signup
