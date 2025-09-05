import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupWrapper from './components/SignupWrapper';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignupWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;