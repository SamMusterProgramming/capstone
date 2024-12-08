

import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import './globals.css'
import { Route,Routes } from 'react-router-dom'
import AuthLayout from './auth/authLayout.jsx'
import { Signin } from './auth/forms/Signin.jsx'
import { Signup } from './auth/forms/Signup.jsx'
import RootLayout from './root/RootLayout.jsx'
import Home from './root/pages/Home.jsx'
import Challenge from './root/pages/Challenge.jsx'
import Talent from './root/pages/Talent.jsx'


export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log(user)

  }, [user])
  
  return (
   <main className='flex h-screen'>
       <Routes>
         <Route element={<AuthLayout user={user} />}>
            <Route path="/sign-in" element={ <Signin setUser={setUser}/>} /> 
            <Route path="/sign-up" element={ <Signup setUser={setUser}/>} /> 
         </Route>
         <Route element={<RootLayout user={user} />}>
            <Route path="/" element={ <Home user = {user}/>} /> 
            <Route path="/challenge" element={ <Challenge user={user}/>} /> 
            <Route path="/Talent" element={ <Talent/>} /> 
         </Route>
        </Routes>   
   </main>
  )  
}   
  

