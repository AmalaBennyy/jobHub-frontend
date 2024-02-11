
import React, { useEffect,useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { deletejobApplicationApi, getApplicationsApi } from '../services/allPI';

function ApplicationList() {
  const[allapplication,setAlApplications]=useState([])
  
  const[cname,setcname]=useState("")

  
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    padding:'10px'
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };


  const getAllApplications = async()=>{
    // e.preventDefault()
  
    if(sessionStorage.getItem("token")){
       const token = sessionStorage.getItem("token")
       console.log(token);
       const reqHeader = {
       "Content-Type" : "application/json",
        "Authorization" :`Bearer ${token}`
      }
       const result =await  getApplicationsApi(reqHeader)
        console.log(result.data);
       if(result.status===200){
  
        setAlApplications(result.data)

       }
     
     }
   }

   useEffect(()=>{
  setcname(JSON.parse(sessionStorage.getItem("existingCompany")).username)
   },[])
   console.log(cname);

   let selectedCandidates = allapplication.filter((item)=>item.company.toLowerCase()===cname.toLowerCase())
   console.log(selectedCandidates);
   
   
  


   useEffect(()=>{
    getAllApplications()
    },[])
      

    const handleDelete=async(id)=>{
      const token=sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" :`Bearer ${token}`
      }
      const result=await deletejobApplicationApi(id,reqHeader)
      console.log(result);
      if(result.status===200){
        getAllApplications()
      }else{
        console.log(result.response.data);
      }
    
    }
     




  return (
    <div>
        <Row>
            <Col md={1}></Col>
            <Col md={10}>
            <h2 className='text-center mt-3 text-info'>Job Applications</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Applicant Name</th>
            <th style={thTdStyle}>Applied Job</th>

            <th style={thTdStyle}>Qualification</th>
            <th style={thTdStyle}>Skills</th>
            <th style={thTdStyle}>Experience</th>
            <th style={thTdStyle}>Contact</th>
            <th style={thTdStyle}>Email</th>

            <th style={thTdStyle}>CV</th>
            <th style={thTdStyle}>Action</th>

          </tr>
        </thead>
        <tbody>
         { allapplication.length>0?
         selectedCandidates.map((item)=>(
         <tr>
            <td style={thTdStyle}>{item.applicantName}</td>
            <td style={thTdStyle}>{item.title}</td>
            <td style={thTdStyle}>{item.qualification}</td>

            <td style={thTdStyle}>{item.skills}</td>
            <td style={thTdStyle}>{item.experience}</td>
            <td style={thTdStyle}>{item.phone}</td>
            <td style={thTdStyle}>{item.email}</td>
            
            
            <td style={thTdStyle}>
              {/* <a href="#" target="_blank" rel="noopener noreferrer">
                View CV
              </a> */}
{/*               
               <a href={`http://localhost:4700/uploads/${item.cv}`} target="_blank" rel="noopener noreferrer">
                    View CV <br />
                  </a> */}
                  <a href={`http://localhost:4700/uploads/${item.cv}`} download>
                    Download CV
                  </a>
            </td>
            <td style={thTdStyle}>
              <button className='btn outline-light' onClick={()=>handleDelete(item._id)}><i class="fa-solid fa-trash text-danger"></i></button>
              {/* <button className='btn outline-light' ><i class="fa-solid fa-check text-success"></i></button> */}
              
            </td>
          </tr>)):
          <p>no </p>
          }
          
        </tbody>
      </table>
            </Col>
            <Col md={1}></Col>
            

        </Row>
   
    </div>
  );
}

export default ApplicationList;


