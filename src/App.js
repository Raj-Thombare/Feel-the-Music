import React, { useState } from "react";
import "./styles.css";

const musicDB = {
  Chill: [
    { name: "Enemies", Artist: "Lauv" },
    { name: "Aaftaab", Artist: "The Local Train" }
  ],
  Romantic: [
    { name: "The Night We Met", Artist: "Lord Huron" },
    { name: "Darasal", Artist: "Atif Aslam" }
  ],
  Relaxing: [
    { name: "Kun Faya Kun", Artist: "Javed Ali, Mohit Chauhan" },
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
      <hr />
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
