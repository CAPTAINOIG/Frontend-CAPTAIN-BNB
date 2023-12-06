import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Allusers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const url = 'http://localhost:3000/user/getUser';
        const url = 'https://captain-bnb.onrender.com/user/getUser'
        const response = await axios.get(url);
        setUsers(response.data.users); // Assuming the response contains an array of users
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <div>
      {error ? (
        <p>Failed to fetch users. Error: {error.message}</p>
      ) : (
        <div>
          <table className="border-collapse border lg:ms-[30%] border-gray-400 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">ID</th>
                <th className="border border-gray-400 px-4 py-2">First Name</th>
                <th className="border border-gray-400 px-4 py-2">Last Name</th>
                <th className="border border-gray-400 px-4 py-2">PHONE</th>
                <th className="border border-gray-400 px-4 py-2">Email</th>
                <th className="border border-gray-400 px-4 py-2">REGISTRATION DATE</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="border border-gray-400 px-4 py-2">{user._id}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.firstName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.lastName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.phone}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.registrationDate}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Allusers;
