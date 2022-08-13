import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import { ImageField } from "react-admin";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [stayc, setStayC] = useState([]);

  useEffect(() => {
    const fetchStayC = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/stayc/all/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setStayC(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchStayC();
  }, [token]);

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {stayc &&
        stayc.map((stayc) => (
          <p key={stayc.id}>
            {stayc.album} {stayc.member}{" "}
            <img src={stayc.image} alt="" height="300" width="200" />
          </p>
        ))}
    </div>
  );
};

export default HomePage;
