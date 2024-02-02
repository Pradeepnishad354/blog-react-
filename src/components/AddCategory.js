import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Form,
  Label,
  Input,
  FormGroup,
  CardBody,
  Button,
} from "reactstrap";

import Base from "./Base";
import { addCategory } from "../services/category-service";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AddCategory = () => {

    const[category,setCategories]=useState({

        categoryTitle:"",
        categoryDescription:""
    })

const handleChange=(e)=>{

setCategories({...category,[e.target.name]:e.target.value})
}

const createCategory=(e)=>{
e.preventDefault()
    


if(category.categoryTitle.trim()===''){

    toast.error("category title is required !!")

    return ;
}

if(category.categoryDescription.trim()===''){

    toast.error("category description is required !!")

    return ;
}

   addCategory(category).then((data)=>{

    console.log(data)
    toast.success("category added !!..")
    setCategories({

        categoryTitle:null,
        categoryDescription:null
    })
})   
}
  return (
    <>
<Base/>

<div className="text-center mt-2">
  <Button tag={Link} to={"/categories/:categoryId"} color="warning">CategoryList</Button>
</div>
   
    <div className="mt-3">

      <Container>
        <Card>
          <CardBody>
            <h2>Add Category Here !!</h2>
            <Form onSubmit={createCategory}>

              <FormGroup>
                <Label for="name">Category Title</Label>
                <Input
                  type="text"
                  id="title"
                  placeholder="Enter Your Catgeory Title"
                 name="categoryTitle"
                  onChange={handleChange}
                ></Input>
              </FormGroup>


              <FormGroup>
                <Label for="name">Category Description</Label>
                <Input
                  type="text"
                  id="title"
                  placeholder="Enter Your Catgeory Description"
                  name="categoryDescription"
                  onChange={handleChange}
                ></Input>
              </FormGroup>

              <div className="text-center">
                <Button color="primary">Save</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </div>
    </>

  );
};

export default AddCategory;
