// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, we'll add the code to post the form data using Axios
    try {
        const response = await axios.post('http://localhost:8080/signup', formData);
        console.log('Form data submitted successfully:', response.data);
        // You can add additional logic here, such as displaying a success message
      } catch (error) {
        console.error('Error submitting form data:', error);
        // You can add error handling logic here, such as displaying an error message
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="Enter your first name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Enter your last name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Enter a username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="integer"
        name="age"
        placeholder="Enter your age"
        value={formData.age}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;