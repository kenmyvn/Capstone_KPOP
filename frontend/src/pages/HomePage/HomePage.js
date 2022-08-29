import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import { ImageField } from "react-admin";
import DisplayAlbums from "../../components/DisplayAlbums/DisplayAlbums";
import "./HomePage.css";

import axios from "axios";

const HomePage = () => {
  const [user, token] = useAuth();
  // const [stayc, setStayC] = useState([]);

  // useEffect(() => {
  //   const fetchStayC = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/stayc/all/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setStayC(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchStayC();
  // }, [token]);

  return (
    <div className="container">
      <div className="logo">
        <img src="/stayc-60e4a84d14351.png" alt="stayc logo" width="600px" />
      </div>
      <div>
        <DisplayAlbums />
      </div>
    </div>
  );
};

export default HomePage;
