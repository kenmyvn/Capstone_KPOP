import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import "./PhotocardPage.css";
import DisplayPhotocard from "../../components/DisplayPhotocard/DisplayPhotocard";

const PhotocardPage = (props) => {
  const [token] = useAuth();
  const { albumname } = useParams();
  const auth = useContext(AuthContext);
  const [stayc, setStayC] = useState([]);

  useEffect(() => {
    fetchStayC();
  }, [token]);

  const fetchStayC = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/stayc/album/?album=${albumname}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      setStayC(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="container">
      <h1 className="versionheading"></h1>
      <div className="versions">
        {stayc &&
          stayc
            .filter((stayc) => {
              return stayc.version == 1;
            })
            .map((stayc) => (
              <DisplayPhotocard
                image={stayc}
                createWant={props.putWantStayC}
                createHave={props.putHaveStayC}
                key={stayc.id}
              />
            ))}
      </div>
      <div className="versions">
        {stayc &&
          stayc
            .filter((stayc) => {
              return stayc.version == 2;
            })
            .map((stayc) => (
              <DisplayPhotocard
                image={stayc}
                createWant={props.putWantStayC}
                createHave={props.putHaveStayC}
                key={stayc.id}
              />
            ))}
      </div>
    </div>
  );
};

export default PhotocardPage;
