import React from 'react'
import NavBar from '../components/NavBar'
import { Container, Form } from 'react-bootstrap'
import PlaceIcon from '@mui/icons-material/Place';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import './home.css'
import Getapp from '../components/Getapp';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
      <div className='home p-0'>
        <NavBar />

        <Container style={{ textAlign: 'center', padding: '3rem' }}>
          <h1 style={{ fontSize: '6rem', fontWeight: 'bolder' }}>
            zomato
          </h1>
          <h1>
            Discover the best food & drinks in
          </h1>
        </Container>

        <Container className='p-2 m-auto' style={{ display: 'flex', backgroundColor: 'white', width: '50%', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', color: 'black', fontSize: '2rem' }}>
          <PlaceIcon style={{ color: 'red' }}></PlaceIcon>
          <Form.Control type='text' placeholder='Location' style={{
            width: '20%',
            borderRadius: '0',
            borderTop: '0',
            borderBottom: '0',
            borderLeft: '0',
            borderRight: '1px black solid'
          }}>
          </Form.Control>
          <SearchSharpIcon style={{ color: 'black', margin:'0 10px' }}></SearchSharpIcon>
          <Form.Control type='text' placeholder='search for restaurant, cuisine or a dish' style={{ borderStyle: 'none' }}>
          </Form.Control>
        </Container>
      </div>
      <div>
      <Getapp/>
      <Footer/>
      </div>
    </>
  )
}

export default Home
