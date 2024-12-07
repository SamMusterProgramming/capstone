import { Link } from "react-router-dom"
import './Components.css'


const topBar = ({user}) => {


  console.log(user)

  return (  
   
         <div className="d-flex justify-content-between  topbar">    
            <div className="menu d-flex gap-4 justify-content-start">
               <Link to='/sign-in'>
                 <img className="talent-logo" src="/asset/material/show.avif" alt="nature" />
               </Link> 

                <div style={{marginLeft:50}} className="d-flex menu-item ">
                  <Link to='/'>
                    <img className="menu-logo" src="/asset/material/home.png" alt="" />
                  </Link>
                </div>   
                <div style={{marginLeft:20}} className="d-flex menu-item ">
                  <Link to='/'>
                    <img style={{backgroundColor:'tomato'}} className="menu-logo" src="/asset/material/badge.svg" alt="" />
                  </Link>
                </div>   
               <p> <Link to='/'>Started</Link>  </p>
            </div>
            
            <div className="" style={{width:'30%'}}>
              <input className="search" type="text" placeholder="search" />
            </div>
            <div className="d-flex gap-3 justify-content-start leftmenu">
              <div className="d-flex gap-3 ">
                <div style={{marginLeft:20}} className="d-flex menu-item ">
                  <Link to='/'>
                    <img style={{backgroundColor:'red'}} className="menu-logo" src="/asset/material/bell.png" alt="" />
                  </Link>
                </div>   
                <div style={{marginLeft:20}} className="d-flex menu-item ">
                  <Link to='/'>
                    <img style={{backgroundColor:'lightgreen'}} className="menu-logo" src="/asset/material/chat.png" alt="" />
                  </Link>
                </div>   
      
              </div>
             
               <div className="d-flex align-item-center justify-content-center profile">
                 <Link to='/'>
                   <img className="profile-img" src={user.profile_img} alt="profile" />
                 </Link> 
               </div>
             
            </div>
       </div>
  
  )
}

export default topBar