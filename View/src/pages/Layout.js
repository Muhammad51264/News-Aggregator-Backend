import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Sports from "./Sports";
import Category from "./Category";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NewDetails from "./NewDetails";
import "../assets/index.css";
import "../assets/index.css";
import LiveBroadCast from "./LiveBroadCast";
import AgencyDashboard from "../pages/AgencyDashboard";
import Statistics from "./Statistics";
import Setting from "../pages/Setting";
import Account from "../pages/AgencyAccount";
const Layout = () => {
  const userType = "Agency";
  return (
    <BrowserRouter>
      <Header userType={userType} />
      <Routes>
        {userType === "User" && <Route path="/" Component={Home} />}
        {userType === "Agency" && (
          <Route path="/" Component={AgencyDashboard} />
        )}
        <Route path="/sports" Component={Sports} />
        <Route path="/Details/:id" Component={Details} />
        <Route path="/signIn" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/:type" Component={Category} />
        <Route path="/LiveBroadCast" Component={LiveBroadCast} />
        <Route path="/statistics" Component={Statistics} />
        <Route path="/setting" Component={Setting} />
        <Route path="/account" Component={Account} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
