// import React, { useState } from 'react'
// import {  Form } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
// import { userLoginAPI, userRegisterAPI } from '../services/allPI';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



// function CandidateAuth({candRegister}) {
//   const[userData ,setUserData]=useState({
//     username:"",
//     email:"",
//     password:""
    
// })
// const navigate=useNavigate()
// ;


// console.log(userData);
// //function to register
// const handleRegister=async(e)=>{
// e.preventDefault()


// const {username,email,password}=userData
// if(!username || !email || !password){ 
// toast.info('please fill the form completely')
// }
// else{
// const result= await userRegisterAPI(userData)
// // console.log(result.data);
// console.log(result);
// if(result?.status === 200){
// toast.success(`${result.data.username} is successfully registered`)
// setUserData({
// username:"",
// email:"",
// password:""
// })

// // //navigate
// navigate('/candLogin')

// } 
// else{
// toast.error(result.response.data)
// }


// }
// }

// //login
// const handleLogin=async(e)=>{

//   e.preventDefault()

//   const{email ,password} =userData

//    if(!email || !password){
//   toast.warning('please fill the form completely')

//    }
//  else{
//      //api call
//  const result= await userLoginAPI(userData)
//    console.log(result);
//    if(result.status===200){
//     toast.success('login successful')

//     //store
//     sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
//     sessionStorage.setItem("token",result.data.token)


//     setUserData({
     
//       email:"",
//       password:""
//     })

//     //navigate
   
//     setTimeout(()=>{
//       navigate('/jobs')

//     },2500)
    


//    }else{
//     alert(result.response.data)
//    }
  
//    }

//    }
//   const registerForm=candRegister?true:false
//   return (
//     <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
//         <div className='w-75 container'>
                
//     <Link style={{color:'blue',textDecoration:'none'}} to={'/'} ><i class="fa-solid fa-arrow-left"  ></i>Back to Home</Link>
        
//         <div className='card  p-5 rounded' style={{backgroundColor:'#008080'}}>
//             <div className='row align-items-center'>
//                 <div className="col-lg-6">
//                     <img src="https://static.vecteezy.com/system/resources/previews/006/916/298/non_2x/biometric-authentication-concept-illustration-vector.jpg" 
//                     alt="no image" style={{width:'100%',height:'300px'}} />
//                 </div>
//                 <div className="col-lg-6">
//                     <div className='d-flex justify-content-center align-items-center flex-column'>
//                         <h1 className='text-light'>JobHub</h1>

//                         <h5 className='text-light ms-5 mt-4'>
//             {
//                 registerForm?"sign up to your account":"Sign in to your account"
//             }
//         </h5>
        
//           <Form className='mt-5 w-100'>
//            { registerForm && <Form.Group className="mb-3" controlId="formBasicEmail">
       
//        <Form.Control type="text" placeholder="Enter user name"value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} />
//      </Form.Group>}
//      <Form.Group className="mb-3" controlId="formBasicEmail" >
       
//        <Form.Control type="text" placeholder="Enter  email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}  />
//      </Form.Group>
//      <Form.Group className="mb-3" controlId="formBasicEmail">
       
//        <Form.Control type="text" placeholder="Enter password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} />
//      </Form.Group>
  
//      {  registerForm?
    
//     <div className="mt-5">
//     <button  className='btn btn-warning rounded' onClick={handleRegister}>Register</button>
//     <p>Already a user? Click here to <Link to={'/candLogin'}  style={{color:'blue'}}>Login</Link></p>
//   </div>:
//    <div className="mt-5">
//    <button className='btn btn-warning rounded' onClick={handleLogin}>Login</button>
//    <p>New user? Click here to <Link to={'/candRegister'} style={{color:'blue'}}  >Register</Link></p>
//  </div>
//   }

          

//           </Form>
         
          

        
       
    
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//         </div>
//         <ToastContainer autoClose={2000} theme='colored' position='top-center' />
//     </div>
//   )
// }



// export default CandidateAuth

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { userLoginAPI, userRegisterAPI } from '../services/allPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';

function CandidateAuth({ candRegister }) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.info('Please fill the form completely');
    } else {
      const result = await userRegisterAPI(userData);
      console.log(result);
      if (result?.status === 200) {
        toast.success(`${result.data.username} is successfully registered`);
        setUserData({
          username: "",
          email: "",
          password: ""
        });
        navigate('/candLogin');
      } else {
        toast.error(result.response.data);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = userData;
    if (!email || !password) {
      toast.warning('Please fill the form completely');
    } else {
      const result = await userLoginAPI(userData);
      console.log(result);
      if (result.status === 200) {
        toast.success('Login successful');
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
        sessionStorage.setItem("token", result.data.token);
        setUserData({
          email: "",
          password: ""
        });
        setTimeout(() => {
          navigate('/jobs');
        }, 2500);
      } else {
        alert(result.response.data);
      }
    }
  };

  const registerForm = candRegister ? true : false;

  return (
    <MDBContainer fluid>
      <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>
      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <MDBCardBody className='p-5 text-center d-flex flex-column align-items-center justify-content-center'>
          <h2 className="fw-bold mb-5">JobHub</h2>

          <Form className='mt-4 w-75 d-flex flex-column align-items-center justify-content-center'>
            {registerForm && (
              <MDBInput placeholder='Enter user name' outline value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} style={{ width: '400px' }} />
            )}<br/>

            <MDBInput placeholder='Enter  email' outline value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} style={{ width: '400px' }} />
           <br/>
            <MDBInput placeholder='Enter password' type='password' outline value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} style={{ width: '400px' }} />

            {registerForm ? (
              <div className='mt-4'>
                <button onClick={handleRegister} className='btn btn-info rounded'>Register</button>
                <p>
                  Already a user? Click here to{' '}
                  <Link to={'/candLogin'} style={{ color: 'blue' }}>
                    Login
                  </Link>
                </p>
              </div>
            ) : (
              <div className='mt-4'>
                <button className='btn btn-info rounded' onClick={handleLogin}>Login</button>
                <p>
                  New user? Click here to{' '}
                  <Link to={'/candRegister'} style={{ color: 'blue' }}>
                    Register
                  </Link>
                </p>
              </div>
            )}
          </Form>
        </MDBCardBody>
      </MDBCard>
      <ToastContainer autoClose={2000} theme='colored' position='top-center' />
    </MDBContainer>
  );
}

export default CandidateAuth;
