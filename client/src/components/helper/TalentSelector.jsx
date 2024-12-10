
import { Link } from 'react-router-dom'

const TalentSelector = (props) => {
  return (
           <div className="col-md-4 gap-sm-4 challenge-card">  
                <div className="card">
                    <div className='d-flex justify-content-between align-items-center top '>
                      <img className='logo-select' src={props.logo} alt="logo" />
                      <h5 className="card-header text-center">{props.type}</h5>
                    </div>
                  <div className="card-body d-flex flex-column text-center">
                   <p className="card-text">
                    {props.quote}
                    </p>
                  <Link to ={props.link}>
                    <button 
                    style={{color:'White',backgroundColor:props.color}}
                   type="button" >Access {props.type}
                    </button>
                  </Link>
               </div>
              </div>
            </div>  
          
  )
}

export default TalentSelector