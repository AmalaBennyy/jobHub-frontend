


import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import CompanyAuth from './components/CompanyAuth';
import CandidateAuth from './components/CandidateAuth';
import CompanyDash from './pages/CompanyDash';

import Jobs from './pages/Jobs';
import Applicationlist from './components/Applicationlist';

import AdminLogin from './components/AdminLogin';
import AdminDahborad from './pages/AdminDahborad';
import CandidateList from './components/CandidateList';
import CompanyList from './components/CompanyList';
import AllJob from './components/AllJob';

function App() {
  const location = useLocation();


  return (
    <>
      {/* Pass location as a prop to Header */}
      {/* <Header location={location} /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companyRegister' element={<CompanyAuth companyRegister />} />
        <Route path='/companyLogin' element={<CompanyAuth companyLogin />} />
        <Route path='/candRegister' element={<CandidateAuth candRegister />} />
        <Route path='/candLogin' element={<CandidateAuth candLogin />} />


        <Route path='/CompanyDash' element={<CompanyDash dashboard />} />
        <Route path='/admin' element={<AdminLogin/>} />
        <Route path='/admindahboard' element={<AdminDahborad/>} />


        


        
        




{/*      
        <Route path='/joblist' element={<JobList />} /> */}
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/applicationlist' element={<Applicationlist />} />
        <Route path='/candlist' element={ <CandidateList/>} />
        <Route path='/companylist' element={  <CompanyList/>} />
        <Route path='/alljoblist' element={ <AllJob/>} />
        
        <Route />
      </Routes>

     

      {/* <Login/> */}
     
    </>
  );
}

export default App;

