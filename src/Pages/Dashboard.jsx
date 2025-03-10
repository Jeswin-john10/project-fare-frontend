import React from 'react'
import Header from '../Components/Header'
import Myproject from '../Components/Myproject'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <div>
      <Header/>
      <div className='p-4'>
<h3>Welcome <span className='text-warning'>User</span></h3>
<div className='conatiner'>
<div className='row'>
<div className='col-sm-12 col-md-8'>
  <Myproject/>
</div>
<div className='col-sm-12 col-md-4'>
  <Profile/>
</div>

</div>
</div>
      </div>
    </div>
  )
}

export default Dashboard