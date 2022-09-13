import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

const RegisterPage = () => {
  // const { REACT_APP_REST } = process.env;
  const { registerUser } = useContext(AuthContext);
  // const [file, setFile] = useState([]);

  // const handleFile = (e) => {
  //   setFile(URL.createObjectURL(e.target.files[0]));
  //   const formData = new FormData();
  //   formData.append("fileupload", e.target.files[0]);

  //   fetch("http://127.0.0.1:8000/StayC_images", {
  //     method: "POST",

  //     body: formDa ta,
  //     dataType: "jsonp",
  //   });
  // };

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    image: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="container">
      <div className="versions6">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Username:{" "}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            First Name:{" "}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Last Name:{" "}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password:{" "}
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          <p style={{ fontSize: "12px" }}>
            NOTE: Make this an uncommon password with characters, numbers, and
            special characters!
          </p>
          <label>
            Input Your Profile Picture URL:{" "}
            <input
              type="text"
              onChange={handleInputChange}
              name="image"
              value={formData.image}
            />
          </label>
          <button>Register!</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
