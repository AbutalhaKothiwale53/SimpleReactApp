import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './AdminPage';
import UserPage from './UserPage';
import FormPage from './FormPage';
import './App.css';

function App() {
  const [routesKey, setRoutesKey] = React.useState(0);

  React.useEffect(() => {
    const onUsersChanged = () => setRoutesKey((k) => k + 1);
    window.addEventListener('usersChanged', onUsersChanged);
    return () => window.removeEventListener('usersChanged', onUsersChanged);
  }, []);

  return (
    <div className="app-root">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark position-relative" style={{ backgroundColor: '#195700' }}>
          <div className="container-fluid">
            <a className="navbar-brand navbar-centered-brand" href="#/admin">Simple React App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <strong><a className="nav-link" href="#/admin">Admin</a></strong>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#/form">Form</a>
                </li> */}
                <li className="nav-item">
                  <strong><a className="nav-link" href="#/user">User</a></strong>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid app-content">
          <Routes key={routesKey}>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
