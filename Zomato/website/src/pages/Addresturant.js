import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import { set } from 'mongoose' 

const Addresturant = () => {
  const [resData, setData] = useState({
    restaurantName: "",
    restaurantAddress: "",
    restaurantPhoneNumber: "",
    restaurantOwnerName: "",
    restaurantOwnerAddress: "",
    restaurantOwnerEmail: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }))
    console.log(resData);
  }

  const handleSubmit = (e) => {
    fetch("http://localhost:4500/add/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/Json"
      },
      body: JSON.stringify(resData)
    }).then(() => {
      console.log('Restaurant Added')
      navigate('/')

    }).catch((err) => {
      console.log(err, "err")

    })
  }




  return (
    <>
      <NavBar />
      <Container className='col-3'>
        <Container style={{ margin: '1rem auto', textAlign: 'center' }}>
          <h4>ADD RESTAURANT</h4>
        </Container>
        <Form.Group>
          <Form.Control className='mb-3' onChange={handleChange} type='text' name='restaurantName' value={resData.restaurantName} placeholder='RestaurantName'></Form.Control>
          <Form.Control className='mb-3' onChange={handleChange} type='text' name='restaurantAddress' value={resData.restaurantAddress} placeholder='RestaurantAddress'></Form.Control>
          <Form.Control className='mb-3' onChange={handleChange} type='number' name='restaurantPhoneNumber' value={resData.restaurantPhoneNumber} placeholder='RestaurantPhone'></Form.Control>
          <Form.Control className='mb-3' onChange={handleChange} type='text' name='restaurantOwnerName' value={resData.restaurantOwnerName} placeholder='Name'></Form.Control>
          <Form.Control className='mb-3' onChange={handleChange} type='text' name='restaurantOwnerAddress' value={resData.restaurantOwnerAddress} placeholder='Address'></Form.Control>
          <Form.Control className='mb-3' onChange={handleChange} type='email' name='restaurantOwnerEmail' value={resData.restaurantOwnerEmail} placeholder='Email'></Form.Control>
        </Form.Group>
        <Form.Group style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
          <Button className='col-4' onClick={handleSubmit}>Submit</Button>
        </Form.Group>
      </Container>

    </>
  )
}

export default Addresturant
