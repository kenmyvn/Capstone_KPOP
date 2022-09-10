import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./PhotocardPage.css";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

const PhotocardPage = () => {
  const [user, token] = useAuth();
  const { albumname } = useParams();
  const [stayc, setStayC] = useState([]);
  const [isHovered, setHover] = useState(false);

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
              <div>
                <img
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  key={stayc.id}
                  className="stayc-img"
                  src={`http://127.0.0.1:8000${stayc.image}`}
                  alt=""
                />
                {isHovered && (
                  <Button
                    // style={{
                    //   // position: "fixed",
                    //   top: "-500px",
                    //   right: "500px",
                    // }}
                    startIcon={<FavoriteIcon />}
                  ></Button>
                )}
                {isHovered && <Button startIcon={<StarIcon />}></Button>}
              </div>
            ))}
      </div>
      <h1 className="versionheading2">version 2</h1>
      <div className="versions">
        {stayc &&
          stayc
            .filter((stayc) => {
              return stayc.version == 2;
            })
            .map((stayc) => (
              <img
                key={stayc.id}
                className="stayc-img"
                src={`http://127.0.0.1:8000${stayc.image}`}
                alt=""
              />
            ))}
      </div>
    </div>
  );
};

export default PhotocardPage;
