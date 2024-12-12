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
    <div style={{height:'20%',width:'100%',backgroundColor:'gray',padding:'15px',borderRadius:'10px'
        }}
     className=' d-flex align-items-center flex-row gap-1 border'>
        <button style={{widh:'100%',height:"100%",backgroundColor:'blueviolet',fontSize:11,
            fontFamily:'monospace'
        }} onClick={(e)=>props.setVideo_url(props.participant.video_url)}>{participant.name} 
        </button>
    </div>
   
  )
}

export default Participant  