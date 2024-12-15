import { useEffect, useState } from 'react'
import './Page.css'
import axios from 'axios'
import ParticipantsDisplayer from '../../components/helper/ParticipantsDisplayer'


const TopChallenges = ({user}) => {

const [topChallenges ,setTopChallenges] = useState([])  
const [video_url ,setVideo_url] = useState()
useEffect(() => {
  
const response = async()=>{
  
        try {
            await axios.get(`http://localhost:8080/posts/topchallenges/${user._id}`)
            .then(res => {
                setTopChallenges(res.data) 
            }
             )
        } catch (error) {
            console.log(error)
        }
      }  
     response()
       
 
}, [])

  return (
   
    <div className=' d-flex gap-5 flex-wrap mb-5 mt-5  justify-content-center align-items-center ch-page'>
       
   
    { topChallenges.map((challenge,index)=>{

         return  ( <div className="d-flex flex-column mt-3  justify-content-center align-items-center challenges">
                         <ParticipantsDisplayer user={user}  participants={challenge.participants} key={index}
                         challenge={challenge} setVideo_url={setVideo_url} />
                  </div> ) 
             }
             )} 
    </div>
  )
}

export default TopChallenges