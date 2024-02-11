
// export default AdminDashboard;


// AdminDashboard.js

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Companycard from '../components/Companycard';
import CandidateCard from '../components/CandidateCard';
import Sidebar from '../components/Sidebar';
import { Row, Col } from 'react-bootstrap';
import AdminJobCard from '../components/AdminJobCard';
import { getAllCandidateApi, getAllCompanyApi, getAlljobAdminApi } from '../services/allPI';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//  import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function AdminDashboard() {
  // Assume you have counts for companies and candidates
  const [companies, setCompanies] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    // Fetch the total number of companies from your API
    const fetchTotalCompanies = async () => {
      if (sessionStorage.getItem('token')) {
        const token = sessionStorage.getItem('token');
        const reqHeader = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      try {
         const response = await getAllCompanyApi(reqHeader);
         const candidateResponse = await getAllCandidateApi(reqHeader);
         const jobResponse = await getAlljobAdminApi(reqHeader);
        // setCompanies(response.data.totalCompanies);  
        setCompanies(response.data || []);
        setCandidates(candidateResponse.data || []);
        setJobs(jobResponse.data || []);
        
        // Assuming your API response has a property named 'totalCompanies'
      } catch (error) {
        console.error('Error fetching total companies:', error);
      }
    };}

    fetchTotalCompanies();
  }, []);
  const totalCompanies = companies.length;
  const totalCandidates = candidates.length;
  const totalJobs = jobs.length;
  

  return (
    <div style={{backgroundColor:'#1d2951'}}>
      <Header />
      <Row>
        <Col md={3}>
          {/* Sidebar */}
          <Sidebar />
        </Col>
        <Col md={9}>
          {/* Main Content */}
          <div className="content">
            <div>
            <h2 className="text-center  mt-5 mb-4" style={{fontFamily:'Lobster',color:'white'}}>WELCOME ADMIN !!</h2>
            </div>
           
            <Row className='mt-5'>
              <Col>
                {/* Company Card */}
                <Companycard totalCompanies={totalCompanies} />
              </Col>
              <Col>
                {/* Candidate Card */}
                <CandidateCard   totalCandidates={totalCandidates}/>
              </Col>
              <Col>
              <AdminJobCard totalJobs={totalJobs} />
              </Col>
            </Row>
            <Row>
              <Col>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider> */}
              
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AdminDashboard;
