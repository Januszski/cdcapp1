"use client";

import MainPage from "@/components/MainPage";
import SignInBox from "@/components/SignInBox";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#059669",
    },
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </>
  );
}
