

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'


import { getAlljobListAPI, getAlljobListAPI1 } from '../services/allPI'
import JobCard from '../components/JobCard'

function Jobs() {
    const [username,setUsername]=useState("")
    useEffect(()=>{
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    },[])
    console.log(username);

const[alljobs,setAlljobs]=useState([])
 const[searchkey,setSearchKey]=useState("")
 const[istoken,setIsToken]=useState(false)
 console.log(searchkey);

  const getAlljobs = async()=>{
    // e.preventDefault()

    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      console.log(token);
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" :`Bearer ${token}`
      }
      const result =await getAlljobListAPI1(searchkey,reqHeader)
      console.log(result.data);
      if(result.status===200){

        setAlljobs(result.data)
      }
     
    }
  }
     console.log(searchkey);

    
  useEffect(()=>{
  getAlljobs()
  },[searchkey])

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setIsToken(true)
     }
    else{
      setIsToken(false)
     }
   },[])



  return (
  
<>
<Header/>

<div style={{width:"100%",height:"100vh"}}>
    <h4 className='ms-4 mt-4'>Welcome {username}</h4>
<h1 className='text-center mt-2 text-info'>Avaliable Jobs</h1>
 <div className='mt-5'><form class="d-flex" >
        <input   value={searchkey} onChange={(e)=>setSearchKey(e.target.value)} class="form-control  w-25" style={{marginLeft:"500px"}} type="search" placeholder="Search Jobs"/>
        <button  class="btn btn-light my-2 my-sm-0 ms-2 text-black" type="submit" >Search</button>
      </form></div> 

      <Row className=' container-fluid' style={{marginTop:"70px"}}>
{alljobs?.length>0?
alljobs.map((item)=>( <Col sm={12}  md={6} lg={4}>
    <JobCard jobs={item} />


  
  
  
  
  </Col>))
 
: <div>
    <p>No such jobs availabele</p>
      
     
 </div>  
 

}

</Row>



</div>






</>

    )
}

export default Jobs
