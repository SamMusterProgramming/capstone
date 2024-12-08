import { useRef, useState ,useCallback } from 'react';
import Webcam from 'react-webcam';
import PostHeader from '../../components/helper/PostHeader';
import './Page.css'
import { Player } from "video-react";
import { Upload, Button } from "antd";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user'
};


const Challenge = ({user}) => {
  
  const [swicthUploadLive ,setSwitchUploadLive] = useState(false)

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const video = useRef()
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoSrc , setVideoSrc] = useState("");
 
  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder (webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable   
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );
  
  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      console.log(url)
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);



const handleUpload = ({file}) => {
  let reader = new FileReader();
  console.log(file)
  var url = URL.createObjectURL(file.originFileObj);
  setVideoSrc(url);
};

  return (
    <div className="container-fluid  text-center post-container">
         <div>
           <h3><span>Welcome</span>  {user.name}</h3>
           <p>Show you superpower to the World and let other challenge </p>
         </div>
          
          <hr />
         <PostHeader user={user} talentType ="Add Your Challenge"/>
          <hr />
          <textarea className="description" id="description" placeholder='add description to your challenge'>
          </textarea>
          <div className="postholder">
              { !swicthUploadLive ? (
                <>
                   
                  <video controls
                    className='post-size'
                    src={videoSrc}
                    fluid={false}
                    width= '100%'
                    height='100%'
                 />

                  {/* <video width="400" className='post-size' controls>
                    <source
                      src={videoSrc.Src}
                      type={videoSrc.type}
                    />
                    Your browser does not support HTML5 video.
                  </video> */}
                 {/* <img ref={video} className='post-size' src="/asset/material/black.jpg" alt="video" /> */}
                 <div style={{position:'absolute',marginLeft:350,marginBottom:550}}>
                   <Upload className="mt-3 mb-3"
                      accept=".mp4"
                      maxCount={1}
                      onChange={handleUpload}>
                      
                      <Button>
                        Upload
                      </Button>
                   </Upload>
                 </div>
                </>
                ):(
                
                <img className='post-size' src="/asset/material/bl.jpg" alt="video" />
          
              )

              }
              
              
               {/* <Webcam audio={true} ref={webcamRef} style={{width:"100%" ,height:"100%"}} />
                {capturing ? (
                <button id='stopCapture' onClick={handleStopCaptureClick}><i className="fa fa-share"></i></button>
                ) : (
                <button id='startCapture' onClick={handleStartCaptureClick}><i className="fa fa-camera"></i></button>
                )}
                {recordedChunks.length > 0 && (
                <button onClick={handleDownload}>Download</button>
                )} */}
          </div>
          <div className='container-fluid d-flex gap-5 justify-content-evenly 
           align-items-center footer'>
             <button type='button' style={{backgroundColor:'blue'}} onClick={(e)=>setSwitchUploadLive(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-cloud-upload-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0m-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0"/>
                </svg>
             </button>
             <button type='button' style={{backgroundColor:'red'}} onClick={(e)=>setSwitchUploadLive(true)}>
               <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-cast" viewBox="0 0 16 16">
                 <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0"/>
                 <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086z"/>
               </svg>
             </button>       
          </div>
         

    </div> 
  )
}  

export default Challenge