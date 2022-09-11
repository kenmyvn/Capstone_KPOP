import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./OwnedMemberPage.css";
import DisplayPhotocard from "../../components/DisplayPhotocard/DisplayPhotocard";

const OwnedMemberPage = (props) => {
  const [user, token] = useAuth();
  const { member } = useParams();
  const [staychave, setStayCHave] = useState([]);

  useEffect(() => {
    const fetchStayCHave = async () => {
      try {
        let response = await axios.get(
          `http://127.0.0.1:8000/api/stayc/have/?user=${user.id}&member=${member}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setStayCHave(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchStayCHave();
  }, [token]);

  return (
    <div className="container">
      <div className="versionsown">
        {staychave &&
          staychave
            .filter((staychave) => {
              return staychave;
            })
            .map((stayc) => (
              <DisplayPhotocard
                image={stayc}
                key={stayc.id}
                status="have"
                createWant={props.putWantStayC}
                createHave={props.putHaveStayC}
                deleteHave={props.deleteHaveStayC}
                deleteWant={props.deleteWantStayC}
              />
            ))}
      </div>
    </div>
  );
};

export default OwnedMemberPage;
