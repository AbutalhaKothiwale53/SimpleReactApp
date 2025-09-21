import React, { useState, useEffect } from 'react';

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
    <div style={{ padding: '2rem' }}>
      <h2>Admin: Add Names</h2>
      <form onSubmit={handleAdd} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
          Add
        </button>
      </form>
      <h3>Current Users</h3>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}><strong>Name:</strong> {user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
