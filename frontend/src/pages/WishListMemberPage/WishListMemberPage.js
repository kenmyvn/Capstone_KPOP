import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./WishListMemberPage.css";
import DisplayPhotocard from "../../components/DisplayPhotocard/DisplayPhotocard";

const OwnedMemberPage = () => {
  const [user, token] = useAuth();
  const { member } = useParams();
  const [staycwant, setStayCWant] = useState([]);

  useEffect(() => {
    const fetchStayCWant = async () => {
      try {
        let response = await axios.get(
          `http://127.0.0.1:8000/api/stayc/want/?user=${user.id}&member=${member}`,
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
      <div className="versionswish">
        {staycwant &&
          staycwant
            .filter((staycwant) => {
              return staycwant;
            })
            .map((stayc) => <DisplayPhotocard image={stayc} />)}
      </div>
    </div>
  );
};

export default OwnedMemberPage;
