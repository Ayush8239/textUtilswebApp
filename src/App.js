import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForms from './components/TextForms'
import Alert from './components/Alert';
import Footer from './components/Footer';
// import ReverseText from './components/ReverseText';
// import ReverseText from './components/ReverseText';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTxtColor('white');
      showAlert(" Dark Mode has been enabled", 'SUCCESS ');
      document.title = "TextUtils | Dark Mode";
    }
    else {
      setMode('light');
      setTxtColor('dark-emphasis');
      showAlert(" Light Mode has been enabled", 'SUCCESS ');
      document.title = "TextUtils | Light Mode";
    }
  }
  const [txtcolor, setTxtColor] = useState('white');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      msg: message
    })
  }
  setTimeout(() => {
    setAlert(false);
  }, 3000);


  return (
    // <Router>
      <div className={`bg-${mode}`}>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About Us" />
        <Alert alert={alert} />
        <div className="container py-3" >
          {/* <Routes> */}
            {/* <Route path="/about" element={ */}
             { /*<ReverseText />*/}
              {/*// }/>
            {/* <Route path="/" element = { */}
              <TextForms showAlert={showAlert} heading="Enter the text below to analyze" txtcolor={txtcolor} setTxtColor={setTxtColor} mode={mode} toggleMode={toggleMode} />
            
          {/* </Routes> */}
        </div>
        <div>
          <Footer mode={mode} txtcolor={txtcolor} />
        </div>
      </div>
    // {/* </Router> */}
  );
}

export default App;
