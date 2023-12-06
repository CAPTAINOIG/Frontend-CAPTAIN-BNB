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
        console.log(response);
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
          <table className='lg:ms-[60%]' style={{ width: '150%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#E5E7EB' }}>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px', width: '20%' }}>Name Of Host</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Address</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Description</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Perks</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Date</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Time</th>
                <th style={{ border: '1px solid #D1D5DB', padding: '8px' }}>Price</th>
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
