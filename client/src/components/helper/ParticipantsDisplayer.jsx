import { useEffect, useRef, useState } from 'react'
import './Helper.css'
import { getUser } from '../../apiCalls'
import Participant from './Participant'
import ReactPlayer from "react-player";
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';



const ParticipantsDisplayer = (props) => {


     
    const [video_url ,setVideo_url] = useState(props.participants[0].video_url)
    const [selectedUser ,setSelectedUser] = useState (props.user)
    const [selectedParticipant ,setSelectedParticipant] = useState (props.participants[0])

    
    
    
   
  return (
    <>
    <div  className='col-md-4'>
        <div className='mt-3 participantdisplayer'>
            {props.participants.map((participant,index)=>{
            return < Participant participant={participant} key = {index} setVideo_url={setVideo_url} 
            setSelectedUser={setSelectedUser} setSelectedParticipant={setSelectedParticipant}/>
            })}
            
        </div>
    </div>
     <div className="col-md-8">
        <div className=" d-flex flex-column videopost">
         <PostHeader user={selectedUser} talentType ="Challenge" />
         <div className='videodisplayer'>
            <video
            className='video'
            style={{width:'100%',backgroundColor:'black'}}
            width="100%"
            height="100%"
            pip
            src={"http://localhost:8080" + video_url}
            controls />
            
         </div>
         <PostFooter challenge={props.challenge} participant={selectedParticipant} />
       </div> 
     </div>
    
    </>
  )
}

export default ParticipantsDisplayer