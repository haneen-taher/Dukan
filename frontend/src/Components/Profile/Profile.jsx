import React, { useState, useEffect } from "react";
import "./Profile.css";
import ProfileHero from "./ProfileHero";
import avatar from "../../Images/user.png";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState({});

  //useEffect hook to fetch data from json server --callback, dep
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(
          `api/v1/customer/${sessionStorage.getItem("customerId")}`
        );
        const userData = response.data;
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <div className="profilePage">
      <ProfileHero />
      <div className="profileBox">
        <div className="profileTable">
          <div className="profileRightSection">
            <div className="profileImg">
              <img src={avatar} className="profileImg" alt="avatar" />
            </div>
            <h4></h4>
          </div>
          <div className="profileLeftSection">
            <div className="profileLeftSection-right">
              <div>الاسم</div>
              <div>البريد الإلكتروني</div>
            </div>
            <div className="profileLeftSection-left">
              <div>{user.name}</div>
              <div>{user.email}</div>
            </div>
          </div>

          <button className="editButton">تعديل</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
