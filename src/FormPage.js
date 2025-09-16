import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/details', { state: { name } });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;
