import React, { useState } from 'react'
import './Sign.css'
import logo from '/asset/material/guiness.jpeg'
import { useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Signup = ({setUser}) => {
   
  const email = useRef("")
  const name =useRef("")
  const password =useRef("")
  const profession  = useRef("")
  const confirmpassword = useRef("")
  const username = useRef("")

  const[errorMessage,setErrorMessage] =useState("")

  const handleSubmit = async(e)=> {
    e.preventDefault()
	if(password.current.value !== confirmpassword.current.value)  {
	  return	setErrorMessage(`passwords don't match`)
	}
	const body ={
		email:email.current.value,
		name:name.current.value ,
		profession : profession.current.value ,
		password : password.current.value,
		confirmpassword: confirmpassword.current.value,
		username:username.current.value
	}
	await axios.post('http://localhost:8080/users/',body)
	.then(res => {
		if(res.status == 200 ) setUser({...res.data}) 
		})
  }
     
  return (
    <div className="container h-100  ">
		<div className="d-flex justify-content-center h-100 login ">
			<div className="user_card"> 
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container">
						   <img className='brand_logo' src={logo} alt="logo" />
					</div>
				</div>
				<div className="d-flex justify-content-center form_container">
					<form> 
                        <div className="input-group mb-3 gap-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" name="fullname" ref={name} className="form-control  input_user" 
                                defaultValue="" placeholder="Fullname" 
                                />
						</div>
                        <div className="input-group mb-3 gap-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" name="Profession" ref={profession} className="form-control input_user" 
                                defaultValue="" placeholder="profession" 
                                />
						</div>    
						<div className="input-group mb-3 gap-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="email" name="email" ref={email} className="form-control input_user" 
                                defaultValue="samdouglas2020@gmail.com" placeholder="email"  required
                                />
						</div>
						<div className="input-group mb-3 gap-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" name="email" ref={username} className="form-control input_user" 
                                defaultValue="samdouglas2024" placeholder="username"  required
                                />
						</div>
						<div className="input-group mb-2 gap-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" name="password" className="form-control input_pass"
                                ref={password} defaultValue="samir" placeholder="password" 
                                />
						</div>  
                        <div className="input-group mb-2 gap-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" name="confirmpassword" className="form-control input_pass"
                                ref={confirmpassword} defaultValue="samir" placeholder="confirm" 
                                />
						</div>  
							<div className="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" onClick={handleSubmit} name="button" className="btn login_btn"> Register</button>
				   </div>  
					</form>    
				</div>
		
				<div className="mt-4"> 
					<div className="d-flex gap-2 justify-content-center links">
						<p>Already have an account ?
              <Link to ="/sign-in" className="text-primary-500
              text-small-semibold ml-7"> Log in</Link>       
             </p> 
					</div>
				</div>

				<p style={{color:'red',fontSize:12}} >{errorMessage}</p>
			</div>
		</div>
	</div>
  )
}
