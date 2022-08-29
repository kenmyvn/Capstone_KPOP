import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./PhotocardPage.css";

const PhotocardPage = () => {
  const [user, token] = useAuth();
  const { albumname } = useParams();
  const [stayc, setStayC] = useState([]);

  useEffect(() => {
    const fetchStayC = async () => {
      try {
        let response = await axios.get(
          `http://127.0.0.1:8000/api/stayc/album/?album=${albumname}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setStayC(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchStayC();
  }, [token]);

  return (
    <div className="container">
      <h1 className="versionheading">version 1</h1>
      <div className="versions">
        {stayc &&
          stayc
            .filter((stayc) => {
              return stayc.version == 1;
            })
            .map((stayc) => (
              <p key={stayc.id}>
                {" "}
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
      <h1 className="versionheading">version 2</h1>
      <div className="versions">
        {stayc &&
          stayc
            .filter((stayc) => {
              return stayc.version == 2;
            })
            .map((stayc) => (
              <p key={stayc.id}>
                {" "}
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
    </div>
  );
};

export default PhotocardPage;
