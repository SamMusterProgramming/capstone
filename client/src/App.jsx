

import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import './globals.css'
import { Route,Routes } from 'react-router-dom'
import AuthLayout from './_auth/authLayout.jsx'
import { Signin } from './_auth/forms/Signin.jsx'
import { Signup } from './_auth/forms/Signup.jsx'
import RootLayout from './_root/RootLayout.jsx'
import Home from './_root/pages/Home.jsx'
import Challenge from './_root/pages/Challenge.jsx'
import Talent from './_root/pages/Talent.jsx'


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
            <Route path="/challenge" element={ <Challenge/>} /> 
            <Route path="/Talent" element={ <Talent/>} /> 
         </Route>
        </Routes>   
   </main>
  )  
}   
  

