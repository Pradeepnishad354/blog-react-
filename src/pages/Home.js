import React, { useEffect } from "react";
import Base from "../components/Base";
import NewFeed from "../components/NewFeed";
import { Container } from "reactstrap";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Base />
      <Container className="mt-3">
        <NewFeed></NewFeed>
      </Container>
    </div>
  );
};

export default Home;
