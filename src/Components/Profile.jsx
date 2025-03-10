import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Profile() {
  return (
    <div>
        <div className='d-flex justify-content-between border shadow'>
             <h2 className='text-success'>Profile</h2> 
            <button className='btn rounded shadow p-2'> <FontAwesomeIcon icon={faAngleDown} /></button>
             </div>


             <div className='container p-5'>
             <div>
                    <label className='text-center' htmlFor="profileimage">
                        <input type="file" style={{display:"none"}} />
                        <img className='img-fluid rounded w-75  ' src="https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png" alt="" />
                    </label>
                </div>
                <div className='mt-2'>
                    <form className='w-100'>
                        <div ><input className='form-control rounded border p-2 ' type="text" placeholder='github url' /></div>
                        <div className='mt-1'><input className='form-control rounded border p-2' type="text" placeholder='linkdin url url' /></div>

                    </form>
                    <button className='btn w-100 rounded shadow p-2 mt-2 bg-info text-light'>Update Profile</button>
                </div>
             </div>
    </div>
  )
}

export default Profile