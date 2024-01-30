import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deletePostService, loadPostByCategoryWise } from '../services/post-service'
import Base from '../components/Base'
import { toast } from 'react-toastify';
import CategorySideMenu from '../components/CategorySideMenu';
import { Row,Col,Container } from 'reactstrap';
import Post from '../components/Post';
const Categories = () => {

    const{categoryId}=useParams()
    const[post,setPost]=useState()



useEffect(()=>{
console.log(categoryId)

loadPostByCategoryWise(categoryId).then(data=>{
 setPost([...data])
}).catch((error)=>{
    console.log(error)
    toast.error("error in loading posts")
})

},[categoryId])




function deletePost(post){

deletePostService(post.postId).then(response=>{

    console.log(response)
    toast.success("post is deleted ...")

  let newPosts=post.filter(p=>p.postId !=post.postId)
    setPost([...newPosts])
}).catch(error=>{
    console.log(error)
    toast.error("error in deleting post !!!")
})


}
  return (
    <div>
      <Base>
      <Container className="mt-3">
                <Row>
                    <Col md={2} className="pt-5">
                        <CategorySideMenu />
                    </Col>
                    <Col md={10}>

                        <h1>Blogs Count ({post?.length} )</h1>

                        {
                            post && post.map((post, index) => {
                                return (
                                    <Post deletePost={deletePost} key={index} post={post} />
                                )
                            })
                        }

                        {post?.length <= 0 ? <h1>No post in this category</h1> : ''}
                    </Col>
                </Row>
            </Container>
      </Base>
    </div>
  )
}

export default Categories
