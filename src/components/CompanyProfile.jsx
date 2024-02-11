import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

function CompanyProfile() {
    const [open, setOpen] = useState(false);
  return (
    <div className='card shadow p-5'>
        <div className="d-flex justify-content-between">
            <h3 className='me-5' >Candidate Lists
            </h3>
            <button className='btn btn-outline-info '  onClick={() => setOpen(!open)} >
                <i class="fa-solid fa-arrow-up-from-bracket fa-rotate-180"></i>
                </button>
        
      

        </div>

          <Collapse in={open}>

          <div className="row justify-content-center mt-4">
        {/* <label htmlFor='profile' className='text-center'>
            <input id='profile' type="file" style={{display:'none'}} />
            <img width={'200px'} height={'200px'} src="https://tse4.mm.bing.net/th?id=OIP.X-YMD17NQrGp3m2VP1kpzQHaJT&pid=Api&P=0&h=180" 
            alt="no image" className='rounded-circle' />
        </label> */}

       <div className="mb-3 ">
        <input type="text" placeholder='LinkedIn' className='form-control' />

       </div>

       <div className="mb-3 mt-3">
        <button className='btn btn-success rounded w-100'>Update</button>
       </div>
       </div>          
          </Collapse>

        
    </div>
  )
}

export default CompanyProfile