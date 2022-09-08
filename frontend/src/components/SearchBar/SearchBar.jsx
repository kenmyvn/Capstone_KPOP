import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import TextField from "@mui/material/TextField";

const SearchBar = ({ userInput, setUserInput }) => {
  return (
    <TextField
      id="filled-search"
      className="searchbar"
      label="Search For An Album"
      type="search"
      placeholder="Search"
      variant="filled"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
    />
  );
};

export default SearchBar;
