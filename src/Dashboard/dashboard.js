import React, { useState } from "react";
import "./dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Firstfetch from "./Firstfetch";
import GraphLayout from "./SecondFetch";
import ThirdFetch from "./thirdFetch";
import { FaDesktop } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import Header from "./Header";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Board.</h2>
        <ul>
          <li
            className={selectedTab === "dashboard" ? "active" : ""}
            onClick={() => handleTabChange("dashboard")}
          >
            <FaDesktop className="logo" /> Dashboard
          </li>

          <li
            className={selectedTab === "Transaction" ? "active" : ""}
            onClick={() => handleTabChange("Transaction")}
          >
            <FaExchangeAlt className="logo" /> Transaction
          </li>
          <li
            className={selectedTab === "Schedules" ? "active" : ""}
            onClick={() => handleTabChange("Schedules")}
          >
            <FaCalendar className="logo" /> Schedules
          </li>
          <li
            className={selectedTab === "Users" ? "active" : ""}
            onClick={() => handleTabChange("Users")}
          >
            <FaUsers className="logo" /> Users
          </li>
          <li
            className={selectedTab === "Settings" ? "active" : ""}
            onClick={() => handleTabChange("Settings")}
          >
            <FaCog className="logo" /> Settings
          </li>
        </ul>
      </div>
      <div className="main-content">
        {selectedTab === "dashboard" && (
          <Container>
            <Row>
              <Header />
            </Row>
            <Row>
              <Firstfetch />
            </Row>
            <Row>
              <GraphLayout />
            </Row>
            <Row>
              <ThirdFetch />
            </Row>
          </Container>
        )}
        {selectedTab === "Transaction" && (
          <p>This is the Transaction tab content.</p>
        )}
        {selectedTab === "Schedules" && (
          <p>This is the Schedules tab content.</p>
        )}
        {selectedTab === "Users" && <p>This is the Users tab content.</p>}

        {selectedTab === "Settings" && <p>This is the Settings tab content.</p>}
      </div>
    </div>
  );
};

export default Dashboard;
