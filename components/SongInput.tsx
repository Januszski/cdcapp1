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
import Vals from "../util/vals";
import Double from "../util/double";
import Undouble from "../util/undouble";
import de from "../util/de";

import { XCaesar } from "xcaesar";

/* @ts-ignore */
const SongInput = ({ setText, buttonName, desc, optionalButton, onPress }) => {
  const [inputValue, setInputValue] = useState("");
  /* @ts-ignore */
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const specialInputs = Vals;
  let a = 0;
  const handleClick = () => {
    for (const i of specialInputs) {
      a++;
      for (const v of i.r) {
        if (inputValue.toUpperCase() === v) {
          setText(i.q);
          return;
        }
      }
    }
    setText(inputValue);
  };

  return (
    <>
      <div>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">{desc}</InputLabel>
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
        <div className="flex justify-self-end">
          <Button variant="text" onClick={handleClick}>
            {buttonName}
          </Button>
        </div>
      </div>
    </>
  );
};

export default SongInput;
