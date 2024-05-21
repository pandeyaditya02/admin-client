// src/Login.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '@/features/user/userSlice';
import { useDispatch } from 'react-redux';
import { setUser } from '@/features/user/userSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email is not valid';
    tempErrors.password = formData.password ? '' : 'Password is required';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const user = await login(formData).unwrap();
        dispatch(setUser(user));
        navigate(user.role === 'Admin' ? '/admin' : '/booking');
      } catch (err) {
        // Handle login error
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
  <Box className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
    <Typography variant="h4" component="h2" className="text-center mb-6 text-gray-800 dark:text-gray-100 font-bold">
      Login
    </Typography>
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <div className="flex flex-col gap-6"> {/* Add gap utility here */}
        <TextField
          label="Email"
          name="email"
          variant="filled"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          InputLabelProps={{
            className: "text-gray-700 dark:text-gray-300"
          }}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="filled"
          fullWidth
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          InputLabelProps={{
            className: "text-gray-700 dark:text-gray-300"
          }}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth className="mt-4 bg-blue-500 hover:bg-blue-700">
          Login
        </Button>
      </div>
    </form>
  </Box>
</div>

  );
};

export default Login;
