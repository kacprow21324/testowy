import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import StronaTest2 from './StronaTest2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/test2">Idź do Test 2</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test2" element={<StronaTest2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;