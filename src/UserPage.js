import React, { useEffect, useState } from 'react';

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(saved);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User: View Names</h2>
      <ul>
        {users.length === 0 ? (
          <li>No users found.</li>
        ) : (
          users.map((user, idx) => (
            <li key={idx}><strong>Name:</strong> {user.name}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default UserPage;
