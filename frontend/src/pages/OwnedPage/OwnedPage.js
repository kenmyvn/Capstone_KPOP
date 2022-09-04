import React from "react";
import { Link } from "react-router-dom";
import "./OwnedPage.css";

const OwnedPage = () => {
  return (
    <div className="container">
      <h1 className="membername">owned page</h1>
      <div className="buttonholder">
        <div className="profilebutton">
          <Link to={`/ownedmember/sumin`}>
            <button>Sumin</button>
          </Link>
        </div>
        <div className="profilebutton">
          <Link to={`/ownedmember/sieun`}>
            <button>Sieun</button>
          </Link>
        </div>
      </div>
      <div className="profilebutton">
        <Link to={`/ownedmember/isa`}>
          <button>Isa</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/ownedmember/seeun`}>
          <button>Seeun</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/ownedmember/yoon`}>
          <button>Yoon</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/ownedmember/j`}>
          <button>J</button>
        </Link>
      </div>
    </div>
  );
};

export default OwnedPage;
