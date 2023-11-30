import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResetPassword = () => {

    let userEmail = JSON.parse(localStorage.getItem("email"))
    console.log(userEmail);
const email = userEmail;
    const [data, setData] = useState({
        email: email,
        otp: '',
        newPassword: '',
        confirmPassword: ''
    });



    const handleChanges = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log(data); // You can perform validations or other operations here

        if (data.email && data.otp && data.newPassword && data.confirmPassword) {
            console.log(data); // You can perform validations or other operations here

            // Example: Making an axios post request
            axios.post('http://localhost:3000/user/reset', data)
                .then((res) => {
                    console.log(res); // Handle success response
                })
                .catch((err) => {
                    console.log(err); // Handle error
                });
        } else {
            console.log('Error: Please fill in all fields');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='otp' onChange={handleChanges} />
            <input type="text" name='newPassword' onChange={handleChanges} />
            <input type="text" name='confirmPassword' onChange={handleChanges} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ResetPassword;
