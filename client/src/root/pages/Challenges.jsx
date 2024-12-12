import { useEffect, useState } from 'react'
import './Page.css'
import axios from 'axios'
import ParticipantsDisplayer from '../../components/helper/ParticipantsDisplayer'




const Challenges = ({user}) => {
 
 const [challengers ,setChallengers] = useState([])   

const [video_url ,setVideo_url] = useState()


 useEffect(() => {
 
 
  const response = async()=>{
  
    try {
        await axios.get(`http://localhost:8080/posts/challenges/${user.id}`)
        .then(res => {
            setChallengers(res.data) 
            // setVideo_url( "http://localhost:8080" + challenger.participants[0].video_url) 
        }
         )
    } catch (error) {
        console.log(error)
    }
  }  
  response()
  

 },[])
 
       

  return (
  
     <div className='container-fluid d-flex gap-4 flex-column justify-content-start align-items-center border '>
       
   
       { challengers.map((challenger,index)=>{

            return  ( <div className="row challenges">
                            <ParticipantsDisplayer  participants={challenger.participants} key={index} setVideo_url={setVideo_url} />

               </div> )
               
               //    return ( 
               //       <div key={index}  className="row mt-3 challenges">
               //          <div  className='col-3'>
               //           <ParticipantsDisplayer  participants={challenger.participants} key={index} setVideo_url={setVideo_url} />
               //         </div>
               //         <div className="col-8">
               //         <video 
               //             style={{height:'500px'}}
               //             width={800}
               //             src={"http://localhost:8080" + challenger.participants[0].video_url}
               //             controls
               //          />  
               //        </div>
               //    </div>    
               //  )
                }
                )} 

        
          </div>

  )
}

export default Challenges