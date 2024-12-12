import { useEffect, useState } from 'react'
import './Helper.css'
import { getUser } from '../../apiCalls'
import Participant from './Participant'




const ParticipantsDisplayer = (props) => {
     
    const [video_url ,setVideo_url] = useState(props.participants[0].video_url)
    
    const selectedVideo =(e) =>{

    }
   
  return (
    <>
    <div  className='col-4'>
        <div className='participantdisplayer'>
            {props.participants.map((participant,index)=>{
            return <Participant participant ={participant} key = {index} setVideo_url={setVideo_url} />
            })}
            
        </div>
    </div>
     <div className="col-8">
        <div className='videodisplayer'>
          <video  className='video'
            // style={{height:'500px'}}
            width='280px'
            height='500'
            src={"http://localhost:8080" + video_url}
            controls
          />  
         </div>
        </div>
    
    </>
  )
}

export default ParticipantsDisplayer