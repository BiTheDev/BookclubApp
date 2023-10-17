import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomeDashboard from './Pages/HomeDashboard/homeDashboard';
import Access from './Pages/AccessPage/access';
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});
const defaultTheme = createTheme({
  palette: {
    mode: "light",
  }
});

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomeDashboard />} />
          <Route path="/access" element={<Access />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
