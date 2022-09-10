import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./PhotocardPage.css";
import DisplayPhotocard from "../../components/DisplayPhotocard/DisplayPhotocard";

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
            .map((stayc) => <DisplayPhotocard image={stayc} />)}
      </div>
      <h1 className="versionheading2">version 2</h1>
      <div className="versions">
        {stayc &&
          stayc
            .filter((stayc) => {
              return stayc.version == 2;
            })
            .map((stayc) => <DisplayPhotocard image={stayc} />)}
      </div>
    </div>
  );
};

export default PhotocardPage;
