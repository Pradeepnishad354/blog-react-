import { useEffect, useState } from "react";
import userContext from "./userContext";
import { getCurrentUserDetail,isLoggedIn } from "../auth";
function UserProvider({children}){

const[user,setUser]=useState({

         data:{},
         login:false
    })

    useEffect(()=>{

   const fetchData=()=>{
      setUser({

        
        // data: getCurrentUserDetail(),
         // login: isLoggedIn()
        data:getCurrentUserDetail(),
        login: isLoggedIn()
      })

        //console.log("user ===",user.data,user.login)


}


       fetchData() 
        
    },[])

    console.log("user ===",user.data,user.login)
return (
    <>
        <userContext.Provider value={{user,setUser}}>

         {children}

        </userContext.Provider>
    </>
    
)
}
export default UserProvider;