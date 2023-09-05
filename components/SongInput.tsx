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
/* @ts-ignore */
const SongInput = ({ setText, buttonName, desc, optionalButton, onPress }) => {
  const [inputValue, setInputValue] = useState("");
  /* @ts-ignore */
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const specialInputs = [
    {
      flag: "cdc{TypeONegative}",
      vals: [
        "IT WAS A GOOD DAY ISE CUBE",
        "ITWASAGOODDAYISECUBE",
        "IT WAS A GOOD DAY BY ISE CUBE",
        "ITWASAGOODDAYBYISECUBE",
        "IT WAS A GOOD DAY - ISE CUBE",
        "IT WAS A GOOD DAY BY ISECUBE",
        "IT WAS A GOOD DAY ISECUBE",
        "IT WAS A GOOD DAY - ISECUBE",
        "IT WAS A GOOD DAY-ISECUBE",
        "IT WAS A GOOD DAY-ISE CUBE",
        "ISE CUBE IT WAS A GOOD DAY",
        "ISE CUBE - IT WAS A GOOD DAY",
        "ISECUBE IT WAS A GOOD DAY",
        "ISECUBE - IT WAS A GOOD DAY",
        "ISECUBE-IT WAS A GOOD DAY",
        "ISE CUBE-IT WAS A GOOD DAY",
      ],
    },
    {
      flag: "cdc{MtnDewwwwwwwwwwwwwwwww}",
      vals: [
        "COLD AS ISE FOREIGNER",
        "COLD AS ISE BY FOREIGNER",
        "COLD AS ISE - FOREIGNER",
        "COLDASISEFOREIGNER",
        "COLDASISEBYFOREIGNER",
        "FOREIGNER - COLD AS ISE",
        "FOREIGNER COLD AS ISE",
        "COLD AS ISE-FOREIGNER",
        "FOREIGNER-COLD AS ISE",
      ],
    },
  ];

  const handleClick = () => {
    for (const i of specialInputs) {
      for (const v of i.vals) {
        console.log("V", v);
        console.log("INPIT", inputValue.toUpperCase);
        if (inputValue.toUpperCase() === v) {
          setText(i.flag);
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
