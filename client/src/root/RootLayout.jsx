import React from 'react'
import TopBar from '../components/TopBar'
import LeftSideBar from '../components/RightSideBar'
import { Navigate, Outlet } from 'react-router-dom'


function RootLayout({user}) {

  const isAuthenticated = user? true : false ; 

  return (
    <>
   
    { isAuthenticated ? (
      
    <div className='w-full'>
       <TopBar user={user} /> 
       
       <div className="container-fluid">
         <div className="row">
               <LeftSideBar user={user}/> 

             <div className="col-sm p-3 min-vh-100">
                <Outlet />
             </div> 
        </div>   
    </div>
   </div>
    ) : (<Navigate to='/sign-in' />)
    }
     </>
  )
}

export default RootLayout