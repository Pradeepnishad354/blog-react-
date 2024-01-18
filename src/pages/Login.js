import React from "react";
import Base from "../components/Base";
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

const Login = () => {


  function  loginForm(){

    console.log("test")
   

  }



  return (
    <div>
      <Base>
        <Container className="mt-3">
          <Row>
            <Col sm={{ offset: 3, size: 6 }}>
              <Card >
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
                      ></Input>
                    </FormGroup>

                    <FormGroup>
                      <Label>Enter Password</Label>
                      <Input
                        type="password"
                        placeholder="Enter Password Here"
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
