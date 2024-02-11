import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const sidebarStyles = {
    backgroundColor: '#367588',
    color: '#ffffff',
    padding: '20px',
    height: '680px',
    display: 'flex',
    flexDirection: 'column',
    width:'250px'
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#ffffff',
    padding: '10px',
    display: 'block',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={sidebarStyles}>
      <h3> Dashboard</h3>
      
          <Link to="/alljoblist" style={linkStyles}>
          <i class="fa-solid fa-bars me-3"></i>
            Jobs
          </Link>
        
          <Link to="/candlist" style={linkStyles}>
          <i class="fa-solid fa-users-line me-3"></i>
            Candidates
          </Link>
       
          <Link to="/companylist" style={linkStyles}>
          <i class="fa-solid fa-c me-3"></i>
            Companies
          </Link>
        
    </div>
  );
}

export default Sidebar;
