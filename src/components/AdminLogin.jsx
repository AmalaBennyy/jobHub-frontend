import React, { useState } from 'react';
import {MDBContainer,MDBCard,MDBCardBody,MDBInput,}from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { adminLoginAPI } from '../services/allPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLogin() {
    const[userData ,setUserData]=useState({
       
        email:"",
        password:""
        
    })
    const navigate=useNavigate()
    
    const handleLogin=async(e)=>{

        e.preventDefault()
      
        const{email ,password} =userData
      
         if(!email || !password){
toast.warning('please fill the form completely')
      
         }
       else{
           //api call
       const result= await adminLoginAPI(userData)
         console.log(result);
         if(result.status===200){
          toast.success('login successful')
      
          //store
          sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token",result.data.token)
      
      
          setUserData({
           
            email:"",
            password:""
          })
      
          //navigate
         
          setTimeout(()=>{
            navigate('/admindahboard')
      
          },2000)
          
      
      
         }else{
          toast.error(result.response.data)
         }
        
         }
      
         }
    
  return (
    <div>
          <MDBContainer fluid>
      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody  className='p-5 text-center d-flex flex-column align-items-center justify-content-center'>
          <h2 className="fw-bold mb-5">Admin Login</h2>

          {/* Update wrapperClass and add custom styles */}
          <MDBInput wrapperClass='mb-3' placeholder='Email' id='emailInput' type='email' style={{fontSize: '14px', width:'400px'}}  
          value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
          <MDBInput wrapperClass='mb-3' placeholder='Password' id='passwordInput' type='password' style={{fontSize: '14px',width:'400px'}}
           value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>

          {/* Update wrapperClass and add custom styles */}
          {/* <MDBBtn className='btn mb-4' size='md' style={{fontSize: '14px'}}>Log In</MDBBtn> */}
          <button className='btn btn-info mb-4 in' size='md' style={{fontSize: '14px'}} onClick={handleLogin}>Login</button>
        </MDBCardBody>
      </MDBCard>
      
    </MDBContainer>
    <ToastContainer autoClose={2000} theme='colored' position='top-center' />

    </div>

  );
}

export default AdminLogin;