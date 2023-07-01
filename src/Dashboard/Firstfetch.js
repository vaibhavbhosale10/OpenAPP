import React, { useState, useEffect } from "react";
import axios from "axios";
import "./firstfetch.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaCard } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaCity } from "react-icons/fa";

const Firstfetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://lookup.binlist.net/45717360");
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Row className="row-cols-1 row-cols-lg-4 justify-content-center">
        <Col>
          <div className="block" id="first">
            <FaPuzzlePiece
              style={{
                position: "relative",
                top: "-40px",
                left: "130px",
                fontSize: "25px",
              }}
            />

            <h5>Scheme:{data.scheme} </h5>
          </div>
        </Col>
        <Col>
          <div className="block" id="second">
            <FaCreditCard
              style={{
                position: "relative",
                top: "-40px",
                left: "130px",
                fontSize: "25px",
              }}
            />
            <h5>Card: {data.type}</h5>
          </div>
        </Col>
        <Col>
          <div className="block" id="third">
            <FaFlag
              style={{
                position: "relative",
                top: "-40px",
                left: "170px",
                fontSize: "25px",
              }}
            />
            <h5>Country: {data.country?.name}</h5>
          </div>
        </Col>
        <Col>
          <div className="block" id="fourth">
            <FaCity
              style={{
                position: "relative",
                top: "-40px",
                left: "150px",
                fontSize: "25px",
              }}
            />
            <h5>City: {data.bank?.city}</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Firstfetch;

// {/* <Container>
//       <Row>
//         {/* <div className="main"> */}
//         <Col lg={4} xs={12}>
//           <div className="block" id="first">
//             <h5>Scheme: {data.scheme}</h5>
//           </div>
//         </Col>
//         <Col lg={4} xs={12}>
//           <div className="block" id="second">
//             <h5>Card: {data.type}</h5>
//           </div>
//         </Col>
//         <Col lg={4} xs={12}>
//           <div className="block" id="third">
//             <h5>Country: {data.country?.name}</h5>
//           </div>
//         </Col>
//         <Col lg={4} xs={12}>
//           <div className="block" id="fourth">
//             <h5>City:{data.bank?.city}</h5>
//           </div>
//         </Col>
//         {/* </div> */}
//       </Row>
//     </Container> */}
