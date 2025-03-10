import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Myprojectcard from '../Components/Myprojectcard'

function Home() {
  return (
    <div>

      <div className="continer-fluid bg-success p-5 " style={{ height: "100vh" }}>
        <div className="row " style={{ height: "70vh" }}>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <h1 style={{fontSize:"70px"}}>Project fair</h1>
              <p>One stop destination for all software development Projects</p>
              <div>
                <Link to={'/Login'}>                  <button className='btn p-1 text-light mt-3'>Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>   
                <Link to={'/Dashboard'}>                  <button className='btn p-1 text-light mt-3'>Manage Projects <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
                </div>           
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center ">
            <img className='img-fluid w-75 rounded border shadow' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/best_project_management_companie.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* explore project */}
      <div className='p-5 bg-dark'>
        <div className='text-center mt-2'>
        <h1 className='text-light'>Explore My Projects</h1>

        </div>
      <div className='container-fluid'>
<div className='row'>
<div className='col-md-4 mt-2'>
  <Myprojectcard/>
</div>
<div className='col-md-4 mt-2'>
<Myprojectcard/>
</div>
<div className='col-md-4 mt-2'>
<Myprojectcard/>
</div>

</div>
      </div>
      <Link to={'/Allproject'} className='text-danger'>  <p className='py-5 text-center'>See More Projects ...</p></Link>
      </div>
    </div>
  )
}

export default Home