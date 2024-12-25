// App.js
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Index from './Index/index';
import Left from './Left';
import Center from './Center';
import Right from './Right';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/index" />}></Route>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/left" element={<Left />}></Route>
        <Route path="/center" element={<Center />}></Route>
        <Route path="/right" element={<Right />}></Route>
      </Routes>
    </Router>
  );
}

export default App;