import { Container } from "reactstrap"
import Base from "../../components/Base"
import AddPost from "../../components/AddPost"

import { useEffect, useState } from "react"
import { getCurrentUserDetail } from "../../auth"
import { deletePostService, loadPostUserWise } from "../../services/post-service"
import { toast } from "react-toastify"
import Post from "../../components/Post"

const UserDashboard =()=>{

const[posts,setPosts]=useState([]);

    useEffect(()=>{

         console.log(getCurrentUserDetail())
        
       
        loadPostData()
       
    },[])


const loadPostData=()=>{

     loadPostUserWise(getCurrentUserDetail().id).then((data)=>{

         console.log(data)

         setPosts([...data]) 

       
    }).catch((error)=>{

        console.log(error)
        toast.error("error in loading post..")
    })
}




// delete post 
function deletePost(post){

deletePostService(post.postId).then((data)=>{

    console.log(data)
    toast.success("post is deleted....")
    let newPosts = posts.filter(p => p.postId != post.postId)
      setPosts([...newPosts])
     //loadPostData()
}).catch((error)=>{

    console.log(error);
    toast.error("error in deleting user post..")
})
    
}

    return(
        <>
        <Base></Base>
   
       
<div className="mt-2">
<Container>
<AddPost/>


<h1>Post Count: ({posts.length})</h1>

{

    posts.map((post,index)=>{
return(
    <Post    post={post}   deletePost={deletePost}       key={index}  />
    
)

    })
}





</Container>

</div>        
</>
        
    )
}

export default UserDashboard