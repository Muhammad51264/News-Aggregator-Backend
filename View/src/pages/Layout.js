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

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/sports" Component={Sports} />
        <Route path="/Details/:id" Component={Details} />
        <Route path="/signIn" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/:type" Component={Category} />
        <Route path="/LiveBroadCast" Component={LiveBroadCast} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
