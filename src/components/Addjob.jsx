

// JobPostingForm.js

import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { addjobAPI } from '../services/allPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addJobResponseContext } from '../contexts/ContextShare';

export function Addjob ()  {
  const [username,setUsername]=useState("")
  useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem("existingCompany")).username)
  },[])
  const{addJobResponse,setaddJobReaponse}=useContext(addJobResponseContext)
  const [show, setShow] = useState(false);
  const[token,setToken]=useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const[preview , setpreview] =useState("")
  const[jobDetails,setJobDetails]=useState({
    title:'',
    company:'',
    qualification:'',
    skills:'',
    experience:'',
    
    description:'',
    vacancies:'',
    location:''
  })
 console.log(jobDetails);
 const handleClose1=()=>{
  setJobDetails({
    title:'',
    company:'',
    qualification:'',
    skills:'',
    experience:'',
    
    description:'',
    vacancies:'',
    location:''
    })
  }

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }else{
      setToken("")
    }
  })
  // console.log(preview);

  //add job
  const handleAdd = async(e)=>{
    e.preventDefault()
    const {title,company,qualification,skills,experience,description,vacancies,location} = jobDetails

    if(!title ||!company || !qualification || !skills || !experience || !description || !vacancies || !location){
      toast.warning('please fill the form completely')
    }
  
      //reqBody
  
     else if(token){
        const reqHeader={
          "Content-Type" : "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result= await addjobAPI(jobDetails,reqHeader)
        console.log(result);
        if(result.status===200){
          console.log(result.data);
          toast.success('Job added successfully')
          handleClose()
          //context
          setaddJobReaponse(result.data)
          
          

        }
        else{
          toast.error(result.response.data);
        }
      

    
    }

  }

  return (
    <>
    
<Button variant="primary" onClick={handleShow}  style={{marginLeft:'650px',borderRadius:'20px'}}>
       POST JOB
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Job Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

   <Row>
    <Col md={0}>
    {/* <label htmlFor='image' className='text-center'>
            <input id='image' type="file" style={{display:'none'}} onChange={(e)=>setprojectdetails({...projectdetails,image:e.target.files[0]})} />
            <img width={'200px'} height={'200px'} src={preview?preview:"http://blogs.ulethbridge.ca/it-services/files/2014/02/cartoon-of-proj-mgmt.jpg"} 
            alt="no image" className='rounded-circle' />
        </label> */}
    </Col>
    <Col md={12}>

        <div className='d-flex justify-content-center align-items-center flex-column'>
         
        <div className="mb-3 w-100">
        <input type="text" placeholder='Job Title' className='form-control' value={jobDetails.title} onChange={(e)=>setJobDetails({...jobDetails,title:e.target.value})}  />


       </div>
       <div className="mb-3 w-100">
        <input type="text" placeholder='Company Name' className='form-control' value={username || jobDetails.company} onChange={(e)=>setJobDetails({...jobDetails,company:username})}  />


       </div>
       <div className="mb-3 w-100">
        <input type="text" placeholder='Qualification' className='form-control' value={jobDetails.qualification} onChange={(e)=>setJobDetails({...jobDetails,qualification:e.target.value})} />

       </div>
       <div className="mb-3 w-100">
        <input type="text" placeholder='Skills' className='form-control' value={jobDetails.skills} onChange={(e)=>setJobDetails({...jobDetails,skills:e.target.value})} />

       </div>

       <div className="mb-3 w-100">
        <input type="text" placeholder='Experience Needed' className='form-control' value={jobDetails.experience} onChange={(e)=>setJobDetails({...jobDetails,experience:e.target.value})} />

       </div>
       <div className="mb-3 w-100">
        <input type="text" placeholder='Job Description' className='form-control' value={jobDetails.description}
         onChange={(e)=>setJobDetails({...jobDetails,description:e.target.value})} />

       </div>
    
       <div className="mb-3 w-100">
        <input type="text" placeholder='Vacancies' className='form-control' value={jobDetails.vacancies}
         onChange={(e)=>setJobDetails({...jobDetails,vacancies:e.target.value})} />

       </div>
       <div className="mb-3 w-100">
        <input type="text" placeholder='Location' className='form-control' value={jobDetails.location} onChange={(e)=>setJobDetails({...jobDetails,location:e.target.value})} />

       </div>

        </div>
    </Col>
   </Row>



    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose1} >
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={2000} theme='colored' position='top-center' />
    </>);
}

