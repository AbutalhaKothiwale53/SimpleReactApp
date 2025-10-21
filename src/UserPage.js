import React from 'react';
import UserList from './UserList';

function UserPage() {
  return (
    <div className="container" style={{ padding: '1.5rem' }}>
      <h2 className="text-light">User: View Names</h2>
      <UserList />
    </div>
  );
}

export default UserPage;
