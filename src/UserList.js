import React, { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const load = () => setUsers(JSON.parse(localStorage.getItem('users') || '[]'));
    load();
    window.addEventListener('usersChanged', load);
    return () => window.removeEventListener('usersChanged', load);
  }, []);

  const handleDelete = (idx) => {
    const updated = users.filter((_, i) => i !== idx);
    setUsers(updated);
    localStorage.setItem('users', JSON.stringify(updated));
    // dispatch usersChanged so other components update
    window.dispatchEvent(new CustomEvent('usersChanged'));
  };

  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr><td colSpan="2">No users found.</td></tr>
          ) : (
            users.map((user, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="me-2">{user.name}</span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-light"
                      aria-label={`delete-${idx}`}
                      onClick={() => handleDelete(idx)}
                    >
                      <span aria-hidden="true" style={{ fontSize: '1rem', lineHeight: 1 }}>&times;</span>
                      <span className="visually-hidden">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
