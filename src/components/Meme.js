import React from "react";
import "../style.css";
import {memesData} from "../memesData.js"

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1ur9b0.jpg")

  function getMemeImage(){
    
    console.log("clicked");

    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    
    // console.log(randomNumber);

    const url = memesArray[randomNumber].url;
    // console.log(url);

    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url,
      }
    })
  }


  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input"/>
        <input type="text" placeholder="Bottom text" className="form--input"/>
        <button className="form--button" onClick={getMemeImage}> Get a new meme image </button>
      </div>

      <img src={meme.randomImage} className="meme--image"/>
    </main>
  );
}
