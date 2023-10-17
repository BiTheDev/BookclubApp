import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomeDashboard from './Pages/HomeDashboard/homeDashboard';
import Access from './Pages/AccessPage/access';
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/access" element={<Access />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
