import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { setEmail } from '../Redux/counterSlice';

const ResetPassword = () => {
    // const dispatch = useDispatch();
    // const emailFromRedux = useSelector(state => state.email); // Assuming your email is stored in Redux
    let detail = JSON.parse(localStorage.getItem('real_estate'))
    console.log(detail.email);
    const [data, setData] = useState({
        email: email,
        otp: '',
        newPassword: '',
        confirmPassword: ''
    });

    // useEffect(() => {
    //     setData(prevData => ({ ...prevData, email: emailFromRedux }));
    // }, [emailFromRedux]);

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log(data);
        axios.post('http://localhost:3000/user/reset', data)
            .then((res) => {
                console.log(res); // Handle success response
            })
            .catch((err) => {
                console.log(err); // Handle error
            });

        if (data.email && data.otp && data.newPassword && data.confirmPassword) {
            if (data.newPassword !== data.confirmPassword) {
                console.log('Error: Passwords do not match');
                return;
            }
            // Perform API call using Axios
        } else {
            console.log('Error: Please fill in all fields');
        }
    };

    
  const handleEmailChange = (event) => {
    const { value } = event.target;
    dispatch(setEmail(value)); // Dispatch the setEmail action to update the email state
  };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='otp' onChange={handleChanges} placeholder="Enter OTP" />
            <input type="password" name='newPassword' onChange={handleChanges} placeholder="Enter new password" />
            <input type="password" name='confirmPassword' onChange={handleChanges} placeholder="Confirm new password" />
            <input type="text" onChange={handleEmailChange} placeholder="Enter email" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ResetPassword;
