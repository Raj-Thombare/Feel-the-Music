import React, { useState } from "react";
import "./styles.css";

const musicDB = {
  Chill: [
    { name: "Enemies", Artist: "Lauv" },
    { name: "Pakeezah", Artist: "Gulraj Singh" },
    { name: "Humraah", Artist: "Sachet Tandon" },
    { name: "I Like Me Better", Artist: "Lauv" },
    { name: "Aaftaab", Artist: "The Local Train" }
  ],
  Romantic: [
    { name: "The Night We Met", Artist: "Lord Huron" },
    { name: "Only You", Artist: "Selena Gomez" },
    { name: "Tum Mile", Artist: "Neeraj Shridhar" },
    { name: "Teri Zhuki Nazar", Artist: "Shafqat Amanat Ali" },
    { name: "Without You", Artist: "The Kid LAROI" }
  ],

  Relaxing: [
    { name: "Kun Faya Kun", Artist: "Javed Ali" },
    { name: "Bewajah", Artist: "Nabeel Shaukat Ali" },
    { name: "Ek Din Ek Jaan", Artist: "Shivam Pathak" },
    { name: "Namo Namo", Artist: "Amit Trivedi" },
    { name: "Tajdar-E-Haram", Artist: "Atif Aslam" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Romantic");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}> Feel the Music 🎵 </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite songs. select genre to get started
      </p>
      <div>
        {Object.keys(musicDB).map((genre) => {
          return (
            <button onClick={() => genreClickHandler(genre)}> {genre} </button>
          );
        })}
      </div>
      <div className="linebreak"></div>
      <h3 style={{ color: "blueviolet" }}>{selectedGenre} </h3>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((song) => (
            <li key={song.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> by {song.Artist} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
