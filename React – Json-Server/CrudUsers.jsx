//  -------------------- Task 1: --------------------------

import React, { useState, useEffect } from 'react';

const CrudUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', username: '', phone: '' });
  const [editUser, setEditUser] = useState(null);

  // Fetch users from the API
  useEffect(() => {
    fetch(`https://67793742482f42b62e90b791.mockapi.io/good/hello`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = () => {
    fetch(`https://67793742482f42b62e90b791.mockapi.io/good/hello`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => setUsers([...users, data]));
  };

  const handleUpdateUser = () => {
    fetch(`https://67793742482f42b62e90b791.mockapi.io/good/hello/${editUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editUser),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedUsers = users.map((user) =>
          user.id === data.id ? data : user
        );
        setUsers(updatedUsers);
        setEditUser(null);
      });
  };

  const handleDeleteUser = (id) => {
    fetch(`https://67793742482f42b62e90b791.mockapi.io/good/hello/${id}`, {
      method: 'DELETE',
    })
      .then(() => setUsers(users.filter((user) => user.id !== id)));
  };

  const handleEditUser = (user) => {
    setEditUser(user);
    setNewUser(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editUser) {
      setEditUser({ ...editUser, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  return (
    <div>
      <h2>CRUD Operations with Users</h2>

      <h3>{editUser ? 'Edit User' : 'Add New User'}</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={editUser ? editUser.name : newUser.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={editUser ? editUser.email : newUser.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={editUser ? editUser.username : newUser.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={editUser ? editUser.phone : newUser.phone}
        onChange={handleChange}
      />
      <button onClick={editUser ? handleUpdateUser : handleAddUser}>
        {editUser ? 'Update User' : 'Add User'}
      </button>

      <h3>User List</h3>
      <table border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudUsers;
