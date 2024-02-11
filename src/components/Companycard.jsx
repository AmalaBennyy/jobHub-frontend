// CompanyCard.js

import React from 'react';
import { Card } from 'react-bootstrap';

function CompanyCard({ totalCompanies }) {
  const cardStyles = {
    width: '300px',
    
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    height:'200px'
  };

  const cardBodyStyles = {
    backgroundColor: '#faf0e6',
    color: '#ffffff',
    fontFamily: 'Ysabeau Office', 

  };

  const titleStyles = {
    fontSize: '25px',
    marginBottom: '10px',
    color:'purple'
  };

  const textStyles = {
    fontSize: '20px',
    color:'black'
  };

  return (
    <Card style={cardStyles}>
      <Card.Body style={cardBodyStyles} className='d-flex align-items-center justify-content-center flex-column'>
        <Card.Title style={titleStyles}>COMPANIES</Card.Title>
        <Card.Text style={textStyles}> { totalCompanies }</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CompanyCard;
