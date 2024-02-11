


import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { companyloginAPI, companyregisterAPI } from '../services/allPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';

function CompanyAuth({ companyRegister }) {
  const [companyData, setCompanyData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const registerForm = companyRegister ? true : false;

  const handleRegister = async (e) => {
    e.preventDefault();

    const { username, email, password } = companyData;
    if (!username || !email || !password) {
      toast.info('Please fill the form completely');
    } else {
      const result = await companyregisterAPI(companyData);
      console.log(result);
      if (result?.status === 200) {
        toast.success(`${result.data.username} is successfully registered`);
        setCompanyData({
          username: "",
          email: "",
          password: ""
        });
        navigate('/companyLogin');
      } else {
        toast.error(result.response.data);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = companyData;
    if (!email || !password) {
      toast.warning('Please fill the form completely');
    } else {
      const result = await companyloginAPI(companyData);
      console.log(result);
      if (result.status === 200) {
        toast.success('Login successful');
        sessionStorage.setItem("existingCompany", JSON.stringify(result.data.existingCompany));
        sessionStorage.setItem("token", result.data.token);
        setCompanyData({
          email: "",
          password: ""
        });
        setTimeout(() => {
          navigate('/CompanyDash');
        }, 2500);
      } else {
        alert(result.response.data);
      }
    }
  };

  return (
    <MDBContainer fluid>
      <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>
      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <MDBCardBody className='p-5 text-center d-flex flex-column align-items-center justify-content-center'>
          <h2 className="fw-bold mb-5">JobHub</h2>
          

          <Form className='mt-4 w-75 d-flex flex-column align-items-center jusity-content-center'>
            {registerForm && (
              <MDBInput placeholder='Enter company name' outline value={companyData.username} onChange={(e) => setCompanyData({ ...companyData, username: e.target.value })} style={{ width: '400px' }} />
              
            )}<br/>

            <MDBInput placeholder='Enter company email' outline value={companyData.email} onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })} style={{ width: '400px' }} />  <br />

            <MDBInput placeholder='Enter password' type='password' outline value={companyData.password} onChange={(e) => setCompanyData({ ...companyData, password: e.target.value })} style={{ width: '400px' }} />

            {registerForm ? (
              <div className='mt-4'>
                <button onClick={handleRegister} className='btn btn-info rounded'>Register</button>
                <p>
                  Already a user? Click here to{' '}
                  <Link to={'/companyLogin'} style={{ color: 'blue' }}>
                    Login
                  </Link>
                </p>
              </div>
            ) : (
              <div className='mt-4'>
                <button className='btn btn-info rounded' onClick={handleLogin} >Login</button>
                <p>
                  New user? Click here to{' '}
                  <Link to={'/companyRegister'} style={{ color: 'blue' }}>
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

export default CompanyAuth;
