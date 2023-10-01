//A react component to predict age according to name
import Axios from 'axios';
import { useState } from 'react';

export default function PredictAge() {
     const [name, setName] = useState("")
     const [age, setAge] = useState(0)
     const getName = (event) => {
          setName(event.target.value)
     }
     const fetchAge = () => {
          Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
               setAge(res.data.age)
          })
     }
     return (
          <div>
               <input placeholder="Enter your name" onChange={getName} />
               <button onClick={fetchAge}>Predict Age</button>
               <h4>Your age :{age} </h4>
          </div>
     )
}
