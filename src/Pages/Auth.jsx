import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerapi } from '../services/allapi'

function Auth({ register }) {
  const navigate = useNavigate()
  const [userdetails , setUserdetails]=useState({
    username:"",
    password:"",
    email:""
  })
  console.log(userdetails);


  const handleregister = async()=>{
const {username ,password,email} = userdetails
if(!username || !password ||! email){
  alert('plese fill the form')
}else{
  //api cal
  const result = await registerapi(userdetails)
  console.log(result);
  if(result.status == 200){
    alert('Registered Successfully')
    setUserdetails({
      username:"",
      password:"",
      email:""
    })
    navigate('/Login')
  }else if(result.status==406){
    alert(result.response.data)
  }else{
    alert('Something Went Wrong')
  }
  
}
  }
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className='conatiner w-75 mt-5 mb-5'>
          <h4><Link to={'/'} className='text-warning' style={{ textDecoration: "none" }}><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back Home</Link></h4>

          <div className='bg-success p-3'>
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/lock-accept-10615980-8579870.png" alt="" width={'70%'} />
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center text-light">
                <form className='w-100' action="">
                  <h4 className='text-center text-light'>
                    <FontAwesomeIcon icon={faStackOverflow} className='fa-2x' />  Project Fair
                  </h4>
                  {!register ?
                    <h5 className='text-center mb-5'>Sign In to Your Account</h5>
                    :
                    <h5 className='text-center mb-5'>Sign Up to Your Account</h5>

                  }
                  {register &&

                    <div className='mb-3'>
                      <input value={userdetails.username} onChange={(e)=>setUserdetails({...userdetails,username:e.target.value})} type="text" placeholder='Username' className='form-control rounded-0' />
                    </div>}

                  <div className='mb-3'>
                    <input value={userdetails.email} onChange={(e)=>setUserdetails({...userdetails,email:e.target.value})}  type="email" placeholder='Email ID' className='form-control rounded-0' />
                  </div>
                  <div className='mb-3'>
                    <input value={userdetails.password} onChange={(e)=>setUserdetails({...userdetails,password:e.target.value})}  type="password" placeholder='Password' className='form-control rounded-0' />
                  </div>
                  <div className='mb-3'>
                    {!register ?
                      <div>
                        <button type='button' className='btn btn-warning w-100 rounded-0'>Login</button>
                        <p className='mt-3'>New User? click Here to <Link to={'/Register'} className='text-danger'>Register</Link></p>
                      </div> :
                      <div>
                        <button onClick={handleregister} type='button' className='btn btn-warning w-100 rounded-0'>Register</button>
                        <p className='mt-3'>Already a User? click Here to <Link to={'/Login'} className='text-danger'>Login</Link></p>
                      </div>
                    }


                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Auth