import { useState } from 'react'
// import './App.css'
import axios from 'axios';
import Swal from "sweetalert2";

function App() {
  const [input,setInput]=useState("")
  const [title,setTitle]=useState([])
  const [img,setImage]=useState("")
  // const [loader,setLoader]=useState("")

async function getdata() {
    try{
      const res= await axios.get(`https://openlibrary.org/search.json?q=${input}`)
      console.log(res);
      
     const first10=res.data.docs.slice(0,10);
      setImage(res.data.docs[1].cover_i)
   
      const author=first10.map((auth)=>{
        return auth.author_name?auth.author_name.join(","):"unkown author"
      })
   
      setTitle(author)
      

      const img10=first10.map((img)=>{
          return img.cover_i? `https://covers.openlibrary.org/b/id/${img.cover_i}-L.jpg`:"" 
      })

      setImage(img10)

    } catch(error){
        console.log(error);
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Try the Proper name",
        });
    }
}

  return (
    <>
    <div className="search-box">
    <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
    <button onClick={getdata}>Get</button>
    <h3>Search Book.....</h3>
    </div>
{/* <div className="spinner-border" role="status" style={{display:'none'}}>
  <span className="visually-hidden">Loading...</span>
</div> */}

     <ul className='card-container'>
      {title.map((writ,index)=>{
       return <li key={index}>
        <h5> {writ}</h5> 
        <img src={img[index]} className='card-images' alt='filed to load'/>
        </li>
      })}
     </ul>
       
        </>
  )
}

export default App
