import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import "./SearchBar.css";
import TextField from "@mui/material/TextField";

const SearchBar = ({ userInput, setUserInput }) => {
  return (
    <TextField
      id="filled-search"
      className="album-search -form-control form-control-sm ml-3 w-75"
      label="Search For An Album"
      type="search"
      placeholder="Search"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
    />
  );
};

export default SearchBar;
