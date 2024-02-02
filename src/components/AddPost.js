import React, { useState } from "react";
import {
  Card,
  CardBody,
  Label,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { loadAllCategories } from "../services/category-service";
import { useEffect } from "react";

import { useRef } from "react";
import JoditEditor from "jodit-react";
import {createPost, uploadPostImage } from "../services/post-service";
import { getCurrentUserDetail } from "../auth";

import {toast} from  'react-toastify';

const AddPost = (props) => {


   // console.log("props",props)

  const [category, setCategories] = useState([]);
  const editor = useRef(null)
  const[user,setUser]=useState(undefined);
  const[image,setImage]=useState();
  const[post,setPost]=useState({

    title:"",
    content:"",
    categoryId:"",
     
  })


  //field changed function
  const fieldChanged = (event) => {
    // console.log(event)
    setPost({ ...post, [event.target.name]: event.target.value })
}

const contentFieldChanaged = (data) => {

    setPost({ ...post, 'content': data })


}


  const submitPost=(event)=>{

    event.preventDefault()

     if (post.title.trim() === '') {
      toast.error("post  title is required !!")
      return;
      }

   if (post.content.trim() === '') {
    toast.error("post  content is required !!")
    return;
    }

  if(post.categoryId === ''){
  toast.error("Select Some category ")
  return;
}



     post['userId']=user.id

    createPost(post).then((data)=>{

      
        
      uploadPostImage(image,data.postId).then((response)=>{
        toast.success("image uploaded !!")
        console.log(response)
      }).catch((error)=>{
      console.log(error)
        toast.error("error in uploading Image ")
      })
        toast.success("Post created !!!")
       
        setPost({
          title:"",
          content:"",
          categoryId:''
         
        })
       
        

        

    }).catch((error)=>{
     toast.error("Post is not created due to some error")
      console.log(error)
    })
  }
  






  useEffect(() => {

    setUser(getCurrentUserDetail())
    loadAllCategories()
      .then((data) => {
       // console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(user)
  }, []);


  console.log("categories", category);



    //handling file change event
    const handleFileChange=(event)=>{
        console.log(event.target.files[0])
        setImage(event.target.files[0])
    }


  return (
    <>
      <Card className="shadow-sm">
        <CardBody>

        {/* {JSON.stringify(post)} */}
          <h3>Add Your Post Here </h3>

          {/* <p>We are going to develop and add articles!!</p> */}

          <Form>
            <FormGroup>
              <Label for="name">Post Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter Your Blog Title"
                name="title"
                onChange={fieldChanged}
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
                                onChange={(content)=>contentFieldChanaged(content)}      
                                
                            />
            </FormGroup>

             <FormGroup>
                <div className="mt-3">
                            <Label for="image">Select Post banner</Label>
                            <Input id="image" type="file" onChange={handleFileChange} value={post.image} />
                        </div>

                 </FormGroup>

            <FormGroup>
              <div className="my-3">
                <Label for="category">Post Category</Label>
                <Input
                  type="select"
                  id="category"
                  placeholder="Enter here"
                  className="rounded-0"
                  name="categoryId"
                  onChange={fieldChanged}
                  defaultValue={0}
                >
                  <option disabled value={0}>
                    --Select category--
                  </option>

                  {category.map((category ,test) => (
                    <option key={test}
                      value={category.categoryId}
                    //   key={category.categoryId}
                    >
                      {category.categoryTitle}
                    </option>
                  ))}
                </Input>
              </div>
            </FormGroup>

            

            <div className="text-center rounded-0">
              <Button  color="primary" onClick={submitPost}>
                Save Post
              </Button>{" "}
              <Button  color="warning" type="reset">
                Reset Content
              </Button>{" "}
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default AddPost;
