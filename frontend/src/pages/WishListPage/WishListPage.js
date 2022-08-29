import React from "react";
import { Link } from "react-router-dom";

const WishListPage = () => {
  return (
    <div className="container">
      <h1>wish list page</h1>
      <div className="buttonholder">
        <div className="profilebutton">
          <Link to={`/wishmember`}>
            <button>Sumin</button>
          </Link>
        </div>
        <div className="profilebutton">
          <Link to={`/wishmember`}>
            <button>Sieun</button>
          </Link>
        </div>
      </div>
      <div className="profilebutton">
        <Link to={`/wishmember`}>
          <button>Isa</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/wishmember`}>
          <button>Seeun</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/wishmember`}>
          <button>Yoon</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/wishmember`}>
          <button>J</button>
        </Link>
      </div>
    </div>
  );
};

export default WishListPage;
