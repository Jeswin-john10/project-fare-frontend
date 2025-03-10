import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div className='container-fluid bg-dark text-light'>

<div className='row p-2 d-flex justify-content-center'>
<div className='col-md-3 mt-2 '>
<h1><FontAwesomeIcon icon={faStackOverflow} /> Project Fair</h1>
<p className='mt-3' style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Earum porro vel rem, cum ea beatae quas inventore nisi in quaer
  at soluta vero consequatur laudantium id?</p>
</div>
<div className='col-md-2 mt-2 d-flex justify-content-center'>
 <div>
 <h1>Guides</h1>
  <p>Home</p>
  <p>Project</p>
  <p>Dashboard</p>
 </div>
</div>
<div className='col-1'></div>
<div className='col-md-2 mt-2 d-flex justify-content-center'>
<div>
<h1>Links</h1>
  <p>React</p>
  <p>React-Bootstrap</p>
  <p>Bootswatch</p>
</div>
</div>
<div className='col-md-3 mt-2'>
  <h1>Contact Us</h1>
  <div className='d-flex mt-3'>
    <input className='border shadow rounded p-1' type="text" placeholder='Email'/>
    <button className='btn btn-warning ms-3 rounded-0 shadow'>Subscribe</button>
  </div>
  <div className='d-flex justify-content-between mt-4'>
  <FontAwesomeIcon className='fa-2x text-light' icon={faTwitter} />
  <FontAwesomeIcon className='fa-2x text-light' icon={faInstagram} />
  <FontAwesomeIcon className='fa-2x text-light' icon={faFacebook} />
  <FontAwesomeIcon className='fa-2x text-light' icon={faLinkedin} />
  </div>
</div>

</div>

    </div>
  )
}

export default Footer