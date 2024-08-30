import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="card">
        <h1 className="headers">MODERN LIVING FOR EVERYONE</h1>
        <p>
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Vilnius and Kaunas for more than 15
          years.
        </p>
        <Link to="/home-houses">
          <button className="btn-active">Select your apartments</button>
        </Link>
      </div>
      <img src="home.jpg" className="apartment" alt="apartment" />
    </div>
  );
};

export default Home;
