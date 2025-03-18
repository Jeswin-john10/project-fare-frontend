import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addprojectapi } from '../services/allapi';
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Addproject() {
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("")
  const[token,setToken]=useState("")
  const [projectdetail, setProjectdetail] = useState({
    tittle: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    profileimage: ""
  })
  console.log(projectdetail);
  const handlefile = (e) => {
    // console.log(e.target.files[0]);
    setProjectdetail({ ...projectdetail, profileimage: e.target.files[0] })
  }

  useEffect(() => {
    if (projectdetail.profileimage) {
      setPreview(URL.createObjectURL(projectdetail.profileimage))
    }
  }, [projectdetail.profileimage])

  const handlecancel = () => {
    setProjectdetail({
      tittle: "",
      language: "",
      github: "",
      website: "",
      overview: "",
      profileimage: ""
    })
    setPreview("")
  }
  const handleadd = async() => {
const{tittle , language ,website ,overview ,profileimage,github} = projectdetail
if(!tittle || !language || !website ||!overview ||!profileimage||!github){
  alert('please fill the form')
}else{
//append
const reqBody = new FormData()
reqBody.append("tittle" ,tittle)
reqBody.append("language" ,language)
reqBody.append("website" ,website)
reqBody.append("overview" ,overview)
reqBody.append("github" ,github)
reqBody.append("profileimage" ,profileimage)

if(token){
  const reqHeader ={
    "Content-Type" : "multipart/form-data",
    "Authorization" : `Bearer ${token}`
  }
    //api call
    const result= await addprojectapi (reqBody,reqHeader)
    console.log(result);
    if(result.status == 200){
toast.success('project added successfully')
    }else if(result.status == 406){
      toast.warning(result.response.data)
    }else{
      toast.error('something went wrong')
    }
}


  
}
  }


  const handleClose = () => {
    setShow(false)
    handlecancel()
  };
  const handleShow = () => setShow(true);



  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])
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
              <div className='col-md-6 mb-3'>
                <label htmlFor="projectimage">
                  <input onChange={(e) => handlefile(e)} id='projectimage' type="file" style={{ display: "none" }} />
                  <img className='img-fluid rounded' src={preview ? preview : "https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png"} alt="" />
                </label>
              </div>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <input value={projectdetail.tittle} onChange={(e) => setProjectdetail({ ...projectdetail, tittle: e.target.value })} type="text" className='form-control' placeholder='Tittle' />
                </div>

                <div className='mb-3'>
                  <input value={projectdetail.language} onChange={(e) => setProjectdetail({ ...projectdetail, language: e.target.value })} type="text" className='form-control' placeholder='Language' />
                </div>
                <div className='mb-3'>
                  <input value={projectdetail.github} onChange={(e) => setProjectdetail({ ...projectdetail, github: e.target.value })} type="text" className='form-control' placeholder='Git Hub' />
                </div>

                <div className='mb-3'>
                  <input value={projectdetail.website} onChange={(e) => setProjectdetail({ ...projectdetail, website: e.target.value })} type="text" className='form-control' placeholder='Website' />
                </div>
                <div className='mb-3'>
                  <textarea value={projectdetail.overview} onChange={(e) => setProjectdetail({ ...projectdetail, overview: e.target.value })} rows={5} className='form-control' placeholder='Overview'> </textarea>
                </div>
              </div>

            </div>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handlecancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleadd}>
            Add Project
          </Button>
          <ToastContainer
position="top-center"
autoClose={5000}

theme="colored"
/>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addproject