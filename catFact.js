// A react component to genreate random cat fact
import Axios from 'axios';
import { useState, useEffect } from 'react';
export default function ApiCalls() {

     const fectCatFact = () => {
          Axios.get("https://catfact.ninja/fact").then((res) => { 
               setCatFact(res.data.fact)
          })
     }
     const [catFact, setCatFact] = useState("")
     useEffect(() => {
          fectCatFact
     }, [])
     return (
          <div className='catfact'>
               <button onClick={() => { fectCatFact() }}>New Catfact</button>
               <p>{catFact}</p>
          </div>
     )
}
