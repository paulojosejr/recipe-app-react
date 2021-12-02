import React from "react";
import "./Home.css";
import background from "./backgroundImage.jpeg";

export default function Home() {
  return (
    <header
      className="entrance"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="banner">
        <h1 className="banner-title">WELCOME</h1>
        <h2>Here you can search any food recipe.</h2>
      </div>
    </header>
  );
}
