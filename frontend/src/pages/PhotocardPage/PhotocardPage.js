import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./PhotocardPage.css";
import DisplayPhotocard from "../../components/DisplayPhotocard/DisplayPhotocard";

const PhotocardPage = () => {
  const [user, token] = useAuth();
  const auth = useContext(AuthContext);
  const { member, albumname } = useParams();
  const [stayc, setStayC] = useState([]);
  const [wantstayc, setWantStayC] = useState([]);
  const [havestayc, setHaveStayC] = useState([]);

  useEffect(() => {
    fetchStayC();
  }, [token]);

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

  const putWantStayC = async (id) => {
    let wantStayC = {
      user: user.id,
      photocard: id,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/stayc/want/?user=${user.id}&member=${member}`,
        wantStayC,
        config
      );
      setWantStayC([...wantstayc, response.data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const putHaveStayC = async (id) => {
    let haveStayC = {
      user: user.id,
      photocard: id,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/stayc/have/?user=${user.id}&member=${member}`,
        haveStayC,
        config
      );
      setHaveStayC([...havestayc, response.data]);
    } catch (error) {
      console.log(error.message);
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
                createWant={putWantStayC}
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
                createHave={putHaveStayC}
                key={stayc.id}
              />
            ))}
      </div>
    </div>
  );
};

export default PhotocardPage;
