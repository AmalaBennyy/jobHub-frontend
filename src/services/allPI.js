import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

//company register
export const companyregisterAPI = async(company)=>{
    return await commonAPI('POST',`${BASE_URL}/companies/register`,company,"")
 }

 //company login
 export const companyloginAPI =async(company)=>{

    return  await commonAPI('POST',`${BASE_URL}/company/login`,company,"")
  
  }

  //user register
  export const userRegisterAPI = async(user)=>{
   return await commonAPI('POST',`${BASE_URL}/candidate/register`,user,"")
}

//user login
export const userLoginAPI = async(user)=>{
   return await commonAPI('POST',`${BASE_URL}/candidate/login`,user,"")
}

//add job
export const addjobAPI =async(jobs,reqHeader)=>{

   return  await commonAPI('POST',`${BASE_URL}/jobs/add`,jobs,reqHeader)
 
 }

 //job list in dashboard
 export const getjobListAPI=async(reqHeader)=>{
   return await commonAPI('GET',`${BASE_URL}/dashboard/joblist`,"",reqHeader)
 
 }
 //alljob list
 export const getAlljobListAPI1=async(searchkey,reqHeader)=>{
   return await commonAPI('GET',`${BASE_URL}/jobs/alljobs?search=${searchkey}`,"",reqHeader)
 
 }

 //joblist
 export const getAlljobListAPI=async(reqHeader)=>{
   return await commonAPI('GET',`${BASE_URL}/jobs/alljobs`,"",reqHeader)
 
 }

 //delete job
export const deletejobAPI=async(jobId,reqHeader)=>{
  return await commonAPI('DELETE',`${BASE_URL}/job/remove/${jobId}`,{},reqHeader)

}

 //apply job

export const applyJobAPI =async(reqBody,reqHeader)=>{

  return  await commonAPI('POST',`${BASE_URL}/jobs/apply`,reqBody,reqHeader)

}


//get all application list

export const getApplicationsApi=async(reqHeader)=>{
  return await commonAPI('GET',`${BASE_URL}/jobs/application`,"",reqHeader)

}

 //delete jobapplication
 export const deletejobApplicationApi=async(applicationId,reqHeader)=>{
  return await commonAPI('DELETE',`${BASE_URL}/application/remove/${applicationId}`,{},reqHeader)

}

//editjob

export const editjobApi=async(jobId,reqBody,reqHeader)=>{
  return await commonAPI('PUT',`${BASE_URL}/job/edit/${jobId}`,reqBody,reqHeader)

}


export const postShortlistedCandidatesApi = async (id, headers) => {
  
    const response = await commonAPI('POST', `${BASE_URL}/jobs/shortlist/${id}`, {}, headers);
    return response;  // Returns the entire response object, including status, data, etc.
 
 
};

// Function to get shortlisted candidates
export const getShortlistedCandidatesApi = async (headers) => {
 
    const response = await commonAPI('GET', `${BASE_URL}/jobs/shortlisted-candidates`, "", headers);
    return response;  // Returns the entire response object, including status, data, etc.
 
};

//admin login
export const adminLoginAPI = async(user)=>{
  return await commonAPI('POST',`${BASE_URL}/admin/login`,user,"")
}

//get all companies
export const getAllCompanyApi=async(reqHeader)=>{
  return await commonAPI('GET',`${BASE_URL}/allcompanies`,"",reqHeader)

}

//delete company
export const deletecompanyApi=async(cId,reqHeader)=>{
  return await commonAPI('DELETE',`${BASE_URL}/company/remove/${cId}`,{},reqHeader)

}

//get all candidates
export const getAllCandidateApi=async(reqHeader)=>{
  return await commonAPI('GET',`${BASE_URL}/allCandidates`,"",reqHeader)

}

//delete candidate
export const deletcandidateApi=async(cId,reqHeader)=>{
  return await commonAPI('DELETE',`${BASE_URL}/candidate/remove/${cId}`,{},reqHeader)
}

//get all job for admin
export const getAlljobAdminApi=async(reqHeader)=>{
  return await commonAPI('GET',`${BASE_URL}/alljobs`,"",reqHeader)

}

//delete job by admin
export const deletejobAdminApi=async(cId,reqHeader)=>{
  return await commonAPI('DELETE',`${BASE_URL}/admin/job/remove/${cId}`,{},reqHeader)
}