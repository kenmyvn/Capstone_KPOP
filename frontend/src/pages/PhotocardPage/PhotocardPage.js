import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import "./PhotocardPage.css";
import DisplayPhotocard from "../../components/DisplayPhotocard/DisplayPhotocard";

const PhotocardPage = (props) => {
  const [user, token] = useAuth();
  const { albumname, member } = useParams();
  const auth = useContext(AuthContext);
  const [stayc, setStayC] = useState([]);
  const [staychave, setStayCHave] = useState([]);
  const [staycwant, setStayCWant] = useState([]);

  useEffect(() => {
    fetchStayC();
    fetchStayCHave();
    fetchStayCWant();
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

  const fetchStayCHave = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/stayc/have/all/?user=${user.id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const haveIds = response.data.map((have) => have.id);
      setStayCHave(haveIds);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const fetchStayCWant = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/stayc/want/all/?user=${user.id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const wantIds = response.data.map((want) => want.id);
      setStayCWant(wantIds);
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
                deleteHave={props.deleteHaveStayC}
                deleteWant={props.deleteWantStayC}
                key={stayc.id}
                status={
                  staychave.includes(stayc.id)
                    ? "have"
                    : staycwant.includes(stayc.id)
                    ? "want"
                    : ""
                }
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
                deleteHave={props.deleteHaveStayC}
                deleteWant={props.deleteWantStayC}
                key={stayc.id}
                status={
                  staychave.includes(stayc.id)
                    ? "have"
                    : staycwant.includes(stayc.id)
                    ? "want"
                    : ""
                }
              />
            ))}
      </div>
    </div>
  );
};

export default PhotocardPage;
