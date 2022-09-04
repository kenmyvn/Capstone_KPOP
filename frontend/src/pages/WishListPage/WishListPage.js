import React from "react";
import { Link } from "react-router-dom";
import "./WishListPage.css";

const WishListPage = () => {
  return (
    <div className="container">
      <h1 className="membername">wish list page</h1>
      <div className="buttonholder">
        <div className="profilebutton">
          <Link to={`/wishmember/sumin`}>
            <button>Sumin</button>
          </Link>
        </div>
        <div className="profilebutton">
          <Link to={`/wishmember/sieun`}>
            <button>Sieun</button>
          </Link>
        </div>
      </div>
      <div className="profilebutton">
        <Link to={`/wishmember/isa`}>
          <button>Isa</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/wishmember/seeun`}>
          <button>Seeun</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/wishmember/yoon`}>
          <button>Yoon</button>
        </Link>
      </div>
      <div className="profilebutton">
        <Link to={`/wishmember/j`}>
          <button>J</button>
        </Link>
      </div>
    </div>
  );
};

export default WishListPage;
