import React, { useState } from 'react'
import DataMemes from '../Data'

export const Meme = () =>{
  const [memeImage, setMemeImage] = React.useState("")
  function GetMemeImg (){
    const memeArray = DataMemes.data.memes
    const randomNumber = Math.floor(Math.random()* memeArray.length)
    const generateMeme = memeArray[randomNumber].url
    
    setMemeImage(generateMeme)
  }
  return(
    <main>
      <div className="meme--form">
        <input className="meme--input-left" type="text" placeholder="shut up"/>
        <input className="meme--input-right" type="text" placeholder="take my money"/>
        <button onClick={GetMemeImg} className="meme--button"> Get a new meme image 🖼️</button>
      </div>
      <img src={memeImage} className="meme--image"/>
    </main>
  )
}