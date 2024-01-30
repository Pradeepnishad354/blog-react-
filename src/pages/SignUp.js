import {
  Button,
  Container,
  CardHeader,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import React from "react";
import Base from "../components/Base";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { signUp } from "../services/user-service";


const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    
  });

  //const [formValues, setFormValues] = useState(data);
  // const [formErrors, setFormErrors] = useState({});
  

  //reset data

  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };


  const [errors, setError] = useState({});


  

 
  // handle change

  const handleChange = (event,  property) => {
    setData({ ...data, [property]: event.target.value });
   
  };



  // submit the form

  const submitForm = (event) => {
    event.preventDefault();
   
    //call server api for sending the data
   
    if(validate()){

      signUp(data).then((resp)=>{

        console.log(resp)
        
        toast.success("user Registred...",resp.id)
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
    
        }).catch((error)=>{
    
         console.log(error)
        });
    
    }
    

   

  };

 
 

const validate=()=>{
  let isValid = true;
  const newErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!data.name){

      newErrors.name = "Name is required!";
      isValid=false
    }

    if(!data.email){
      newErrors.email= "Email is required!";
      isValid=false
    }else if (!regex.test(data.email)) {
      newErrors.email = "This is not a valid email format!";
      isValid=false
    }

    if (!data.password) {
      newErrors.password = "Password is required";
      isValid=false
    } else if (data.password.length < 4) {
      newErrors.password = "Password must be more than 4 characters";
      isValid=false
    } else if (data.password.length > 10) {
      newErrors.password = "Password cannot exceed more than 10 characters";

      isValid=false
    }

    if(!data.about){

      newErrors.about="About is required!"
      isValid=false
    }
   setError(newErrors)
    return isValid;
}



  return (
    <div>
      <Base>
        <Container className="mt-2">

        
          <Row>
            <Col sm={{ size: 6, offset: 3 }}>
              <Card color="dark" outline>
                <CardHeader className="text-center">
                  <h4>Fill Information For Register!!</h4>
                  <CardBody>

                    <Form onSubmit={submitForm}>
                      <FormGroup>
                        <Label for="name">Enter Name</Label>
                        <Input
                          type="text"
                          id="name"
                          placeholder="Enter Your Name"
                          onChange={(e) => handleChange(e, "name")}
                          //value={data.name}
                          value={data.name}
                          name="name"
                        ></Input>
                         {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                      </FormGroup>
                     

                      <FormGroup>
                        <Label for="email">Enter Email</Label>
                        <Input
                          type="text"
                          id="email"
                          placeholder="Enter Your Email"
                          onChange={(e) => handleChange(e, "email")}
                          //value={data.email}
                          value={data.email}
                          name="email"
                        ></Input>
                         {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                      </FormGroup>
                     
                      <FormGroup>
                        <Label for="password">Enter Password</Label>
                        <Input
                          type="password"
                          id="password"
                          placeholder="Enter Your Password" 
                          onChange={(e) => handleChange(e, "password")}
                         // value={data.password}
                          value={data.password}
                          name="password"

                          autoComplete="true"
                        ></Input>
                         {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                      </FormGroup>
                    
                      <FormGroup>
                        <Label for="textarea">Enter Text</Label>
                        <Input
                          style={{ height: "200px" }}
                          type="textarea"
                          id="textarea"
                          placeholder="Enter About "
                          onChange={(e) => handleChange(e, "about")}
                         // value={data.about}
                         value={data.about}
                         name="about"
                        ></Input>
                       {errors.about && <span style={{ color: 'red' }}>{errors.about}</span>}
                      </FormGroup>
                    
                      <Container className="text-center">
                        <Button color="primary" outline>
                          Register
                        </Button>
                        <Button
                          color="warning"
                         
                          className="ms-2"
                          outline
                          onClick={resetData}
                        >
                          Clear
                        </Button>
                      </Container>
                    </Form>
                  </CardBody>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </Base>
     
    </div>
  );
};

export default SignUp;
