import React, { useState } from "react";
import "./styles.css";

var musicLibrary = {
  Chill: [
    { name: "Enemies", Artist: "Lauv" },
    { name: "Aaftaab", Artist: "The Local Train" }
  ],
  Romantic: [
    { name: "The Night We Met", Artist: "Lord Huron" },
    { name: "Darasal", Artist: "Atif Aslam" }
  ],
  Relax: [
    { name: "Kun Faya Kun", Artist: "Javed Ali, Mohit Chauhan" },
    { name: "Tajdar-E-Haram", Artist: "Atif Aslam" }
  ]
};

export default function App() {
  const [music, setMusic] = useState("");

  return (
    <div className="App">
      <h1> Feel the Music 🎵 </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite songs. select genre to get started
      </p>
    </div>
  );
}
