import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const darkMode = {
    bg: '#132d46',
    text: 'white',
    textBox: '#e8dddc',
    col: 'secondary'
  }

  const lightMode = {
    bg: 'white',
    text: 'black',
    textBox: '#f8f9fa',
    col: 'success'
  }

  const greenMode = {
    bg: '#2bba94',
    text: '#222',
    textBox: '#d6b9b9',
    col: 'danger'
  }

  const blueMode = {
    bg: "rgb(63 83 140)",
    text: 'rgb(245 197 197) ',
    textBox: '#ffffff',
    col: 'warning'
  }

  const modes = {
    'light': lightMode,
    'dark': darkMode,
    'blue': blueMode,
    'green': greenMode
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1400);
  }

  const changeMode = (mode) => {
    setMode(mode);
    document.getElementById("nav-title").style.color = modes[mode].text;
    document.getElementById("nav-home").style.color = modes[mode].text;
    document.getElementById("nav-about").style.color = modes[mode].text;
    // document.getElementsByClassName("nav-text-col").style.color = modes[mode].text;
    document.body.style.backgroundColor = modes[mode].bg;
    document.body.style.color = modes[mode].text;
    let textBox = document.getElementById("myBox");
    textBox.style.backgroundColor = modes[mode].textBox;
    showAlert(`${capitalize(mode)} Mode has been enabled`, "success");
  }


return (
  <>
    <Router>
    <Navbar title="Text-Utils" aboutText="About Text Utils" changeMode={changeMode} mode={mode} modes={{ modes }} />
    <Alert alert={alert} />
    <div className="container my-3">
      <Switch>
        <Route exact path="/">
        <TextForm heading="Enter the text to analyze below" col={modes[mode].col} mode={mode} showAlert={showAlert} column={130} />
        </Route>
      </Switch>
    </div>
    </Router>
  </>
);
}

export default App;
