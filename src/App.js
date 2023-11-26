import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MyPlace from './components/MyPlace';
import MyInfo from './components/MyInfo';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/MyInfo">About Me</Link>
            </li>
            <li>
              <Link to="/MyPlace">My Town</Link>
            </li>
            <li>
              <h1 >
              ...This is Dev...
              </h1>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/MyInfo" element={<MyInfo />} />
        <Route path="/MyPlace" element={<MyPlace />} />
      </Routes>
    </Router>
  );
}

export default App;
