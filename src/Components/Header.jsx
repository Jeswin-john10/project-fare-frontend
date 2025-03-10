import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { faPowerOff, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <div>
       <Navbar className="bg-success d-flex align-items-center">
        <Container>
         <Link to={'/'} style={{textDecoration:"none"}}>
         <Navbar.Brand href="#home">
        <h1 className=''><FontAwesomeIcon className='me-3' icon={faStackOverflow} /> Project Fair</h1>
         
           </Navbar.Brand>
         </Link>
         <Button className='btn bg-warning rounded-0 border'><FontAwesomeIcon icon={faPowerOff} /> Logout</Button>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header