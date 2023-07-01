import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import "./Login.css";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col
            className="leftside"
            lg={6}
            style={{
              width: "588px",
              height: "1024px",
              backgroundColor: "#000",
            }}
          >
            <div className="content">Board.</div>
          </Col>
          <Col
            className="rightside"
            style={{
              width: "852px",
              height: "1024px",
              backgroundColor: "#F5F5F5",
            }}
          >
            <div>
              <div className="other">
                Sign in
                <p>sign in to your account</p>
              </div>

              {/* google and apple login link */}
              <div className="aglink" style={{ position: "relative" }}>
                <button className="mylink">
                  <FaGoogle style={{ Color: "#4285f4", fontSize: "18px" }} />{" "}
                  sign in with google
                </button>
                <button className="mylink">
                  <FaApple
                    style={{
                      Color: "#4285f4",
                      fontSize: "20px",
                      marginLeft: "-10px",
                      marginTop: "-8px",
                    }}
                  />
                  sign in with apple
                </button>
              </div>

              {/* google and apple link finishesh here */}

              {/* login details div starts */}
              <div className="logindesign" style={{ position: "absolute" }}>
                <form onSubmit={handleSubmit} action="">
                  <label style={{ marginTop: "25px" }} htmlFor="input">
                    Email address
                  </label>
                  <br />
                  <input
                    type="email"
                    value={email}
                    id="inputone"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@gmail.com"
                  />
                  <br />
                  <label id="labeltwo" htmlFor="inpur">
                    Password
                  </label>
                  <br />
                  <input
                    id="inputtwo"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                  <br />
                  <a href="">Forgot password?</a>
                  <button type="submit" className="submit">
                    sign in
                  </button>
                </form>
              </div>
              {/* login details div end here */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Loginpage;
