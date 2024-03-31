import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Userplace = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('')
  // const [editedUser, setEditedUser] = useState('');
  const [nameOfHost, setNameOfHost] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [perks, setPerks] = useState('')
  const [editingUser, setEditingUser] = useState(null);




  const { isOpen, onOpen, onClose } = useDisclosure();

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



  const removeItem = async (userId) => {
    // here, we will get the user id
    // console.log(userId);
    const url = 'https://captain-bnb.onrender.com/user/deleteUserPlace';
    // const url = 'http://localhost:3000/user/deleteUserPlace';

    try {
      // here, it is like saying userId = id
      const deleteResponse = await axios.delete(url, { data: { id: userId } });
      // console.log(deleteResponse);

      if (deleteResponse.status === 200) {
        setUsers([...users.filter(eachUser => eachUser._id !== userId)])
        console.log(deleteResponse.data.message);
        setMessage(deleteResponse.data.message)
        setTimeout(() => {
          setMessage('');
        }, 4000);
      }
    } catch (error) {
    }
  };


  
  const editItem = (user) => {
    setEditingUser(user);
    setNameOfHost(user.nameOfHost)
    setAddress(user.address)
    setDescription(user.description)
    setPerks(user.perks.join(', '));
    setPrice(user.price)
    onOpen();
  };




  const editedItem = async () => {
    try {
      if (!editingUser) {
        console.error('No user selected for editing');
        return;
      }
  
    const url = `https://captain-bnb.onrender.com/user/editPlace/${editingUser._id}`;
      // const url = `http://localhost:3000/user/editPlace/${editingUser._id}`;
      // console.log(url);
      const userData = { nameOfHost, address, description, perks: perks.split(', '), price };
      const editResponse = await axios.put(url, userData);
      console.log(editResponse);

      if (editResponse.status === 200) {
        const updatedUser = editResponse.data.user;
        // this is to replace the data in users
        setUsers(users.map(user => user._id === updatedUser._id ? updatedUser : user));
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div>
      {error ? (
        <p className='lg:ms-28 text-white'>Failed to fetch users. Error: {error.message}</p>
        ) : users.length === 0 ? (
          <p className='lg:ms-[50%] text-center text-3xl text-white' style={{ width: '750%', borderCollapse: 'collapse', marginTop: '200px' }}>No users available.</p>
          ) : (
        <div>
          <p className='text-white text-sm lg:ms-[60%]'>{message}</p>
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
                  <button className='bg-white font-bold text-gray-700 w-[100%]' onClick={() => editItem(user)}>Edit</button>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal className='dark:bg-white dark:text-pink-700 lg:mt-28 mt-0 border bg-white' isOpen={isOpen} onClose={onClose} isDismissable={false}>
          <ModalContent>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
             
                <>
                  <input type="text" onChange={(e) => setNameOfHost(e.target.value)} value={nameOfHost} placeholder='nameofhost'/>
                  <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} placeholder='address' />
                  <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} placeholder='description' />
                  <input type="text" onChange={(e) => setPerks(e.target.value)} value={perks}  placeholder='perks'/>
                  <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} placeholder='price'/>
                  <button onClick={() => editedItem()} className='bg-black w-100 text-white'>Submit</button>
                </>
              
              </ModalBody>
          </ModalContent>
      </Modal>
        </div>
      )}
    </div>
  );
};

export default Userplace;
