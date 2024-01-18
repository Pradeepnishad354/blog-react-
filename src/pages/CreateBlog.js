import React, { useState } from "react";


import { Card, CardBody, Form, FormGroup, Label, Input, Container,Col,Button} from "reactstrap";
import Base from "../components/Base";

const CreateBlog = () => {


    const [postData, setPostData] = useState({
        title: null,
        description: null,
       image:null
      });


    const  resetData=()=>{

        const resetData = () => {
            setPostData({
              title: "",
              description: "",
              image:''
            });
          };
    }


    const handleChange=(e,property)=>{

  setPostData({...postData,[property]:e.target.value})

    }
     
const saveBlog=(e)=>{

    e.preventDefault();
    console.log("save blog ")

    console.log(postData)


}


  return (
    <>
    <Base></Base>
<div className="mt-3">
    <Container>
    <Col sm={{ size: 6, offset: 3 }}>
      <Card>
      
      <h3 className="text-center"> Add Your Blog Here!!</h3> 
    
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="name">Enter Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter Your Blog Title"
              
                onChange={(e)=>handleChange(e,"title")}
                name="title"
              ></Input>
            </FormGroup>


            <FormGroup>
              <Label for="name">Enter Description</Label>
              <Input
                type="textarea"
                rows="6"
                id="description"
                placeholder="Enter Your Blog Description"
                //value={data.name}
               
                 onChange={(e)=>handleChange(e,"description")}
                name="description"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="name"></Label>
              <Input
                type="file"
                id="image"
                placeholder="Enter Your Blog Image"
            
                onChange={(e)=>handleChange(e,"image")}
                name="image"
              ></Input>
            </FormGroup>

            <div className="text-center">
            <Button color="primary" onClick={saveBlog}>
        Save
         </Button>
     {' '}
     <Button color="warning" type="reset" onClick={resetData}>
        Clear
         </Button>
     {' '}
            </div>
          </Form>
        </CardBody>
      </Card>
      </Col>
      </Container>
      </div>
    </>
  );
};
export default CreateBlog;
