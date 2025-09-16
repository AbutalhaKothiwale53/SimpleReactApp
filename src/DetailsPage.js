import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || '';

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default DetailsPage;
