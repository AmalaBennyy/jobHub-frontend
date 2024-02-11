// Home.js (React Component)

import React from 'react';
import { Link } from 'react-router-dom';
import Header from  '../components/Header'
import Footer from '../components/Footer';
import { Col, Row } from 'react-bootstrap';
import jobhome from '../assets/jobhome.png'

const Home = () => {
  return (
    <div>
    
    <Header/>

        <div className="home-container bg-secondary " style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>JobHub</h1><br />
        <p style={styles.subHeading}>"Your gateway to exciting career opportunities"</p><br />
      </header>



        <section>
          <Row>
            <Col md={6}>
              <div>
                <img src={jobhome} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div  className='mt-4' style={{textAlign:'justify'}}>
              <p> <span style={{color:'blue',fontSize:'30px',fontFamily:'Nanum Myeongjo'}}>Are You Looking for a JOB?</span><br /> <br />
                Whether you're on the lookout for your dream job or searching for the perfect candidate to join your team, 
                you've come to the right place. Our platform seamlessly connects job seekers with employers, creating a dynamic space for 
                career growth and professional success. Explore a multitude of job listings, ranging from entry-level positions to executive
                 roles, and discover the ideal match for your skills and aspirations. Employers, post your job openings and tap into a pool 
                 of qualified candidates eager to contribute their expertise to your organization. Job seekers, embark on your career journey
                  with confidence as you navigate through diverse opportunities tailored to your preferences. Join us and let's make career connections that matter!
          </p>
              </div>
              <div className='start mt-4' style={styles.start}><br /><br />
     <Link to={'/companyLogin'} className='btn btn-info me-4'>Recrute Now</Link>
     <Link to={'/candLogin'} className='btn btn-info ms-4'>Find Job </Link>

     </div>
            </Col>
          </Row>
          


        </section>

     

     

   
    <Footer/>
    </div>
    </div>

   

  );
};

const styles = {
  container: {
    // maxWidth: '1200px',
    width:'100%',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '36px',
    color: '#333',
  },
  subHeading: {
    fontSize: '18px',
    color: '#666',
    fontFamily:'Salsa'
  },
  section: {
    marginBottom: '30px',
  },
  sectionHeading: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  searchBar: {
    display: 'flex',
  },
  searchInput: {
    flex: '1',
    padding: '8px',
    marginRight: '10px',
  },
  searchButton: {
    padding: '8px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  jobList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  jobItem: {
    flex: '0 0 48%',
    padding: '15px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  jobTitle: {
    fontSize: '18px',
    color: '#333',
  },
  company: {
    fontSize: '14px',
    color: '#666',
  },
  viewDetailsLink: {
    display: 'block',
    marginTop: '10px',
    color: '#007bff',
    textDecoration: 'none',
  },
  step: {
    marginBottom: '20px',
  },
  stepHeading: {
    fontSize: '18px',
    color: '#333',
  },
  stepDescription: {
    fontSize: '14px',
    color: '#666',
  },
  footer: {
    marginTop: '30px',
    borderTop: '1px solid #ddd',
    paddingTop: '10px',
  },
  footerText: {
    fontSize: '14px',
    color: '#666',
  },
};

export default Home;
