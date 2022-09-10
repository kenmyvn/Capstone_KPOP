import React from "react";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import DisplayAlbums from "../../components/DisplayAlbums/DisplayAlbums";
import "./HomePage.css";

const HomePage = () => {
  const [albums] = useState([
    {
      id: 0,
      link: "/album/star-to-a-young-culture",
      image: "/ab67616d0000b273bc125f40131dd5869b2ec36c.png",
      alt: "star to a young culture album",
    },
    {
      id: 1,
      link: "/album/staydom",
      image: "/ab67616d0000b273af2fda9fb591d43c355c2ac3.png",
      alt: "staydom album",
    },
    {
      id: 2,
      link: "/album/stereotype",
      image: "/ab67616d0000b2735c1dca4c993850471d5d8f14.png",
      alt: "stereotype album",
    },
    {
      id: 3,
      link: "/album/young-luv",
      image: "/ab67616d0000b2738ea860a3e6904b875629d672.png",
      alt: "young-luv.com album",
    },
    {
      id: 4,
      link: "/album/we-need-love",
      image: "/ab67616d0000b273c76a0146e4c1804f22cab995.png",
      alt: "we need love album",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  return (
    <div className="container">
      <div className="logo">
        <img src="/stayc-60e4a84d14351.png" alt="stayc logo" width="600px" />
      </div>
      <div>
        <SearchBar userInput={userInput} setUserInput={setUserInput} />
        <DisplayAlbums albums={albums} userInput={userInput} />
      </div>
    </div>
  );
};

export default HomePage;
