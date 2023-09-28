import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const handleStop = () => {
    setRunning(false);
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      {running ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={() => setRunning(true)}>Start</button>
      )}
    </div>
  );
};

export default Timer;

