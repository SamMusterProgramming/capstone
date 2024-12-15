import { useEffect, useState } from 'react'
import { getUser } from '../../apiCalls'
import './Helper.css'
import axios from 'axios'





const Participant = (props) => {

const [participantProfile ,setParticipant] = useState({})   


useEffect( () => {

const getUser = async()=>
    {
        try {
            await axios.get(baseURL+`/users/users/${props.participant.user_id}`)
            .then(res => setParticipant({...res.data}))
        } catch (error) {
            console.log(error)
        }
    }

getUser()
  

}, [])
 


  return (
   
     
         <>  
    
            <img   style={{width:'50px',width:'50px',borderRadius:'50px'}}
                  
                  src={"http://localhost:8080" +participantProfile.profile_img} alt={participantProfile.name} />
            {/* <button style={{widh:'30%',height:"100%",fontSize:11, 
                    fontFamily:"initial" ,marginTop:'0px',color:'white',fontWeight:'800'
                }} onClick={(e)=> { 
                    props.setSelectedUser(participantProfile),
                    props.setVideo_url( props.participant.video_url),
                    props.setSelectedParticipant(props.participant)
                }}> {participantProfile.name} 
           </button> */}
          
          </>  
   
  )
}

export default Participant  