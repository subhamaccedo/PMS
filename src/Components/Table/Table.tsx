// TableComponent.jsx
import React from 'react';

const TableComponent = () => {
  const data = [
    { id: 1, name: 'Alice', age: 24 },
    { id: 2, name: 'Bob', age: 29 },
    { id: 3, name: 'Charlie', age: 32 },
  ];

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
