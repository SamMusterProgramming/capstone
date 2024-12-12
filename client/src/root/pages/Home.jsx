import { Link } from "react-router-dom"
import TalentSelector from "../../components/helper/TalentSelector"


const Home = ({user}) => {
  return (
     <>   
           <div className="introduction mt-3">   
              <p style={{fontSize:12}}> Welcome  <span style={{fontSize:16,color:'#14257a',fontWeight:800}}> {user.name} </span>,
                this is your home page, you can access all your contests, challenges and Talent posts,
                and Track progress f  
                are you ready to lunch a new Challenge to the world 
                the Stage is yours, record or upload your challenge content from your comfort zone 
                Let the world be judge, someone will pick up the challenge  
              </p>
           </div> 
           <br />
           <hr />
          
           <div className="row d-flex justify-content-evenly"> 
             <TalentSelector  link="/challenges" type={"Challenge"} color={'teal'} 
                logo={'/asset/material/challenge.jpg'}
                quote="To access all of you Challenges and track progress and see votes " />
             <TalentSelector  link="/" type={"Talent"} color={'tomato'} 
                logo={'/asset/material/show.avif'} 
                quote="To access all of you Talent shows  and track progress and see votes "/>
             <TalentSelector  link="/" type={"Guiness"} color={'#1f2a5e'} 
                logo={'/asset/material/guiness.jpg'}
                quote="To access all of you Guiness Shows and track progress and see votes " />   
           </div>
           
           <div className ="container-fluid border d-flex flex-wrap ">
               
           </div>
    </>
  )
}

export default Home