import React,{useState} from "react";

export default function Content(props){
    
    const [text,setText]=useState(" ")
    const [summary,setSummary]=useState(" ")
    function handelCapital(){
        setSummary(text.toUpperCase())
        props.showAlert("Text converted to Capital","success")
    }
    function handelChange(event){
        console.log("change")
        setText(event.target.value)
    }
    function handelLower(){
        setSummary(text.toLowerCase())
        props.showAlert("Text converted to LowerCase","success")

    }
    function handelTitle(){
        let x=text
        let y=x.toLowerCase().split(' ').map((word)=>{
            return(word.charAt(0).toUpperCase()+word.slice(1))
        }).join(' ')
        setSummary(y)
        props.showAlert("Text converted to TitleCase","success")

    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speak is about to start","success")

      }
let [count, setCount] = useState(0);
let [count1, setCount1] = useState(0);
let countChar = 0,countCons = 0;

// Function to count Vowels:

const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount (countChar);
      }

    }
        // console.log("No. of Vowels are: " + countChar);
        props.showAlert("No of Vowels updated","success")

  };
 // Function to count Consonants:
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
        countCons++;
        setCount1(countCons);}}
        props.showAlert("Number of Consonants Updated","success")

    }
    return(
        <div className="container" style={{ color:props.mode==='dark'?'white':'black'}}>
            <h1 classNameName="mt-7 ">{props.heading}</h1>
            <div className="form-floating mb-3 " >
            <textarea className="form-control" placeholder="Enter Something!!" id="floatingTextarea2Disabled" onChange={handelChange} value={text}style={{ height:'150px',backgroundColor: props.mode==='dark'? 'grey':"white",color: props.mode==='dark'?'white':"black"}}></textarea>
            </div>
            <button className="btn btn-primary" type="submit" onClick={handelCapital}>Capital</button>
            <button className="btn btn-primary ms-2 my-1" type="submit" onClick={handelLower}>Small</button>
            <button className="btn btn-primary ms-2 my-1" type="submit" onClick={handelTitle}>Title</button>
            <button className="btn btn-primary ms-2 my-1" type="submit" onClick={speak}>Speak</button>
            <button className="btn btn-primary ms-2 my-1" type="submit" onClick={handleVoClick}>Count Vowel</button>
            <button className="btn btn-primary ms-2 my-1" type="submit" onClick={handleCoClick}>Consonent</button>
            

            <h1 className="mt-5 ms-5">Summary</h1>
            <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" value={summary} id="floatingTextarea2" style={{height:'150px',backgroundColor: props.mode==='dark'? 'grey':"white",color: props.mode==='dark'?'white':"black"}}></textarea>
            </div>
            <p className="my-5">{text.split(" ").filter((element)=>{return(element.length!==0)}).length} Words, {text.length} characters {text.split(" ").length*0.008} minutes read</p>
            <p>{count} No. of Vowels</p>    
<           p>{count1} No. of Consonants</p>
        </div>

    )
}