import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Userplace = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const url = 'http://localhost:3000/user/getPlace';
        const url = 'https://captain-bnb.onrender.com/user/getPlace'
        const response = await axios.get(url);
        // console.log(response);
        setUsers(response.data.users); // Assuming the response contains an array of users
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  

  
  // const deletePlace = async (userId) => {
  //   // console.log(users[0]);
  //   const url = 'http://localhost:3000/user/deleteUserPlace';
  //   // console.log(userId);
  //   try {
  //     const response = await axios.delete(url, { data: { _id: userId } });
  //     console.log(response);
  
  //     if (response.status === 200) {
  //       setUsers([...users.filter(eachUser=> eachUser._id !== userId)])
  //       const updatedData = {}; // Provide the updated data here
  //       await updateItem(userId, updatedData);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     // Handle errors if necessary
  //   }
  // };



  const removeItem = async (userId) => {
    // console.log(users[0]);
    const url = 'http://localhost:3000/user/deleteUserPlace';
    try {
      const deleteResponse = await axios.delete(url, { data: { id: userId } });
      console.log(deleteResponse);
  
      if (deleteResponse.status === 200) {
        setUsers([...users.filter(eachUser=> eachUser._id !== userId)])
        // If the deletion was successful, trigger the update immediately
        const updatedData = {}; // Provide the updated data here
        await updateItem(userId, updatedData);
      }
    } catch (error) {
      // Handle errors if necessary
    }
  };
  
  const updateItem = async (userId, updatedData) => {
    const updateUrl = 'http://localhost:3000/user/update';
    try {
      const updateResponse = await axios.put(updateUrl, { id: userId, data: updatedData });
      console.log(updateResponse);
      // Handle UI updates or other actions based on the update response
    } catch (error) {
      console.log(error);
      // Handle errors if necessary
    }
  };



  
  
  
  return (
    <div>
    {error ? (
      <p>Failed to fetch users. Error: {error.message}</p>
    ) : users.length === 0 ? (
      <p className='lg:ms-[50%] text-center text-3xl text-white' style={{ width: '750%', borderCollapse: 'collapse', marginTop: '200px' }}>No users available.</p>
    ) : (
      <div>
          <table className='lg:ms-[50%]' style={{ width: '150%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#E5E7EB' }}>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px', width: '20%' }}>Name Of Host</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Address</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Description</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Perks</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Date</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Time</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Price</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#F3F4F6' : '' }}>
                  <td style={{ border: '1px solid #D1D5DB', padding: '8px' }}>{user.nameOfHost}</td>
                  <td style={{ border: '1px solid #D1D5DB', padding: '8px' }}>{user.address}</td>
                  <td style={{ border: '1px solid #D1D5DB', padding: '8px' }}>{user.description}</td>
                  <td style={{ border: '1px solid #D1D5DB', padding: '8px' }}>{user.perks.join(', ')}</td>
                  <td style={{ border: '1px solid #D1D5DB', padding: '8px' }}>{user.date}</td>
                  <td style={{ border: '1px solid #D1D5DB', padding: '8px' }}>{user.time}</td>
                  <td style={{ border: '1px solid #D1D5DB', padding: '8px' }}>{user.price}</td>
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

export default Userplace;
