import { Outlet,Navigate } from "react-router-dom"


const AuthLayout = ({user}) => {

  const isAuthenticated = user? true : false ; 
  // user ? isAuthenticated = true : isAuthenticated =false;
  return (
   <>
     { isAuthenticated ? ( <Navigate to ="/" /> ):
     (<>
      <section className="flex flex-1 justify-center items-center flex-col py-10" >
        <Outlet />
      </section>   
      <section className="container-fluid"  >
        <img src ="/asset/material/gotTalent.jpg" alt="logo" 
         style={{width:'100%' , height:'100%',objectFit:'fill'}}/>
        </section>
     </>)
     }
   </>
  )
}

export default AuthLayout