export const Meme = () =>{
  return(
    <main>
      <form className="meme--form">
        <input className="meme--input-left" type="text" placeholder="shut up"/>
        <input className="meme--input-right" type="text" placeholder="take my money"/>
        
          <button className="meme--button"> Get a new meme image 🖼️</button>
        
      </form>
    </main>
  )
}