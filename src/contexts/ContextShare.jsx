import React, {  createContext, useState } from 'react'

export const addJobResponseContext=createContext()
export const isAuthtokencontext=createContext()

// export const addJobApplicationResponseContext=createContext()


function ContextShare({children}) {
    const[addJobResponse,setaddJobReaponse]=useState({})
    const[addApplicationResponse,setApplicationResponse]=useState({})
    const[isAuthToken,setIsAuthToken]=useState(false)
  return (
    <>
    <addJobResponseContext.Provider value={{addJobResponse,setaddJobReaponse}}>
      {/* <addApplicationResponse.Provider value={{addApplicationResponse,setApplicationResponse}}> */}
    
<isAuthtokencontext.Provider value={{isAuthToken,setIsAuthToken}}>


     
        {children}
        {/* </addApplicationResponse.Provider> */}
        </isAuthtokencontext.Provider>
    </addJobResponseContext.Provider>
    </>
  )
}

export default ContextShare