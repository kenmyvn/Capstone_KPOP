import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ForestIcon from "@mui/icons-material/Forest";
import PetsIcon from "@mui/icons-material/Pets";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import "./OwnedPage.css";

const OwnedPage = () => {
  return (
    <div className="container">
      <div className="buttonholder">
        <div className="profilebutton">
          <Link to={`/ownedmember/sumin`}>
            <Button variant="contained" startIcon={<ForestIcon />}>
              Sumin
            </Button>
          </Link>
        </div>
        <div className="profilebutton">
          <Link to={`/ownedmember/sieun`}>
            <Button variant="contained" startIcon={<PetsIcon />}>
              Sieun
            </Button>
          </Link>
        </div>

        <div className="profilebutton">
          <Link to={`/ownedmember/isa`}>
            <Button variant="contained" startIcon={<LocalMallIcon />}>
              Isa
            </Button>
          </Link>
        </div>
        <div className="profilebutton">
          <Link to={`/ownedmember/seeun`}>
            <Button variant="contained" startIcon={<LocalDiningIcon />}>
              Seeun
            </Button>
          </Link>
        </div>
        <div className="profilebutton">
          <Link to={`/ownedmember/yoon`}>
            <Button variant="contained" startIcon={<WbSunnyIcon />}>
              Yoon
            </Button>
          </Link>
        </div>
        <div className="profilebutton">
          <Link to={`/ownedmember/j`}>
            <Button variant="contained" startIcon={<ColorLensIcon />}>
              J
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OwnedPage;
