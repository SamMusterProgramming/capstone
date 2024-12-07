import { Link } from "react-router-dom"


const RightSideBar = ({user}) => {


  return (

   

        <div className="col-sm-auto bg-dark sticky-top">

            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-dark align-items-center sticky-top">
                <div style={{marginTop:55}} className="d-flex gap-2 text-center flex-column menu-item ">
                  <Link to='/challenge'>
                    <img className="challenge-logo" src="/asset/material/chalenge.png" alt="" />
                  </Link>
                  <p>Challenge</p>
                </div>
                <div className="d-flex flex-column gap-2 text-center menu-item mt-5">
                  <Link to='/Talent'>
                    <img className="challenge-logo" src="/asset/material/talent.png" alt="" />
                  </Link>   
                  <p>Talent</p> 
                </div>
                <div className="d-flex flex-column text-center gap-2 menu-item mt-5 ">
                  <Link to='/'>
                    <img style={{backgroundColor:'red'}} className="challenge-logo" src="/asset/material/guiness-logo.png" alt="" />
                  </Link>
                  <p>Guiness</p> 
                </div>
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi-person-circle h2"></i>
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    


  )
}

export default RightSideBar