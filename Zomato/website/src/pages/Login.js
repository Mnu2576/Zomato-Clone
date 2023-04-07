import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import NavBar from '../components/NavBar'
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const[data,setData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate();
    
    const handleChange = (e) =>{
        e.preventDefault();
        setData(prev =>({...prev, [e.target.name] : e.target.value}));
        console.log(data);
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            // const res =await axios.post('http://localhost:3000/user/login', data);
            navigate('/');
        }catch(err){
            console.log(err);
        }
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
                        <Form.Control onChange={handleChange} className='m-3' name='email' type='email' placeholder='username'></Form.Control>
                        <Form.Control onChange={handleChange} className='m-3' name='password' type='password' placeholder='password'></Form.Control>
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
