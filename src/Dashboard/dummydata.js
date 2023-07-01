import React, { useEffect, useState } from "react";
import "./dummy.css";
import axios from "axios";

const Dummydata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.gov.uk/bank-holidays.json"
        );
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="dummycontent" style={{ position: "relative" }}>
        Today's Schedule
        <p>Meeting with suppliers from Kuta Bali</p>
        <p id="time">14.00-15.00</p>
        <p id="address">at Sunset Road, Kuta, Bali </p>
        <p id="check">Check operation at Giga Factory 1</p>
        <p id="date">18.00-20.00</p>
        <p id="place">at Central Jakarta </p>
      </div>
    </div>
  );
};

export default Dummydata;
