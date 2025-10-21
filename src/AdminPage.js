import React, { useState, useEffect } from 'react';
import UserList from './UserList';

function AdminPage() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(saved);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const updated = [...users, { name }];
    setUsers(updated);
    localStorage.setItem('users', JSON.stringify(updated));
    setName('');
  };

  return (
    <div className="container" style={{ padding: '1.5rem' }}>
      <h2 className="text-light">Admin: Add Names</h2>
      <form onSubmit={handleAdd} className="row g-3 align-items-center mb-4">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>

      <h3 className="text-light">Current Users</h3>
      <UserList />
    </div>
  );
}

export default AdminPage;
