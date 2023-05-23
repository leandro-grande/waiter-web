'use client'

import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "@/styles/global";
import { ThemeProvider } from "styled-components";

import Home from "./home/page";
import theme from "@/styles/theme";
import { ToastContainer } from "react-toastify";



export default async function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
      <ToastContainer position="bottom-center" />
    </ThemeProvider>

  )
}
