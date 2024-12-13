import { useEffect, useRef, useState } from 'react'
import './Helper.css'
import { getUser } from '../../apiCalls'
import Participant from './Participant'
import ReactPlayer from "react-player";
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';


const ParticipantsDisplayer = (props) => {


     
    const [video_url ,setVideo_url] = useState(props.participants[0].video_url)
    const [selectedUser ,setSelectedUser] = useState (props.participants[0])
    const [selectedParticipant ,setSelectedParticipant] = useState (props.participants[0])
    const [ownChallenge , setOwnChallenge ] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => { //logic here is to disable the add challenge button is the user has already participated 
      props.participants.map(participant =>{
        if(participant.user_id === props.user._id) {
            setOwnChallenge(prev => !prev)
         }
      })
     
    }, [])
    
    
   
  return (
    <>
    <div  className='col-md-4'>
        <div className='mt-3 participantdisplayer'>
            {props.participants.map((participant,index)=>{
            return < Participant participant={participant} key = {index} setVideo_url={setVideo_url} user={props.user}
            setSelectedUser={setSelectedUser} setSelectedParticipant={setSelectedParticipant}
            />
            })}
         {!ownChallenge? (
          
                <button style={{marginLeft:'auto',width:'90px',color:"lightblue",textAlign:'center'}}
                onClick={(e) => navigate(`/matchchallenge/${props.challenge._id}`)} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-patch-plus-fill" viewBox="0 0 10 16">
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0"/>
                 </svg>
               </button>
         
        
         ):(
          <button disabled style={{marginLeft:'auto',width:'90px',fontSize:"11px",color:"lightgray",opacity:'20%'}} >
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-patch-plus-fill" viewBox="0 0 16 16">
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0"/>
            </svg>
          </button>
         )}
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
            src={ "http://localhost:8080" + video_url}
            controls />
            
         </div>
         <PostFooter challenge={props.challenge} participant={selectedParticipant} />
       </div> 
     </div>
    
    </>
  )
}

export default ParticipantsDisplayer