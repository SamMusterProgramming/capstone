import './Helper.css'

const PostHeader = (props) => {
  return (
    <div className=" d-flex justify-content-start align-items-center gap-4 post-header">
    <img src = {"http://localhost:8080"+props.user.profile_img}  alt="User Avatar"/>  
    <div className='d-flex flex-column'>
        <div className="user-name">{props.user.name}</div>
        <div className="post-time">5 mins ago</div>
    </div>
    <div className='d-flex text-light  text-center'>
     <p style={{fontSize:12}}>
       
     </p>    
    </div>
    <div style={{marginLeft:'auto'}} className='d-flex flex-column justify-content-center align-items-center'>
        <span className="talenttype">{props.talentType}</span>
        <div className="post-time">add here </div>
    </div>
    <img style={{backgroundColor:'pink'}} src = "/asset/material/chalenge.png"  alt="User Avatar"/>
</div>
  )
}

export default PostHeader