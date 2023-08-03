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
import SignUpUser from "./SignUpUser";
import NewDetails from "./NewDetails";
import "../assets/index.css";
import "../assets/index.css";
import LiveBroadCast from "./LiveBroadCast";
import AgencyDashboard from "../pages/AgencyDashboard";
import Statistics from "./Statistics";
import Setting from "../pages/Setting";
import Account from "../pages/AgencyAccount";
import Agencies from "../pages/Agencies";
import SignInAgency from "../pages/SignInAgency";
import UserTypeSelectionSignUp from "../pages/UserTypeSelectionSignUp";
import SignUpAgency from "../pages/SignUpAgency";
import UserTypeSelectionSignIn from "../pages/UserTypeSelectionSignIn";
import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export const useNewsContext = () => {
  return useContext(NewsContext);
};
const Layout = () => {
  const [allNews, setAllNews] = useState([]);
  const userType = "User";
  return (
    <NewsContext.Provider value={{ allNews, setAllNews }}>
      <BrowserRouter>
        <Header userType={userType} />
        <Routes>
          {userType === "User" && <Route path="/" Component={Home} />}
          {userType === "Agency" && (
            <Route path="/" Component={AgencyDashboard} />
          )}
          <Route path="/sports" Component={Sports} />
          <Route path="/Details/:id" Component={Details} />
          {/* {userType === "user" && <Route path="/signIn" Component={SignIn} />} */}
          {userType === "Agency" && (
            <Route path="/signInAgency" Component={SignIn} />
          )}
          <Route path="/SignUpUser" Component={SignUpUser} />
          <Route path="/SignIn" Component={SignIn} />
          <Route path="/signUpAgency" Component={SignUpAgency} />
          <Route
            path="/UserTypeSelection"
            Component={UserTypeSelectionSignUp}
          />
          <Route
            path="/UserTypeSelectionSignIn"
            Component={UserTypeSelectionSignIn}
          />

          <Route path="/:type" Component={Category} />
          <Route path="/live-broadcast" Component={LiveBroadCast} />
          <Route path="/statistics" Component={Statistics} />
          <Route path="/setting" Component={Setting} />
          <Route path="/account" Component={Account} />
          <Route path="/agencies" Component={Agencies} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NewsContext.Provider>
  );
};

export default Layout;
