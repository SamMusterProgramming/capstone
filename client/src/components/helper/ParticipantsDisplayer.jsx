import { useEffect, useRef, useState } from 'react'
import './Helper.css'
import { getUser } from '../../apiCalls'
import Participant from './Participant'
import ReactPlayer from "react-player";
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Select } from 'antd';
import axios from 'axios'





const ParticipantsDisplayer = (props) => {


    const [selectedOption, setSelectedOption] = useState(null);
    const [options,setOption] = useState ()
    const [video_url ,setVideo_url] = useState(props.participants[0].video_url)
    const [selectedUser ,setSelectedUser] = useState (props.participants[0])
    const [selectedParticipant ,setSelectedParticipant] = useState (props.participants[0])
    const [ownChallenge , setOwnChallenge ] = useState(false)
    const [userProfile , setUserProfile] = useState (props.participants[0])
   
    const navigate = useNavigate()
    

    
   


    useEffect(() => { //logic here is to disable the add challenge button if the user has already participated  
      props.participants.map(participant =>{
        if(participant.user_id === props.user._id) {
            setOwnChallenge(prev => !prev)
         } 
      })
      }, [])
    
    useEffect(() => {
      setVideo_url (selectedParticipant.video_url)
    }, [selectedParticipant])
    
   const baseURL = "http://localhost:8080"
    
   const handleChange = async (value) =>{
        try {
          await axios.get(baseURL+`/users/users/${value}`)
          .then(res => setUserProfile({...res.data}))
      } catch (error) {
          console.log(error)
      }
      setSelectedParticipant(props.participants.find(participant => participant.user_id === value))
      
      } 
   
  return (
    <>
        <div >
        {!ownChallenge? ( 
             <button style={{width:'90px',color:"lightblue",textAlign:'center'}}
              onClick={(e) => navigate(`/matchchallenge/${props.challenge._id}`)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-patch-plus-fill" viewBox="0 0 16 16">
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0"/>
              </svg>
             </button>
        ):(
            <button disabled style={{width:'90px',color:"lightgray",opacity:'20%'}} >
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-patch-plus-fill" viewBox="0 0 16 16">
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0"/>
                </svg>
            </button>
            )}
        </div>

        <div key={props.key} className='d-flex mt-0 justify-content-center participantdisplayer'> 
          <Select
            style={{width:"100%",height:"60px",border:"none",fontWeight:"600", backgroundColor:"transparent",textAlign:"center"}}
            defaultValue = "Choose a participant"
            onChange={handleChange}
                >
                {props.participants.map((participant,index)=>{
                  return  (<Select.Option style={{ color:'black',fontWeight:"500",
                    backgroundColor:"lightgray",width:"100%",height:"60px"
                  }} key={index} value = {participant.user_id} 
                   className="d-flex flex-row align-items-center gap-3"
                  >
                    <div  className="d-flex flex-row align-items-center gap-4">
                       <img style={{width:'40px', height:'40px'}} src={"http://localhost:8080"+userProfile.profile_img} alt="" />
                       <p>{ (props.user._id===participant.user_id)? participant.name + " ----> you": participant.name}</p> 
                       <Link to="/profile" style={{marginLeft:'auto'}}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                        </svg>
                       </Link>
                    </div>
                    
                  </Select.Option>)
                }
              )}         
          </Select>
        </div>
        <div className=" d-flex flex-column mb-0 videopost">
            <PostHeader user={userProfile} talentType ="Challenge" />
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
            <PostFooter participants={props.Participants}  user={props.user}
              challenge={props.challenge} participant={selectedParticipant} />
        </div> 
     
    
    </>
  )
}

export default ParticipantsDisplayer