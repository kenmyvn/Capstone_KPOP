import React from "react";
import { Link } from "react-router-dom";

const OwnedPage = () => {
  return (
    <div className="container">
      <h1>owned page</h1>
      <div className="buttonholder">
        <div className="profilebutton">
          <Link to={`/ownedmember`}>
            <button>Sumin</button>
          </Link>
        </div>
        <div className="profilebutton">
          <Link to={`/ownedmember`}>
            <button>Sieun</button>
          </Link>
        </div>
      </div>
      <div className="profilebutton">
        <Link to={`/ownedmember`}>
          <button>Isa</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/ownedmember`}>
          <button>Seeun</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/ownedmember`}>
          <button>Yoon</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/ownedmember`}>
          <button>J</button>
        </Link>
      </div>
    </div>
  );
};

export default OwnedPage;
