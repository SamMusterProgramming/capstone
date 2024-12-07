import React, { useRef } from 'react'
import './Sign.css'   
import logo from '/asset/material/guiness.jpeg'
//  import  {Link, useNavigate}  from 'react-router-dom'
 import axios from 'axios'
 import { Link } from 'react-router-dom'
         

export const Signin = ({setUser}) => {
  const email = useRef();
  const password = useRef();
  
 
 // const navigate = useNavigate();  

 const handleSubmit = async (e) => {
   e.preventDefault()
 console.log("m here") 
   const body = {email:email.current.value,password:password.current.value}
    await axios.post('http://localhost:8080/users/login',body)
    .then(res => { 
               console.log(res.data)
               if (res.data.email && res.data.password) {
         setUser({...res.data})
       }     
        })
     }      
 
// useEffect(() => {
//   navigate('/')
// }, [user]);    
 
return (    

 <div className="d-flex justify-content-center h-100 login ">
   <div className="user_card"> 
     <div className="d-flex justify-content-center">
       <div className="brand_logo_container">
            <img className='brand_logo' src={logo} alt="logo" />
       </div>
     </div>
     <div className="d-flex justify-content-center form_container">
       <form> 
         <div className="input-group mb-3">
           <div className="input-group-append">
             <span className="input-group-text"><i className="fas fa-user"></i></span>
           </div>
           <input type="text" name="email" ref={email} className="form-control input_user" 
           defaultValue="samcoeur2020@gmail.com" placeholder="username" 
           />
         </div>
         <div className="input-group mb-2">
           <div className="input-group-append">
             <span className="input-group-text"><i className="fas fa-key"></i></span>
           </div>
           <input type="password" name="password" className="form-control input_pass"
           ref={password} defaultValue="samir" placeholder="password" 
           />
         </div>  
         <div className="form-group">
           <div className="custom-control custom-checkbox">
             <input type="checkbox" className="custom-control-input"
                               id="customControlInline" />
             <label className="custom-control-label" >Remember me</label>
           </div>
         </div>    
           <div className="d-flex justify-content-center mt-3 login_container">
        <button type="button" onClick={handleSubmit} name="button" className="btn login_btn">Login</button>
        </div>
       </form>     
     </div>
 
     <div className="mt-4">
       <div className="d-flex justify-content-center links">
        <p>
              Don't have an account ?  
              <Link to ="/sign-up" className="text-primary-500
              text-small-semibold ml-1">  Sign up</Link>    
          </p>   
       </div>
       <div className="d-flex justify-content-center links">
         <a href="#">Forgot your password?</a>
       </div>   
     </div>
                       
     <div className="d-flex justify-content-center align-item-center ">
       <div className="brand_logo_bottom_container">
           <img className='brand_logo' src="/asset/material/show.avif" alt="logo" />
       </div>
     </div>  
   </div>
 </div>

 
)
}
