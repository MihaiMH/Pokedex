import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  const linkStyle = {
    marginRight: "1rem",
    fontSize: "1.5rem",
    color: "white",
  };

  return (
    <div>
      <div className="nav">
        <nav className="nav-details">
          <Link to="/" style={linkStyle}>
            PokeDex
          </Link>
          <Link to="/about" style={linkStyle}>
            About the page
          </Link>
        </nav>
      </div>
      <div className="about">
        <h1>What is this?</h1>
        <br></br>
        <p>
          This web page has been created by Mihai Mihaila (331432) with inspiration from other websites and his mates while having fun
        </p>


        <p>
          The data is pulled from this API: <a href="https://pokeapi.co/">https://pokeapi.co/</a>
        </p>

        <p>
          THE OWNER OF THE WEBSITE DOES NOT OWN COPYRIGHTS ON THE PRESENTED IMAGES AND INFORMATION ON THE HOME PAGE. THIS IS JUST AN ASSIGNMENT.
        </p>

      </div>
    </div>
  );
}
