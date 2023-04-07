import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const[data,setData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate();
    
    const handleChange = (e) =>{
        e.preventDefault();
        const {name , value} = e.target;
        setData(prev =>({...prev, [name] : value}));
        console.log(data);
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        fetch('http://localhost:4500/user/login',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then((res)=>{
            res.json("Valid Credential")
            navigate('/')
        }).catch((err)=>{
            console.log('err', err)
        })
    }
    return (
        <>
            <NavBar />
            <Container style={{textAlign:'center',justifyContent:'center'}}>
                <h1 className='m-auto'>
                    Log in
                </h1>
                <Form className='m-auto' style={{justifyContent:'center'}}>
                    <Form.Group className='col-3 m-auto '>
                    <Form.Control onChange={handleChange} value={data.username} className='m-3' name='username' type='text' placeholder='username'></Form.Control>
                        <Form.Control onChange={handleChange} value={data.email} className='m-3' name='email' type='email' placeholder='email'></Form.Control>
                        <Form.Control onChange={handleChange} value={data.password} className='m-3' name='password' type='password' placeholder='password'></Form.Control>
                    </Form.Group>
                    <Form.Group className='col-4 m-auto'>
                        <Button className='col-4 m-3' onClick={handleSubmit} >Login</Button>
                        
                    </Form.Group>
                </Form>
            </Container>
        </>

    )
}

export default Login
