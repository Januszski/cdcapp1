"use client";
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SongInput = ({ setText }) => {
  const [inputValue, setInputValue] = useState("");
  console.log("TEXT INPUT", inputValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log("TRIGGERED", inputValue);
    setText(inputValue);
  };

  return (
    <>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            Update Stage Text
          </InputLabel>
          <Input
            onChange={handleInputChange}
            value={inputValue}
            id="input-with-icon-adornment"
            //inputProps={{ maxLength: 30 }}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Button variant="text" onClick={handleClick}>
        Send
      </Button>
    </>
  );
};

export default SongInput;
