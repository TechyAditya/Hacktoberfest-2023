import Axios from 'axios';
import { useState} from 'react';

export default function Excuse() {
     const [excuse, setExcuse] = useState("")
     const fetchExcuse = (category) => {
          Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
               setExcuse(res.data[0].excuse)
          })
     }
     return (
          <div>
               <p>Click to generate excuse accordingly</p>
               <button onClick={() => { fetchExcuse("party") }}>Party</button>
               <button onClick={() => { fetchExcuse("family") }}>Family</button>
               <button onClick={() => { fetchExcuse("office") }}>Office</button>
               <p>{excuse}</p>
          </div>
     )
}
