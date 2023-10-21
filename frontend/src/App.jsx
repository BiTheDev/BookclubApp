import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomeDashboard from "./Pages/HomeDashboard/homeDashboard";
import Access from "./Pages/AccessPage/access";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Profile from "./Pages/Profile/Profile";
import Setting from "./Pages/Setting/Setting";
import AllBooks from "./Pages/AllBooks/AllBooks";
import { AuthProvider } from "./authContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const defaultTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomeDashboard/>} />
            <Route path="/access" element={<Access />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/all-books" element={<AllBooks />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
