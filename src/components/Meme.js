import DataMemes from '../Data'

export const Meme = () =>{
  function GetMemeImg (){
    const memeArray = DataMemes.data.memes
    const randomNumber = Math.floor(Math.random()* memeArray.length)
    const generateMeme = memeArray[randomNumber].url
    console.log(generateMeme)    
  }
  return(
    <main>
      <div className="meme--form">
        <input className="meme--input-left" type="text" placeholder="shut up"/>
        <input className="meme--input-right" type="text" placeholder="take my money"/>
        <button onClick={GetMemeImg} className="meme--button"> Get a new meme image 🖼️</button>
      </div>

    </main>
  )
}