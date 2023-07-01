import { Col, Container, Row } from "react-bootstrap";
import Dummydata from "./dummydata";
import PieChart from "./piechart";
import "./thirdfetch.css";
import React from "react";

const ThirdFetch = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} lg={4} className="mb-6">
          <div className="childone">
            <PieChart />
          </div>
        </Col>
        <Col xs={12} lg={4} className="mb-6">
          <div className="childtwo">
            <Dummydata />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ThirdFetch;
