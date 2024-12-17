import { useEffect } from 'react';
import './Page.css'
import { useState } from 'react';
import { getUserById } from '../../apiCalls';
import { useParams } from 'react-router-dom';





const Profile = (props) => {

    const _id  =  useParams().id;
    const [user, setUser] = useState({})
    

    useEffect ( () => {

      console.log(_id)
      getUserById(_id,setUser)
      console.log(user)

     } ,  [] )
        
     
     
    
   return(
    <>


      <div className=' d-flex flex-column justify-content-start align-items-center profilecontainer'>
              <div className='cover'>
                  <img src={"http://localhost:8080" +  user.profile_img} alt="samir" />
              </div>
              <div className='d-flex justify-content-center align-items-center profileimg'>
                  <img src={"http://localhost:8080" + user.profile_img } alt="" />
              </div>
      </div>   
      <div className='midk-container'>
             <div className="row">
                <div className="col-md-6">
                 <div className='container-fluid d-flex flex-column justify-content-start align-items-center'>
                   <div className="container-fluid text-dark-3 p-1  mt-3">
                      <div className="d-flex text-dark flex-column gap-2 p-md-4 justify-content-center align-items-center"> 
                          <span className="lead name mt-3">{user.name}</span> 
                          <span className="idd2">{user.email}</span> 
                          <div className="d-flex flex-row justify-content-center align-items-center gap-2"> 
                            <span className="idd5">{user.username}</span>
                          </div>
                         <div className="d-flex flex-row justify-content-center align-items-center mt-2">
                           <span className="number">{user.followers} <span className="follow">Followers</span></span> 
                         </div>  
                    </div>
                  </div>
                </div>
              </div>
                  
               <div className="col-md-6">
                  <div className='container-fluid d-flex flex-column justify-content-start align-items-center'>
                    <div className="container-fluid  text-dark-3 p-1  mt-md-5">
                    <div className="d-flex text-dark flex-column gap-md-1 p-md-4 justify-content-center align-items-center"> 
                      <span className="label  text mt-md-3">City :    <span className="follow">{user.city} </span></span> 
                      <span className="label  text mt-3">State :    <span className="follow">{user.state} </span></span> 
                      <span className="label  text mt-3">Country:    <span className="follow">United States </span></span> 

                    </div>
                   </div>
                  </div>
               </div>
             </div>
        
      </div>

      <video  className='post-size' style={{marginTop:'auto'}}
       src="/asset/postVideos/dummy.mp4" controls width='100%' />

  

   </>
  )
}

export default Profile