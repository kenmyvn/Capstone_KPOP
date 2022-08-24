import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./PhotocardPage.css";

const PhotocardPage = () => {
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
      {stayc &&
        stayc.map((stayc) => (
          <p key={stayc.id}>
            {stayc.album} {stayc.member}{" "}
            <img
              className="stayc-img"
              src={`http://127.0.0.1:8000${stayc.image}`}
              alt=""
              height="300"
              width="200"
            />
          </p>
        ))}
    </div>
  );
};

export default PhotocardPage;
