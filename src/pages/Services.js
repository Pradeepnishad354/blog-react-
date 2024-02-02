import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import userContext from "../context/userContext";
import { getCurrentUserDetail } from "../auth";
const Services = () => {


  const[user,setUser]=useState()


  useEffect(()=>{

    setUser(getCurrentUserDetail())
  },[])

  console.log(user)
  return (

    <>
    <Base></Base>
      <div style={{backgroundColor:'pink'}} className="mt-2">
      <h1>This is Services Page </h1>
        <h2>Welcome :{user && user.name}</h2>
      </div>
   
    



{/* <userContext.Consumer>
            {
                (object) => (

                    <Base>
                        <h1>
                            This is services page
                        </h1>
                        <h1>Welcome  {object && object.user && object.user.login && (
        <h1>Welcome {object.user.data.name}</h1>
      )}</h1>
                    </Base>
                )
            }
        </userContext.Consumer> */}


    

        </>
  );
};

export default Services;
 