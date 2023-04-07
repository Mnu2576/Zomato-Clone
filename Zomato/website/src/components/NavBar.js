import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
const NavBar = () => {
  return (
    <>
      <Navbar className='nav' style={{fontSize:'1.3rem'}}  >
        <Container >
          <Navbar.Brand href='#' style={{ textDecoration: 'none', color: 'white' }}>
            <Container>
              <DownloadIcon>
              </DownloadIcon>
              Get the App
            </Container>
          </Navbar.Brand>
          <Nav>
            <Nav.Link >
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/investor-relations'>
                Investor Relation
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/add-restaurant'>
                Add restaurant
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>Log In
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>Sign up
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
