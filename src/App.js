import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);
//   const [darkmodecolor, setDarkModeColor] = useState('');

//   const showAlert = (msg, type) => {
//     setAlert({
//       msg: msg,
//       type: type
//     })

//     setTimeout(() => {
//       setAlert(null);
//     }, 3000);
//   }

//   const toggleMode = () =>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = (darkmodecolor ==='' || darkmodecolor === 'white')?'#252350':darkmodecolor ;
//       setDarkModeColor((darkmodecolor ==='' || darkmodecolor === 'white')?'#252350':darkmodecolor); 
        
//       showAlert("Dark Mode enabled!","success");
//     }
//     else{
//       setMode('light');

//       document.body.style.backgroundColor = "white";
//       showAlert("Dark Mode disabled!","success");
//       // setDarkModeColor('white')
      
//     }
//   }

//   const toggleModeColor=(word)=>{
//     setDarkModeColor(word);
//   }

//   return (
//     <>
//     <Router>
//       <Navbar title = "TextUtils" aboutText ="About" mode = {mode} toggleMode={toggleMode} toggleModeColor={toggleModeColor} />
//       <Alert alert = {alert}/>
      
//       <div className="container my-3">
//       <Routes>

//         <Route exact path="/" element={<Textform heading="Enter the text to analyze" mode = {mode} showAlert={showAlert} />} />

//         <Route exact path = "/about" element={<About />} />

//       </Routes> 
//       </div> 
//     </Router> 
//     </>
//   );
// }




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [darkmodecolor, setDarkModeColor] = useState('');

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = (darkmodecolor ==='' || darkmodecolor === 'white')?'#252350':darkmodecolor ;
      setDarkModeColor((darkmodecolor ==='' || darkmodecolor === 'white')?'#252350':darkmodecolor); 
        
      showAlert("Dark Mode enabled!","success");
    }
    else{
      setMode('light');

      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode disabled!","success");
      // setDarkModeColor('white')
      
    }
  }

  const toggleModeColor=(word)=>{
    setDarkModeColor(word);
  }

  return (
    <>
      <Navbar title = "TextUtils" aboutText ="About" mode = {mode} toggleMode={toggleMode} toggleModeColor={toggleModeColor} />
      <Alert alert = {alert}/>
      
      <div className="container my-3">

      <Textform heading="Enter the text to analyze" mode = {mode} showAlert={showAlert} />

      </div> 
    </>
  );
}


export default App;
