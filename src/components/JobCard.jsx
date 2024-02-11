

import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, Modal, Row,Col } from 'react-bootstrap';
import { applyJobAPI, getApplicationsApi } from '../services/allPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function JobCard({ jobs }) {

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);
    
  const[preview , setpreview] =useState("")

  //get applications


  const[token,setToken]=useState("")
    const[applyjob,setApplyjob]=useState({
      applicantName:'',
      qualification:'',
      skills:'',
      experience:'',
      phone:'',
      email:'',
      cv:'',
      company:''

    })
   const handleClose1=()=>{
    setApplyjob({
      applicantName:'',
      qualification:'',
      skills:'',
      experience:'',
      phone:'',
      email:'',
      cv:''
    })
    setpreview("")
   }
   useEffect(()=>{
    if(applyjob.cv){
      (setpreview(URL.createObjectURL(applyjob.cv)))
    }
  },[applyjob.cv])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }else{
      setToken("")
    }
  })
/*   console.log(preview);
 */    
/*     console.log(applyjob);
 */
    //job applying function

    const handleAdd = async(e,cname,ctitle)=>{
      e.preventDefault()
      console.log(cname);
/*       setApplyjob({...applyjob,company:cname})
 */
      const {applicantName,qualification,skills,experience,phone,email,cv} = applyjob
     

      if(!applicantName || !qualification || !skills || !experience || !phone|| !email|| !cv ){
        toast.warning('please fill the form completely')
      }else{
    
        //reqBody
        //1)create object for fotmData -since we have uploaded content
        const reqBody = new FormData()
        //2)add data to formData- append()
        reqBody.append("applicantName",applicantName) 
        reqBody.append("qualification",qualification) 
        reqBody.append("skills",skills) 
        
        reqBody.append("experience",experience) 
        reqBody.append("phone",phone)
        reqBody.append("email",email)
        reqBody.append("cv",cv) 
        reqBody.append("company",cname)
        reqBody.append("title",ctitle)

        if(token){
          const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
          const result= await applyJobAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status===200){
/*             console.log(result.data);
 */            toast.success('Job applied successfully')
            handleModalClose()
            //context
            // setAddProjectResponse(result.data)
            
            

          }
          else{
            toast.error('something went wrong')
           }
        }

      
      }

    }








  return (
    <>
    <Card className='shadow mb-4'>
      <Card.Body style={{ fontFamily: 'Arial' }}>
        <Card.Title className='mb-2' style={{ fontSize: '22px' }}>
          Job Role: <span  style={{color:'blue'}}>{jobs.title}</span>
        </Card.Title>
        <Card.Title className='mb-2' style={{ fontSize: '15px' }}>
          Company: <span >{jobs.company}</span>
        </Card.Title>
        <Card.Title className='mb-2' style={{ fontSize: '15px' }}>
          Qualification: <span >{jobs.qualification}</span>
        </Card.Title>
        <Card.Title className='mb-2' style={{ fontSize: '15px' }}>
          Skills: <span >{jobs.skills}</span>
        </Card.Title>

        <Card.Title className='mb-2' style={{ fontSize: '15px' }}>
          Experience: <span >{jobs.experience}</span>
        </Card.Title>
        <Card.Title className='mb-2' style={{ fontSize: '15px' }}>
         Vacancies: <span >{jobs.vacancies}</span>
        </Card.Title>
        <Card.Title className='mb-2' style={{ fontSize: '15px' }}>
          Location: <span >{jobs.location}</span>
        </Card.Title>
{/* 
        <Card.Title className='mb-2' style={{ textAlign: 'justify', fontSize: '14px' }}>
          Description: {jobs.description}
        </Card.Title> */}
        <Button variant="primary" className='mt-3' onClick={handleModalShow}>Apply Now</Button>
      </Card.Body>
    </Card>
    <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for {jobs.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <div className='d-flex justify-content-center align-items-center flex-column'>
         
        <div className="mb-3 w-100">
        <input type="text" placeholder='Enter your name' className='form-control' value={applyjob.applicantName} onChange={(e)=>setApplyjob({...applyjob,applicantName:e.target.value})}  />


       </div>
       <div className="mb-3 w-100">
        <input type="text" placeholder='Qualification' className='form-control'  value={applyjob.qualification} onChange={(e)=>setApplyjob({...applyjob,qualification:e.target.value})} />
      </div>
      <div className="mb-3 w-100">
        <input type="text" placeholder='Skills' className='form-control'  value={applyjob.skills} onChange={(e)=>setApplyjob({...applyjob,skills:e.target.value})}  />
      </div>

      <div className="mb-3 w-100">
        <input type="text" placeholder='Experience in years' className='form-control'  value={applyjob.experience} 
        onChange={(e)=>setApplyjob({...applyjob,experience:e.target.value})} />
      </div>
      <div className="mb-3 w-100">
        <input type="text" placeholder='Contact Number' className='form-control'  value={applyjob.phone} 
        onChange={(e)=>setApplyjob({...applyjob,phone:e.target.value})} />
      </div>
      <div className="mb-3 w-100">
        <input type="text" placeholder='Email ID' className='form-control'  value={applyjob.email} 
        onChange={(e)=>setApplyjob({...applyjob,email:e.target.value})} />
      </div>
      <div className="mb-3 w-100">
        <h5>Upload your CV (pdf format)</h5>
        <label htmlFor='cv'>
        <input id='cv' type="file"  onChange={(e)=>setApplyjob({...applyjob,cv:e.target.files[0]})}/>

        </label>
       
       
      </div>


       </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancle
          </Button>
          <Button variant="primary" onClick={(e)=>handleAdd(e,jobs.company,jobs.title)}>
            Submit Application
          </Button>
        </Modal.Footer>
      </Modal>
     





   <ToastContainer autoClose={2000} theme='colored' position='top-center' />


    </> 
  );
}

export default JobCard;
