import './Helper.css'

const PostHeader = (props) => {
  return (
    <div className="container-fluid d-flex mt-5 justify-content-start align-items-center gap-4 post-header">
    <img id='imgProfile' src = {props.user.profile_img}  alt="User Avatar"/>  
    <div >
        <div className="user-name">{props.user.name}</div>
        <div className="post-time">5 mins ago</div>
    </div>
    <div className='d-flex text-light  text-center'>
     <p style={{fontSize:12}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia earum fuga, 
        vel 
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