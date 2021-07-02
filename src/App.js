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
    { name: "Tere Naina", Artist: "Shankar Mahadevan, Shreya Ghoshal" }
  ],

  Rap: [
    { name: "3:59 AM", Artist: "DIVINE" },
    { name: "Angaar", Artist: "IKKA" },
    { name: "Cypher", Artist: "Gully Gang" },
    { name: "Ek Din Pyar", Artist: "MC STAN" },
    { name: "Vibe hai", Artist: "DIVINE" }
  ],

  Dance: [
    { name: "Uff Teri Ada", Artist: "Shanker Mahadevan, Alyssa Mendonsa" },
    { name: "Sunflower", Artist: "Post Malon, Swae Lee" },
    { name: "Bom Diggy Diggy", Artist: "Zack Knight, Jasmin Walia" },
    { name: "Dil Chori", Artist: "Yo Yo Honey Singh" },
    { name: "Build A Bitch", Artist: "Bella Poarch" }
  ],

  Relaxing: [
    { name: "Kun Faya Kun", Artist: "Javed Ali" },
    { name: "Paris in the Rain", Artist: "Lauv" },
    { name: "Ek Din Ek Jaan", Artist: "Shivam Pathak" },
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
