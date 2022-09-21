import React, { useState } from "react";
import "./styles.css";

const musicDB = {
  Chill: [
    { name: "Circles", Artist: "Post Malone" },
    { name: "OK", Artist: "Wallows" },
    { name: "Beautiful Mistakes", Artist: "Maroon 5" },
    { name: "Love Me Like A Friend", Artist: "Fly By Midnight" },
    { name: "Are You Bored Yet?", Artist: "Wallows" }
  ],

  Romantic: [
    { name: "Adore You", Artist: "Harry Styles" },
    { name: "Tum Se Hi", Artist: "Mohit Chauhan" },
    { name: "Bheegi Si Bhaagi Si", Artist: "Neeraj Shridhar" },
    { name: "Is This Love", Artist: "Mohit Chauhan" },
    { name: "Dildara", Artist: "Shafqat Amanat Ali" }
  ],

  Rap: [
    { name: "No Cap", Artist: "KR$NA" },
    { name: "Without Me", Artist: "Eminem" },
    { name: "Cypher Vol.2", Artist: "Gully Gang" },
    { name: "The Real Slim Shady", Artist: "Eminem" },
    { name: "Vibe hai", Artist: "DIVINE" }
  ],

  Dance: [
    { name: "Tu Mere Agal Bagal Hai", Artist: "Mika Singh, Pritam" },
    { name: "As It Was", Artist: "Harry Styles" },
    { name: "Prem Ki Naiya", Artist: "Neeraj Shridhar" },
    { name: "Selfie Le Le Re", Artist: "Vishal Dadlani" },
    { name: "Tainu Leke", Artist: "Sonu Nigam" }
  ],

  Relaxing: [
    { name: "Kun Faya Kun", Artist: "Javed Ali" },
    { name: "Rait Zara Si", Artist: "Arijit Singh" },
    { name: "Arziyan", Artist: "Javed Ali" },
    { name: "Namo Namo", Artist: "Amit Trivedi" },
    { name: "Tajdar-E-Haram", Artist: "Atif Aslam" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Chill");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> Feel the Music ♫ </h1>
      <p style={{ fontSize: "medium" }}>
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
      <div className="showGenre">{selectedGenre}</div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((song) => (
            <li key={song.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "11px" }}> by {song.Artist} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
