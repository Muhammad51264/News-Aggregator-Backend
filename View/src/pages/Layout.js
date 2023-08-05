import React, { useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Sports from "./Sports";
import Category from "./Category";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
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
import AgencyNews from "../pages/AgencyNews";
import signUpUser from "../pages/SignUpUser";

const NewsContext = createContext();

export const useNewsContext = () => {
  return useContext(NewsContext);
};

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const Layout = () => {
  const [allNews, setAllNews] = useState([]);

  // useEffect(() => {
  //   const userFromCookies = userType.user;
  //   if (userFromCookies !== undefined) {

  //   }
  // }, [userType.user]);
  return (
    <NewsContext.Provider value={{ allNews, setAllNews }}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" Component={Home} />

            {/* <Route path="/sports" Component={Sports} /> */}
            <Route path="/Details/:id" Component={Details} />
            {/* {userType === "user" && <Route path="/signIn" Component={SignIn} />} */}

            <Route path="/admindashboard" Component={AgencyDashboard} />
            <Route path="/:type" Component={Category} />
            <Route path="/agencies/:id" Component={AgencyNews} />
            <Route path="/live-broadcast" Component={LiveBroadCast} />
            <Route path="/statistics" Component={Statistics} />
            <Route path="/setting" Component={Setting} />
            <Route path="/account" Component={Account} />
            <Route path="/agencies" Component={Agencies} />
          </Route>

          <Route path="/signUpUser" Component={signUpUser} />
          <Route path="/SignIn" Component={SignIn} />
          <Route path="/signUpAgency" Component={SignUpAgency} />
          <Route path="/signInAgency" Component={SignInAgency} />

          <Route
            path="/UserTypeSelection"
            Component={UserTypeSelectionSignUp}
          />
          <Route
            path="/UserTypeSelectionSignIn"
            Component={UserTypeSelectionSignIn}
          />
        </Routes>
      </BrowserRouter>
    </NewsContext.Provider>
  );
};

export default Layout;
