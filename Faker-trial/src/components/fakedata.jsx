import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTable() {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  // Fetch data from the Faker.js API
  axios.get('https://fakerapi.it/api/v1/users')
   .then(response => {
    setData(response.data.data);
    setLoading(false);
   })
   .catch(error => {
    console.error('Error fetching data:', error);
    setLoading(false);
   });
 }, []);

 if (loading) {
  return <div>Loading...</div>;
 }

 return (
  <div>
   <h1>User Data Table</h1>
   <table>
    <thead>
     <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
     </tr>
    </thead>
    <tbody>
     {data.map(user => (
      <tr key={user.id}>
       <td>{user.id}</td>
       <td>{user.name}</td>
       <td>{user.email}</td>
       <td>{user.phone}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
}

export default DataTable;