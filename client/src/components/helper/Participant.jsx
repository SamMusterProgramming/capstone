import { useEffect, useState } from 'react'
import { getUser } from '../../apiCalls'
import './Helper.css'
import axios from 'axios'





const Participant = (props) => {

const [participant ,setParticipantt] = useState({})   
const baseURL = "http://localhost:8080"

useEffect( () => {
// getUser(props.participant.user_id)
// .then(data => setParticipantt(data))
const getUser = async()=>
    {
        try {
            await axios.get(baseURL+`/users/users/${props.participant.user_id}`)
            .then(res => setParticipantt(res.data))
        } catch (error) {
            console.log(error)
        }
    }

getUser()
  
}, [])
 
  return (
    <div   style={{height:'100%',width:'100%',backgroundColor:'gray',padding:'15px'
        }}
     className=' d-flex align-items-center  flex-row gap-1 '>

          <div className='d-flex justify-content-start align-items-center  flex-column'>
            <img  style={{height:'48px',width:'48px',backgroundColor:'gray',borderRadius:'50%'}}
             src={"http://localhost:8080"+participant.profile_img} alt={participant.name} />
            <button style={{widh:'30%',height:"100%",fontSize:11,
                    fontFamily:"initial" ,marginTop:'0px',color:'black'
                }} onClick={(e)=> { props.setVideo_url( props.participant.video_url),
                    props.setSelectedParticipant(props.participant),
                    props.setSelectedUser(participant)
                }}>{participant.name} 
           </button>
          </div>
       
       
    </div>
   
  )
}

export default Participant  