import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardText, Container,Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import { getCurrentUserDetail, isLoggedIn } from '../auth'
import userContext from '../context/userContext'
import { useContext } from 'react'

function Post({post={title:'This is default post title',content:'This is default post  content'},deletePost}){

  //const userContextData= useContext(userContext)
    const[user,setUser]=   useState(null)
    const [login,setLogin]=useState(null)
    
   
 ///console.log(post.imageName)
  

   useEffect(()=>{

    setUser(getCurrentUserDetail())
    setLogin(isLoggedIn())

     //console.log("user Context",userContextData)
   },[])

   //console.log(userContextData)
  return (
    <div className='border-0 shadow-sm mt-3'>
      
      <Card>
      <h2>{post.title}</h2>
        <CardBody>
            <CardText dangerouslySetInnerHTML={{ __html: post.content.substring(0, 800) + "...." }}>
         
            </CardText>

            

            <Container className='mt-1'>
              <Link className='btn btn-primary' to={'/posts/'+post.postId}>LoadMore</Link>

              {user &&login &&(user &&user.id===post.user.id?<Button color='danger' onClick={(e)=>deletePost(post)} className='ms-2'>Delete</Button>:'')}
              {user &&login &&(user &&user.id===post.user.id?<Button color='primary' tag={Link}  to={`/user/update-blog/${post.postId}`}   className='ms-2'>Update</Button>:'')}


              {/* {userContextData.user && userContextData.user.login && (user &&user.id===post.user.id?<Button color='danger' onClick={(e)=>deletePost(post)} className='ms-2'>Delete</Button>:'')} */}
              {/* { login && <Button color='danger' onClick={(e)=>deletePost(post)} className='ms-2'>Delete</Button>}
              { login && <Button tag={Link} to={`/user/update-blog/${post.postId}`} color='warning' className="ms-2">Update</Button>} */}
             
             
            </Container>
        </CardBody>
      </Card>
    </div>
  )
}

export default Post
