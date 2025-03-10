import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Myprojectcard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   
    <div>


<Card style={{ width: '100%' }}>
      <Card.Img onClick={handleShow} variant="top" src="https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw=" />
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
      
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Project Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container-fluid'>
<div className='row'>
  <div className='col-md-6'>
    <img style={{width:"100%"}} src="https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw=" alt="" />
  </div>
  <div className='col-md-6'>
    <h4>Describtion</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et laborum harum mo
      lestiae recusandae accusantium iure?</p>
      <h4>Technologies</h4>
      <p>Html</p>
  </div>

</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
         <div className="d-flex">
          <Link><FontAwesomeIcon className='fa-2x me-3' icon={faGithub} /></Link>
          <Link><FontAwesomeIcon className='fa-2x me-3' icon={faGlobe} /></Link>
         </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Myprojectcard