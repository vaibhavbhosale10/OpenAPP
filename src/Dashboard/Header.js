import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import "./header.css";
import axios from "axios";
const Header = () => {
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        const response = await axios.get(
          "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc34e4f4c884de839/63773ca8a1edd010adb6b245/ronaldo.jpg?auto=webp&format=pjpg&width=1200&quality=60"
        );
        setPhotoUrl(response.data.photoUrl);
      } catch (error) {
        console.error("Error fetching profile photo:", error);
      }
    };

    fetchProfilePhoto();
  }, []);
  return (
    <>
      <div className="parentC">
        <div className="name">Dashboard</div>
        <div offset={{ md: 2, lg: 0 }} className="searchbox">
          <input type="text" placeholder="search..." />
        </div>
        <div className="bellicon">
          <FaBell style={{ height: "40px" }} />
        </div>
        <div className="profile">
          <div className="profile-img">
            <img src={photoUrl} alt="Profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
