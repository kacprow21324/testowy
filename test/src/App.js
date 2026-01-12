import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import StronaTest1 from './StronaTest1';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/test1">Idź do Test 1</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test1" element={<StronaTest1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;