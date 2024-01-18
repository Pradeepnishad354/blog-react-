
import React from "react";
import Base from "../components/Base";
import { Link } from "react-router-dom";
const About=()=>{

    return(
        <>
      <Base/>

      <div>
      <Link to={"/blog"}>CreateBlog</Link>
      </div>
        <div className="mt-1">
        <img className="test" src="https://clickfirstmarketing.com/wp-content/uploads/Purpose-of-Blogging.jpeg"/>
        
        </div>
        </>
       
    )
}

export default About;