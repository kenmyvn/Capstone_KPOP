import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

const Navbar = () => {
  // const { REACT_APP_REST } = process.env;
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [file] = useState([]);

  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <b>PROFILE</b>
          </Link>
          <div className="Avatar">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <Avatar
                id="avatar"
                src={user ? user.image : ""}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </IconButton>
          </div>
        </li>
        <div className="buttons-space">
          <Link to={`/home`} className="buttons-2">
            <button>Albums</button>
          </Link>
          <Link to={`/theme`} className="buttons-2">
            <button>Theme</button>
          </Link>
          <li className="buttons-2">
            {user ? (
              <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
