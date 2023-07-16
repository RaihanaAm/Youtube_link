import React, { useState } from 'react'
import youtubeVd from "./images/yt.png";

export function App() {

  const [value, setValue] = useState("");
  const [stock, setStock] = useState("")
  const [active, setActive] = useState(false);
  const [stocs,setStocs]=useState("")
  const inpu = (e) => {
    setValue(e.target.value);
  }
  const activate = () => {
    setActive(true);
    setStock(value)
    setValue("");
  }
  
  const test=()=>{
    
      if(value.includes("youtu")){
        if (value.length===28) {
          let vd1= value;
          let fin=vd1.slice(17);
          let debut1 = "https://www.youtube.com/embed/";
          setStock(debut1 + fin)
        }else{
          let vd = value;
          let fin = vd.slice(32);
          let embed = "embed/"
          let debut = vd.slice(0, 24)
          let lienf = debut + embed + fin
          setStock(lienf)
        }
      }

  }


  /**
   *else{
            // https://www.youtube.com/watch?v=dHqmN-5jVKY //** len original */
            // https://youtu.be/4BItolSqIyU
   //         let vd = input.value;
            // let fin = vd.slice(32);
            // let embed = "embed/"
            // let debut = vd.slice(0, 24)
            // let lienf = debut + embed + fin
            // video.setAttribute("src", lienf)
        // }
        
    
  //  */
  return (
    <div className='flex global'>
      <img className='img d-block '  src={youtubeVd} alt='kkj'/>
      <div>
      <input type="text" onChange={inpu} value={value} />
      <button className='ms-2 rounded' onClick={ ()=>{activate() ;test()}
      }>click</button>
      </div>

      <iframe className='mt-5 d-block' width="560" height="315"
        src={stock.includes("https://") && active ? stock: ""}
        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture; web-share">
      </iframe>

    </div>

  )
}

