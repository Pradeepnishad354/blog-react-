import React, { useContext, useState } from "react";
import Base from "../components/Base";

import { loginUser } from "../services/user-service";
import { toast } from "react-toastify";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  Input,
  CardHeader,
  Form,
  FormGroup,
  Button,
} from "reactstrap";
import { doLogin } from "../auth";
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const userContextData = useContext(userContext);
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });



  const handleChange = (e, field) => {
    setLoginDetail({ ...loginDetail, [field]: e.target.value });
  };




  const loginForm = (e) => {
    e.preventDefault();

    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Username or Password  is required !!");
      return;
    }

    



    console.log(loginDetail);
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);
        toast.success("Login Success..");
      

        doLogin(data, () => {
          console.log("login details save in localstorage ")
          navigate("/user/dashboard");
          userContextData.setUser({
            data: data.user,
            login: true,
          });
          
         
        });



        

        setLoginDetail({
          username: "",
          password: "",
        });



      })
      .catch((error) => {
        console.log(error);

        // if (error.response.status == 400||error.response.status ==404) {

        //   console.log(error.response.status)
        //   toast.error(error.response.data.message);

        // }else {
        //   toast.error("something went to wrong on server ! ");
        // }
        
      });
  }



  return (
    <div>
      <Base>
        <Container className="mt-3">
          <Row>
            <Col sm={{ offset: 3, size: 6 }}>
              <Card>
                <CardHeader>
                  <h1>Login Here!!!</h1>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={loginForm}>
                    <FormGroup>
                      <Label>Enter UserName</Label>
                      <Input
                        type="text"
                        placeholder="Enter Username Here"
                        onChange={(e) => handleChange(e, "username")}
                        name="username"
                        value={loginDetail.username}
                      ></Input>
                    </FormGroup>

                    <FormGroup>
                      <Label>Enter Password</Label>
                      <Input
                        type="password"
                        placeholder="Enter Password Here"
                        onChange={(e) => handleChange(e, "password")}
                        value={loginDetail.password}
                        autoComplete="false"
                      ></Input>
                    </FormGroup>
                    <Container className="text-center">
                      <Button color="success">Login</Button>
                      <Button color="warning" className="ms-2">
                        Clear
                      </Button>
                    </Container>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
};

export default Login;
