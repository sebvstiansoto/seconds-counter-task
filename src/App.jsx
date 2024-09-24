import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from './SecondsCounter'; 

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const startCounter = () => setIsRunning(true);
  const stopCounter = () => setIsRunning(false);
  const resetCounter = () => {
    setIsRunning(false);
    setSeconds(0);
  };


  return (
    <div style={{
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1>Contador de Segundos</h1>
      <SecondsCounter seconds={seconds} />
      <div>
        <button onClick={startCounter}>Iniciar</button>
        <button onClick={stopCounter}>Detener</button>
        <button onClick={resetCounter}>Reiniciar</button>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App