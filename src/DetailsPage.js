import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DetailsPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(saved);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User List</h2>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}><strong>Name:</strong> {user.name}</li>
        ))}
      </ul>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default DetailsPage;
