import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './AdminPage';
import UserPage from './UserPage';

function App() {
  const darkStyle = {
    backgroundColor: '#181818',
    color: '#f1f1f1',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, Arial, sans-serif'
  };
  return (
    <div style={darkStyle}>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
