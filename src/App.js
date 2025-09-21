import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './AdminPage';
import UserPage from './UserPage';

function App() {
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#181818';
    document.body.style.color = '#f1f1f1';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100vh';
  }, []);
  const darkStyle = {
    backgroundColor: '#181818',
    color: '#f1f1f1',
    minHeight: '100vh',
    height: '100vh',
    fontFamily: 'Segoe UI, Arial, sans-serif',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    boxSizing: 'border-box'
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
