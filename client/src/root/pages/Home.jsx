import { Link } from "react-router-dom"
import TalentSelector from "../../components/helper/TalentSelector"


const Home = ({user}) => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center">
           <div className="introduction">
           <p style={{fontSize:12}}> Welcome  <span style={{fontSize:16,color:'GrayText',fontWeight:800}}> {user.name} </span>,
            this is your home page, you can access all your contests, challenges and Talent posts,
            and Track progress f  
            are you ready to lunch a new Challenge to the world 
            the Stage is yours, record or upload your challenge content from your comfort zone <br/>
            Let the world be judge, someone will pick up the challenge   </p>
           </div> 
           <br />
           <hr />
           <br /> 
           <div className="row d-flex justify-content-evenly"> 
             <TalentSelector  link="/" type={"Challenge"} color={'teal'} 
             logo={'/asset/material/challenge.jpg'}
             quote="To access all of you Challenges and track progress and see votes " />
             <TalentSelector  link="/" type={"Talent"} color={'tomato'} 
              logo={'/asset/material/show.avif'} 
              quote="To access all of you Talent shows  and track progress and see votes "/>
             <TalentSelector  link="/" type={"Guiness"} color={'blue'}
              logo={'/asset/material/guiness.jpg'}
              quote="To access all of you Guiness Shows and track progress and see votes " />   
          </div>
         <br />
         <hr /> 
    </div>
  )
}

export default Home