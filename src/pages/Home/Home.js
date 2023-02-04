import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="tabsContainer">
        <Tabs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
