import React from 'react'
import Header from '../Components/Header'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Myprojectcard from '../Components/Myprojectcard'

function Allproject() {
  return (
    <div>
      <Header/>

      <div className='container-fluid mt-5'>
<h1 className='text-center'>All Projects</h1>
<div className='mt-5'>
<div className='row'>
  <div className='col-md-4'></div>
  <div className='col-md-4 d-flex'>
    <input type="text" className='form-control rounded border shadow ' placeholder='Technologies' />
    <FontAwesomeIcon style={{color:"lightgray",marginTop:"11px",marginLeft:"-30px"}} icon={faSearchengin} />
  </div>
  <div className='col-md-4'></div>

</div>
</div>
      </div>
      <div className='container-fluid mb-5'>
      <div className='row mt-5 '>
<div className='col-md-3 mt-2'>
  <Myprojectcard/>
</div>
<div className='col-md-3 mt-2'>
<Myprojectcard/>
</div>
<div className='col-md-3 mt-2'>
<Myprojectcard/>
</div>
<div className='col-md-3 mt-2'>
<Myprojectcard/>
</div>

</div>
      </div>
    </div>
  )
}

export default Allproject