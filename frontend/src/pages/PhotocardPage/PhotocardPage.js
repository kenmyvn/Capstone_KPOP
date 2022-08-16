import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const PhotocardPage = () => {
  const [user, token] = useAuth();
  const [stayc, setStayC] = useState([]);

  useEffect(() => {
    const fetchStayC = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/stayc/all/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setStayC(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchStayC();
  }, [token]);

  return (
    <div className="container">
      <h1>hi</h1>
    </div>
  );
};

export default PhotocardPage;
