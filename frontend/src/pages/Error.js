import React from 'react';
import "./Error.css";
import { Link } from 'react-router-dom'; 

const Error = () => {
  return (
    <div className="error">
      <div className="klaida">
        <img src="404.png" alt="404" />
      </div>
      <div className="alone">
        <img src="image.png" alt="Error image" />
      </div>
      <p>Atsiprašome, serveris neužkraunamas</p>
      <Link to="/" className="go_home">Grįžti į pradinį puslapį</Link> 
    </div>
  );
};

export default Error;
