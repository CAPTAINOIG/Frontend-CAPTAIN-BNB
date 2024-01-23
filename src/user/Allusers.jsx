import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://captain-bnb.onrender.com/user/getUser';

        const response = await axios.get(url);
        // console.log(response);
        setUsers(response.data.users);
      } catch (error) {
        setError(error.message || 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const removeItem = async (userId) => {
    // console.log(userId[0]);
    const deleteUrl = 'https://captain-bnb.onrender.com/user/deleteModel';
    // const deleteUrl = 'http://localhost:3000/user/deleteModel';
    try {
      const deleteResponse = await axios.delete(deleteUrl, { data: { id: userId } });
      console.log(deleteResponse);

      if (deleteResponse.status === 200) {
        setUsers([...users.filter(eachUser => eachUser._id !== userId)])
        console.log(deleteResponse.data.message);
        setMessage(deleteResponse.data.message)
        setTimeout(() => {
          setMessage('');
        }, 4000);
      }
    } catch (error) {
      // Handle errors if necessary
    }
  };


  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Failed to fetch users. Error: {error}</p>
      ) : (
        <div>
          <p className='text-white text-sm lg:ms-[60%]'>{message}</p>
          <table className="border-collapse border lg:ms-[30%] border-gray-400 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">ID</th>
                <th className="border border-gray-400 px-4 py-2">First Name</th>
                <th className="border border-gray-400 px-4 py-2">Last Name</th>
                <th className="border border-gray-400 px-4 py-2">EMAIL</th>
                <th className="border border-gray-400 px-4 py-2">PHONE</th>
                <th className="border border-gray-400 px-4 py-2">REGISTRATION DATE</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td className="border border-gray-400 px-4 py-2">{user._id}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.firstName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.lastName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.phone}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.registrationDate}</td>
                  <button onClick={() => removeItem(user._id)}>Delete</button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
