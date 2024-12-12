import { useRef, useState ,useCallback } from 'react';
import Webcam from 'react-webcam';
import PostHeader from '../../components/helper/PostHeader';
import './Page.css'
import VideoUploader from '../../components/helper/videoUploader';
import VideoRecorder from '../../components/helper/VideoRecorder';
import LiveWebcam from '../../components/helper/LiveWebcam';
import { useRecordWebcam } from 'react-record-webcam' 
import UploadVideo from '../../components/helper/UploadVideo';
import axios from 'axios'

const NewChallenge = ({user}) => {
  
  const [swicthUploadLive ,setSwitchUploadLive] = useState(false)

  // const webcamRef = useRef(null);
  // const mediaRecorderRef = useRef(null);
  const video = useRef()
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoSrc , setVideoSrc] = useState("");
  const [file,setFile] = useState(null)
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [playReview , setPlayReview] = useState(false)
  const [description , setDescription] = useState("")
  

  const handleUploading = async () => {
    
    const formData = new FormData();
   
    if(file){
      const lastIndex = file.name.lastIndexOf('.')
      const ext = file.name.slice( lastIndex + 1)
      
      let newFilename = new File([file],"samir_haddadi2024."+ ext,{type:file.type,
        lastModified:file.lastModified  
      })
      formData.append('video',newFilename)
      formData.append('origin_id', user.id)
      formData.append('description', description)
    }
   
    await axios.post('http://localhost:8080/posts/upload',formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(
      res => console.log(res)
    )
  }; 

const handleUpload = ({file}) => {
  setFile(file.originFileObj) 
  setSwitchUploadLive(false)
  let url = URL.createObjectURL(file.originFileObj);
  setVideoSrc(url);
};

const addDescrition =(e)=> {
  e.preventDefault(e)
  setDescription(e.target.value)
}

  return (
   <div style={{backgroundColor:'white'}} className='container-fluid'>
    <div className="container-fluid  text-start post-container">
               
         <p style={{fontSize:12,color:'black'}}> Welcome  <span style={{fontSize:16,color:'GrayText'}}>{user.name}</span> ,
          are you ready to lunch a new Challenge to the world <br/>
         the Stage is yours, record or upload your challenge content from your comfort zone <br/>
         Let the world be judge, someone will pick up the challenge   </p>
         <PostHeader user={user} talentType ="Challenge"/>
  
          <textarea style={{backgroundColor:'black',color:'white',fontWeight:500}}
           className="description" onChange={addDescrition}  name='description' placeholder='add description to your challenge'>
          </textarea>



         

              { !swicthUploadLive ? (

                  
                    <UploadVideo videoSrc={videoSrc} handleUpload= {handleUpload} setSwitchUploadLive={setSwitchUploadLive} />
              
                
                ):(
                  
                  <>
                  
                   <LiveWebcam setSwitchUploadLive={setSwitchUploadLive} setVideoSrc={setVideoSrc} />
                  </>
                
                )
          
              }
              
          <button onClick={handleUploading} className='mt-1 mb-3 submit'>Submit</button>

    </div> 
  </div>  
  )
}  

export default NewChallenge