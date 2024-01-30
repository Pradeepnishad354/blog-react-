import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardText, Container,Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import { getCurrentUserDetail, isLoggedIn } from '../auth'
import userContext from '../context/userContext'
import { useContext } from 'react'

function Post({post={title:'This is default post title',content:'This is default post  content'}},props,deletePost){

    const[user,setUser]=   useState()

    const userContextData= useContext(userContext)
    const [login,setLogin]=useState()
   
 console.log(post.imageName)
  

   useEffect(()=>{

   setUser(getCurrentUserDetail())
   setLogin(isLoggedIn())
   },[])




  return (
    <div className='border-0 shadow-sm mt-3'>
      
      <Card>
      <h1>{post.title}</h1>
        <CardBody>
            <CardText dangerouslySetInnerHTML={{ __html: post.content.substring(0, 100) + "...." }}>
         
            </CardText>

            {/* <div  style={{borderRadius:"8px"}}> 
           <img   src="https://clickfirstmarketing.com/wp-content/uploads/Purpose-of-Blogging.jpeg" width="600" height="300" ></img>
           </div> */}

           {/* {post.imageName} */}

            <Container className='mt-1'>
              <Link className='btn btn-primary' to={'/posts/'+post.postId}>LoadMore</Link>

              {/* {userContextData.user.login && (user && user.id ===post.user.id?<Button onClick={(e)=>deletePost(post)}  >Delete</Button>:"")} */}
            </Container>
        </CardBody>
      </Card>
    </div>
  )
}

export default Post
