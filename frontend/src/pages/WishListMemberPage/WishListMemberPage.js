import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./WishListMemberPage.css";

const OwnedMemberPage = () => {
  const [user, token] = useAuth();
  const { member } = useParams();
  const [staycwant, setStayCWant] = useState([]);

  useEffect(() => {
    const fetchStayCWant = async () => {
      try {
        let response = await axios.get(
          `http://127.0.0.1:8000/api/stayc/want/?user=1&member=${member}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setStayCWant(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchStayCWant();
  }, [token]);

  return (
    <div className="container">
      <h1 className="membername">wishlist for {member}</h1>
      <div className="versions">
        {staycwant &&
          staycwant
            .filter((staycwant) => {
              return staycwant;
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
