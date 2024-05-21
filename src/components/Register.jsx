// src/Register.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  FormGroup,
  Switch
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@/features/user/userSlice";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/user/userSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "User",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register] = useRegisterMutation();

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? "" : "First Name is required";
    tempErrors.lastName = formData.lastName ? "" : "Last Name is required";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.phone = formData.phone ? "" : "Phone Number is required";
    tempErrors.password =
      formData.password.length > 5
        ? ""
        : "Password must be at least 6 characters";
    tempErrors.termsAccepted = formData.termsAccepted
      ? ""
      : "You must accept the terms and conditions";
    tempErrors.role = formData.role ? "" : "Role is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const user = await register(formData).unwrap();
        dispatch(setUser(user));
        navigate(formData.role === "Admin" ? "/admin" : "/booking");
      } catch (err) {
        // Handle registration error
        console.log(err);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      termsAccepted: e.target.checked,
    });
  };
  const handleRoleChange = (event) => {
    setFormData({
      ...formData,
      role: event.target.checked ? "Admin" : "User",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Box className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md mx-4">
        <Typography
          variant="h4"
          component="h2"
          className="text-center mb-6 text-gray-800 dark:text-gray-100 font-bold"
        >
          Register
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <div className="flex flex-col gap-4">
            {" "}
            <TextField
              label="First Name"
              name="firstName"
              variant="filled"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              className="bg-gray-200 dark:bg-gray-700"
              InputLabelProps={{
                className: "text-gray-700 dark:text-gray-300",
              }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              variant="outlined"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              className="bg-gray-200 dark:bg-gray-700"
              InputLabelProps={{
                className: "text-gray-700 dark:text-gray-300",
              }}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              className="bg-gray-200 dark:bg-gray-700"
              InputLabelProps={{
                className: "text-gray-700 dark:text-gray-300",
              }}
            />
            <TextField
              label="Phone Number"
              name="phone"
              variant="outlined"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              className="bg-gray-200 dark:bg-gray-700"
              InputLabelProps={{
                className: "text-gray-700 dark:text-gray-300",
              }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              className="bg-gray-200 dark:bg-gray-700"
              InputLabelProps={{
                className: "text-gray-700 dark:text-gray-300",
              }}
            />
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.role === "Admin"}
                  onChange={handleRoleChange}
                  name="role"
                  color="primary"
                />
              }
              label={formData.role === "Admin" ? "Admin" : "User"}
            />
          </FormGroup>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.termsAccepted}
                onChange={handleCheckboxChange}
                color="primary"
              />
            }
            label="I accept the terms and conditions"
            className="mb-4"
          />

          {errors.termsAccepted && (
            <Typography color="error">{errors.termsAccepted}</Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="mt-4"
          >
            Register
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Register;
