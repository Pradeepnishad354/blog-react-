import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Card,CardBody,Form,FormGroup,Input,Label,Button, Container } from 'reactstrap';

import JoditEditor from 'jodit-react';
import { useRef } from 'react';
import { loadAllCategories } from '../services/category-service';
import { loadPost, updatePostBlog } from '../services/post-service';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import userContext from '../context/userContext';
const UpdateBlog = () => {

     const[post,setPost]=useState([]);
    // const[user,setUser]=useState(null)
     const[categories,setCategories]=useState([])
     const editor = useRef(null)
     //const object=useContext(userContext)
     const {postId} =useParams()

     
  const navigate=  useNavigate()


 const handleChange = (event, fieldName) => {

    setPost({
        ...post,
               [fieldName]: event.target.value
    })

}
    
    const contentFieldChanged = (data) => {
    
        setPost({ ...post, 'content': data })
    
    
    }


    useEffect(() => {

    //setUser(getCurrentUserDetail())
        loadAllCategories()
          .then((data) => {
           // console.log(data);
            setCategories(data);
          })
          .catch((error) => {
            console.log(error);
          });
          

       
          // load the blog 

     loadPost(postId).then((data)=>{

      console.log(data)

    setPost({...data,categoryId:data.category.categoryId})

   // setPost(data)
    
}).catch((error)=>{
    console.log(error)
    toast.error("error in loading post")
})
 
   

//if(post){

    // if(post.user.id != object.user.data.id){

    //     toast.error(" This is not your post ..")
    //     navigate("/")
    // }
//}


      }, []);
    const updatePost=(e)=>{

        e.preventDefault()

        updatePostBlog(post,postId).then(data=>{

          console.log(data)
          toast.success("post blog is updated...")
          navigate("/user/dashboard")
        }
          ).catch((error)=>{
            console.log(error)
          })



    }

    

  return (
      <>
      <Container className='mt-2'>
      <Card className="shadow-sm">
        <CardBody>

        {/* {JSON.stringify(post)} */}
          <h3>Update Post </h3>

          {/* <p>We are going to develop and add articles!!</p> */}

          <Form>
            <FormGroup>
              <Label for="name">Post Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter Your Blog Title"
                name="title"
                onChange={(e)=>handleChange(e,"title")}
               value={post.title}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="name">Post Content</Label>
              {/* <Input
                type="textarea"
                id="title"
                placeholder="Enter Your Blog Content"
                rows="6"
                name="title"
              ></Input> */}

              <JoditEditor
                                ref={editor}
                                value={post.content}
                                onChange={(content)=>contentFieldChanged(content)}      
                                
                            />
            </FormGroup>

             {/* <FormGroup>
                <div className="mt-3">
                            <Label for="image">Select Post banner</Label>
                            <Input id="image" type="file" onChange={handleFileChange} value={post.image} />
                        </div>

                 </FormGroup> */}

            <FormGroup>
              <div className="my-3">
                <Label for="category">Post Category</Label>
                <Input
                  type="select"
                  id="category"
                  placeholder="Enter here"
                  className="rounded-0"
                  name="categoryId"
                  onChange={(e)=>handleChange(e,"categoryId")}
                 defaultValue={0}
                 value={post.categoryId}
                >
                  <option disabled value={0}>
                    --Select category--
                  </option>

                  {categories.map((category) => (

                    
                    <option key={category.categoryId}
                     value={category.categoryId}
                     
                    >
                      {category.categoryTitle}
                    </option>
                  ))}
                </Input>
              </div>
            </FormGroup>

            

            <div className="text-center rounded-0">
              <Button  color="primary" onClick={updatePost}>
                Save Post
              </Button>{" "}
              
            </div>
          </Form>
        </CardBody>
      </Card>
</Container>

    </>
  )
}

export default UpdateBlog
