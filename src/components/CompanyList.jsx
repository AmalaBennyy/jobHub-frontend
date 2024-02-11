import React, { useEffect, useState } from 'react';
import { deletecompanyApi, getAllCompanyApi } from '../services/allPI';
import Header from './Header';
import { Link } from 'react-router-dom';


function CompanyList() {
  const [allapplication, setAlApplications] = useState([]);
 

  const getAllApplications = async () => {
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const result = await getAllCompanyApi(reqHeader);
      if (result.status === 200) {
        setAlApplications(result.data);
      }
    }
  };

  useEffect(() => {
    getAllApplications();
  }, []);



  
  const handleDelete=async(id)=>{
    const token=sessionStorage.getItem("token")
    console.log(token);
    const reqHeader = {
      "Content-Type" : "application/json",
      "Authorization" :`Bearer ${token}`
    }
    const result=await deletecompanyApi(id,reqHeader)
    console.log(result);
    if(result.status===200){
      getAllApplications()
    }else{
      console.log(result.response.data);
    }
  
  }
   


  return (
    <>
    <Header/>
        <div className='ms-4 me-4'>
      <h4 className='mt-4 mb-3'>Company List</h4>
      <table className='table table-bordered'>
        <thead className='table-dark'>
          <tr>
            <th>No</th>
            <th>Company Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allapplication.length > 0 &&
            allapplication.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>
                  <button className='btn outline-light' onClick={()=>handleDelete(item._id)}>
                    <i className='fa-solid fa-trash text-danger'></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className='d-felx align-items-center justify-content-center'>
      <button className='btn btn-info ' ><Link to='/admindahboard' style={{textDecoration:'none'}} className='text-light '>Go back</Link></button>
      </div>
    
     
    </div>
    </>

  );
}

export default CompanyList;
