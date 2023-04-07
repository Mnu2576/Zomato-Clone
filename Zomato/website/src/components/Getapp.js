import React from 'react'
import { Button, Container, Form, Image } from 'react-bootstrap'

const Getapp = () => {
    return (
        <div style={{ backgroundColor: 'rgb(255, 251, 247)', display:'flex' }}>
            <Container className='col-6 m-0' style={{display:'flex', justifyContent:'end', alignItems:'center'}}>
                <Image src='https://o.remove.bg/downloads/011ff493-a2d4-494c-ad93-c375363bf503/02929b00212f71270720274f2ba44b931680582749-removebg-preview.png'
                style={{height:'80%'}}>
                    
                </Image>
            </Container>

            <Container className=' col-4' style={{margin:'auto 0px'}}>
                <h1>Get the Zomato app</h1>
                <p>We will send you a link, open it on your phone to download the app</p>

                <Form.Check type='radio' inline name='radio' label='Email'></Form.Check>
                <Form.Check type='radio' inline name='radio' label='Phone'></Form.Check>


                <div style={{display:'flex', margin:"1rem 0"}}>
                <Form.Control type='email' placeholder='Email' style={{
                    flex:'2'
                    }}>
                </Form.Control>
                <Button style={{backgroundColor:'rgb(239, 79, 95)', flex:'1', marginLeft:'1rem'}}>Share Link</Button>
                </div>

                <p style={{fontSize:'0.9rem'}}>Download app from</p>

                <Container className='m-0 p-0'  style={{display:'flex'}}>
                    <Image className='col-4' src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'
                    style={{marginRight:'.2rem', cursor:'pointer'}}>
                    </Image>
                    <Image className='col-4' src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png'
                    style={{marginLeft:'.2rem', cursor:'pointer'}}>
                    </Image>
                </Container>

            </Container>
        </div>
    )
}

export default Getapp
