import React from 'react'
import TopBar from '../components/TopBar'
import LeftSideBar from '../components/RightSideBar'
import { Outlet } from 'react-router-dom'


function RootLayout({user}) {
  return (
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
  )
}

export default RootLayout