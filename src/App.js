import logo from './assets/logo.png'
import './App.css';
import Homepage from './pages/Homepage';
import { useState, useEffect } from 'react';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Set a timer to hide the animation after 3 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (      
    <div className="App">
      {showAnimation && (
        <div className="logo-animation">
          <img src={logo} alt="logo" />
        </div>
      )}
      {!showAnimation && (
        <div className="content">
          <Homepage />
        </div>
      )}
  </div>
    
  );
}

export default App;
