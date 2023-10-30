import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import React,{useState} from 'react'
import Alert from './components/Alert';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Router,
//   Routes,
// } from "react-router-dom";
import AboutUs from './components/AboutUs';

function App() {
  const [mode,setMode]=useState("light")
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({msg:message,type:type})

    setTimeout(() => {
      setAlert(null)
    }, 500);
  }
  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light")
      showAlert("Light mode enabled","success")
      document.body.style.backgroundColor='white';
    }else{
      setMode("dark")
      showAlert("Dark mode enabled","success")
      document.body.style.backgroundColor='grey';
    }
  }
  return (
    <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <AboutUs/>
      {/* <div className="container">
        <Content heading="Enter Text below" mode={mode} showAlert={showAlert}/>
      </div> */}
    </div>
  );
}

export default App;
