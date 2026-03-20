import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React,{useState} from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
//   } from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light')//Wheter dark mode is enabled or not
  const [alert,setAlert]=useState(null);

const showAlert =(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500);
}  
 const toggleMode =()=>{
  if(mode ==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert("Dark mode has been enabled","success");
  }else{
    setMode ('light');
    document.body.style.backgroundColor="white";
    showAlert(" light mode has been enabled","success");
  }

  }
  return (
    <>
   {/* <Router> */}
    <Navbar title="Textutils"  mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert} />
 <div className="container my-3"> 
  {/* <Routes>  */}
 {/* <Route path="/about" element={<About/>}></Route>  */}

<TextForm showAlert={showAlert} heading="Try TextUtils-Word counter,Character Counter,Remove Extra spaces" mode={mode}/></div>

 </>
      );
  }

export default App;

    