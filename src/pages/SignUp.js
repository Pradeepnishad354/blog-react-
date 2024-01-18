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



const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    
  });

  const [formValues, setFormValues] = useState(data);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  //reset data

  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };


  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);


 
  // handle change

  const handleChange = (event,  property) => {
   // setData({ ...data, [property]: event.target.value });
   const { name, value } = event.target;
   setFormValues({ ...formValues, [name]: value });
//setFormValues({...formValues,[property]:event.target.value})
  };



  // submit the form

  const submitForm = (event) => {
    event.preventDefault();
   // console.log(data)

    // data validate
    setFormErrors(validate(formValues));
//toast.success("toast ")
    setIsSubmit(true);
    //call server api for sending the data
   // console.log(formValues)

const SignUp  =async()=>{

  fetch("http://localhost:8080/api/users")

}
   

  };

  useEffect(() => {
   // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //console.log(formValues);
    }
  }, [formErrors]);




const validate=(values)=>{

  const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.name){

      errors.name = "Name is required!";
    }

    if(!values.email){
      errors.email= "Email is required!";
    }else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if(!values.about){

      errors.about="About is required!"
    }

    return errors;
}


  return (
    <div>
      <Base>
        <Container className="mt-2">

        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : 
      (
        <pre>{JSON.stringify( undefined, 2)}</pre>
      )}

          {/* {JSON.stringify(data)} */}
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
                          value={formValues.name}
                          name="name"
                        ></Input>
                         <p>{formErrors.name}</p>
                      </FormGroup>
                     

                      <FormGroup>
                        <Label for="email">Enter Email</Label>
                        <Input
                          type="text"
                          id="email"
                          placeholder="Enter Your Email"
                          onChange={(e) => handleChange(e, "email")}
                          //value={data.email}
                          value={formValues.email}
                          name="email"
                        ></Input>
                         <p>{formErrors.email}</p>
                      </FormGroup>
                     
                      <FormGroup>
                        <Label for="password">Enter Password</Label>
                        <Input
                          type="password"
                          id="password"
                          placeholder="Enter Your Password" 
                          onChange={(e) => handleChange(e, "password")}
                         // value={data.password}
                          value={formValues.password}
                          name="password"
                        ></Input>
                          <p>{formErrors.password}</p>
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
                         value={formValues.about}
                         name="about"
                        ></Input>
                        <p>{formErrors.about}</p>
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
