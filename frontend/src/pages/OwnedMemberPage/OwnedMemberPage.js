import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
// import "./PhotocardPage.css";

const OwnedMemberPage = () => {
  const [user, token] = useAuth();
  // const { member } = useParams();
  const [staychave, setStayCHave] = useState([]);

  useEffect(() => {
    const fetchStayCHave = async () => {
      try {
        let response = await axios.get(
          `http://127.0.0.1:8000/api/stayc/have/?user=1`,
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
      <h1>owned member page</h1>
      <div className="versions">
        {staychave &&
          staychave
            .filter((staychave) => {
              return staychave;
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

export default OwnedMemberPage;
