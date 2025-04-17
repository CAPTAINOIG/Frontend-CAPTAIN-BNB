import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [editingUser, setEditingUser] = useState(null);
  // console.log(editingUser._id);


  const { isOpen, onOpen, onClose } = useDisclosure();

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
    // console.log(userId);
    const deleteUrl = 'https://captain-bnb.onrender.com/user/deleteModel';
    // // const deleteUrl = 'http://localhost:3000/user/deleteModel';
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

  // // const url = 'http://localhost:3000/user/editUser';
  // const url = 'https://captain-bnb.onrender.com/user/editUser'
  const editItem =(user)=>{
    // console.log(user);
    setEditingUser(user)
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setEmail(user.email)
    setPhoneNumber(user.phone)
    onOpen()
  }

  const editedItem = async () => {
    try {
      if (!editingUser) {
        console.error('No user selected for editing');
        return;
      }
      const url = `https://captain-bnb.onrender.com/user/editUser/${editingUser._id}`;
        // const url = `http://localhost:3000/user/editUser/${editingUser._id}`;
        console.log(url);
  
      const userData = { firstName, lastName, email, phoneNumber };
      // console.log(userData);
      const editResponse = await axios.put(url, userData);
      console.log(editResponse);

      if (editResponse.status === 200) {
        const updatedUser = editResponse.data.user;
        console.log(updatedUser);
        // this is to replace the data in users
        setUsers(users.map(user => user._id === updatedUser._id ? updatedUser : user));
        onClose();
      }
    } 
    catch (error) {
      console.error(error);
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
                  <button onClick={() => editItem(user)}>Edit</button>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal className='dark:bg-white dark:text-pink-700 lg:mt-28 mt-0 border bg-white' isOpen={isOpen} onClose={onClose} isDismissable={false}>
          <ModalContent>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
             
                <>
                  <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder='firstname'/>
                  <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder='lastname' />
                  <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email' />
                  <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}  placeholder='phonenumber'/>
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

export default AllUsers;
