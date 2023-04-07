import React from 'react'
import NavBar from '../components/NavBar'
import { Button, Container , Form } from 'react-bootstrap'

const Addresturant = () => {
  return (
    <>        
    <NavBar/>
    <Container className='col-3'>
      <Container style={{margin:'1rem auto', textAlign:'center'}}>
        <h4>ADD RESTAURANT</h4>
      </Container>
      <Form.Group>
        <Form.Control className='mb-3' type='text' placeholder='RestrauntName'></Form.Control>
        <Form.Control className='mb-3' type='text' placeholder='RestrauntAddress'></Form.Control>
        <Form.Control className='mb-3' type='text' placeholder='RestrauntPhoneNumber'></Form.Control>
        <Form.Control className='mb-3' type='text' placeholder='Name'></Form.Control>
        <Form.Control className='mb-3' type='text' placeholder='Phone'></Form.Control>
        <Form.Control className='mb-3' type='text' placeholder='Email'></Form.Control>
      </Form.Group>
      <Form.Group style={{display:'flex', justifyContent:'center', margin:'1rem 0'}}>
      <Button className='col-4'>Submit</Button>
      </Form.Group>
    </Container>

    </>
  )
}

export default Addresturant
