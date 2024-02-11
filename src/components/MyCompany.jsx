// CompanyDashboard.js

import React, { useState, useEffect, useContext } from 'react';


import { Addjob } from './Addjob';
import { deletejobAPI, getjobListAPI } from '../services/allPI';
import { addJobResponseContext } from '../contexts/ContextShare';
import EditJob from './EditJob';

function MyCompany  ()  {
  const [jobList,setJoblist]=useState([])

const{addJobResponse,setaddJobReaponse}=useContext(addJobResponseContext)


 const getJoblist=async()=>{
  const token=sessionStorage.getItem("token")
  const reqHeader={
    "Content-Type" : "application/json",
    "Authorization" :`Bearer ${token}`
  }
  const result=await getjobListAPI(reqHeader)
  console.log(result.data);
  setJoblist(result.data)
 }
 useEffect(()=>{
  getJoblist()
 },[addJobResponse])


 const handleDelete=async(id)=>{
  const token=sessionStorage.getItem("token")
  const reqHeader = {
    "Content-Type" : "application/json",
    "Authorization" :`Bearer ${token}`
  }
  const result=await deletejobAPI(id,reqHeader)
  console.log(result);
  if(result.status===200){
    getJoblist()
  }else{
    console.log(result.response.data);
  }

}
 

  return (
    
    <>
   <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-8">
    <div className='card shadow p-4 w'>

<div className="d-flex justify-content-between">

    <h3 className='text-success'>Posted Jobs</h3>
    <Addjob />
</div>
<div className='mt-4'>

    {jobList?.length>0?
    jobList?.map((item)=>(
      <div className='border d-flex align-items-center p-2 rounded'>
      <h5>{item.title}</h5>
      <div className='ms-auto d-flex'>

      <EditJob job={item}/>
        
           {/* <button className='btn'><i class="fa-solid fa-pen-to-square text-info"></i></button> */}

         
          <button className='btn' onClick={()=>handleDelete(item._id)}><i class="fa-solid fa-trash text-danger"></i></button>
      </div>
  </div> 

    ))
     :

 



<p className='text-danger fw-bolder fs-4'>No jobs posted yet !!</p>}
</div>
</div>

    </div>
    <div className="col-md-2"></div>
   </div>

</>
  )
}

export default MyCompany;
