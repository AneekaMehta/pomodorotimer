// App.js
import React from 'react';
import Timer from './Timer';
import Todo from './Todo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Timer />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  </Router>
  );
}

export default App;


