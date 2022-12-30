
import Navbar from './components/Navbar';
// import Weather from './components/Weather';
import WeatherNew from './components/WeatherNew';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState("light");
 

  const toggleMode = () => {

    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#10102a';
      document.body.style.color = 'white';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

  }

  return (
    <>
      <Navbar
        mode={mode}
        toggleMode={toggleMode} />

      <WeatherNew
        mode={mode}
      />
      {/* <Hourly /> */}
    </>
  );
}

export default App;
