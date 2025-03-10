import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Addproject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>

<button onClick={handleShow} className='btn btn-success rounded-0 px-4'>Add Project</button>

<Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div className='container-fluid'>
  <div className='row'>
<div className='col-md-6'>
 <label htmlFor="projectimage">
  <input id='projectimage' type="file" style={{display:"none"}} />
  <img className='img-fluid rounded' src="https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png" alt="" />
 </label>
</div>
<div className='col-md-6'>
  <div className='mb-3'>
<input type="text" className='form-control' placeholder='Tittle' />
  </div>

  <div className='mb-3'>
<input type="text" className='form-control' placeholder='Language' />
  </div> 
   <div className='mb-3'>
<input type="text" className='form-control' placeholder='Git Hub' />
  </div> 
  
   <div className='mb-3'>
<input type="text" className='form-control' placeholder='Website' />
  </div>
  <div className='mb-3'>
    <textarea rows={5} className='form-control' placeholder='Overview'> </textarea>
  </div>
</div>

  </div>

</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning"  onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addproject