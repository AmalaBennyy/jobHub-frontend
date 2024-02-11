import React, { useEffect, useState } from 'react'
import MyCompany from '../components/MyCompany'
import {Col, Row, } from 'react-bootstrap'
import Header from '../components/Header'
import ApplicationList from '../components/Applicationlist'
// import CompanyProfile from '../components/CompanyProfile'

function CompanyDash() {
  const [username,setUsername]=useState("")
  useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem("existingCompany")).username)
  },[])
  console.log(username);
  return (
    <div>
      <Header/>
        <h2 className='text-center mt-4'>{username}-COMPANY PANEL</h2>
       

        <Row className='container-fluid mt-5'>
        
        <Col md={12}>
          
          <MyCompany/>
        </Col>
        <Col md={0}>
 
 {/* <CompanyProfile/> */}
          
        </Col>

     </Row>
     <Row>
      <Col>
      <ApplicationList />
       
      </Col>
     </Row>

    </div>
  )
}

export default CompanyDash