import React, { useState, useEffect } from 'react';
//import Box from '@mui/material/Box';
import Settings from './Settings';
import Play from './Play';
import Next from './Next';
import alarmSound from './Idol.ogg';
import './Timer.css';
//import { ThemeProvider } from '@mui/material/styles';
//import { theme } from './theme'; 
import Todo from './Todo';
import { Link } from 'react-router-dom';

// Import constants from const.js
import { STATES_IDS, STATE_INFO, STATE_SECONDS, STATE_FLOW } from './const';

const Timer = () => {
  const [startTimer, setStartTimer] = useState(false);
  const [time, setNewTime] = useState(STATE_SECONDS[STATE_FLOW[0]]);
  const [currentFlowIndex, setCurrentFlowIndex] = useState(0);
  const [state, setState] = useState(STATE_FLOW[currentFlowIndex]);

  const handleSetState = () => {
    setCurrentFlowIndex((prevIndex) => (prevIndex + 1) % STATE_FLOW.length);
    setState(STATE_FLOW[currentFlowIndex]);
    setNewTime(STATE_SECONDS[STATE_FLOW[currentFlowIndex]]);
  };

  const handleStartTimer = () => {
    setStartTimer((prevStartTimer) => !prevStartTimer);
  };

  useEffect(() => {
    if (startTimer) {
      const interval = setInterval(() => {
        if (time > 0) {
          setNewTime((prevTime) => prevTime - 1);
        } else {
          setStartTimer(false);
          playAlarmSound();
          handleSetState();
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, startTimer, handleSetState]);

  const playAlarmSound = () => {
    const audio = new Audio(alarmSound);
    audio.play();

    setTimeout(() => {
        audio.pause();
      }, 5000);

  };

  return (
    //<ThemeProvider theme={theme}>
    <div className = "app">
        <div className="image2">
    <iframe src="https://giphy.com/embed/BBXspvWaUmWfRoBsEF" width="180" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
    <div className = "background">
        <div className = "pomodoro">
        <code>Pomodoro Timer</code>
        </div>
        <div className = "state">
      <div className = "state2">
        <code>{STATE_INFO[STATES_IDS[state]]}</code>
        </div>
      </div>
      <div className = "timer">
      <div>
        <code>
        {formatTime(time)}
        </code>
        </div>
      </div>
      <div className = "display-box">
      <Link to="/todo">
        <Settings></Settings>
      </Link>
        <Play variant="play" onClick={handleStartTimer}></Play>
        <Next variant="play" onClick={handleSetState}></Next>
      </div>
    </div>
    <div className="image">
    <iframe src="https://giphy.com/embed/BBXspvWaUmWfRoBsEF" width="180" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
    </div>
    //</ThemeProvider>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

export default Timer;
