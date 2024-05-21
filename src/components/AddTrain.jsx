// src/AddTrain.js
import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAddTrainMutation } from "@/features/train/trainSlice";

const AddTrain = () => {
  const [formData, setFormData] = useState({
    id: 123, // Added new field with id set to 123 (change if needed)
    number_of_seats1a: 100,
    number_of_seats2a: 100,
    number_of_seats3a: 100,
    number_of_seatssl: 100,
    from_station: "",
    to_station: "",
    train_name: "",
    train_number: "",
    time_of_arrival: "",
    time_of_departure: "",
  });
  const [errors, setErrors] = useState({});
  const [addTrain] = useAddTrainMutation();
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};

    // Train Name validation (required)
    tempErrors.trainName = formData.train_name ? "" : "Train Name is required";

    // Train Number validation (required)
    tempErrors.trainNumber = formData.train_number
      ? ""
      : "Train Number is required";

    // Arrival Time validation (required)
    tempErrors.time_of_arrival = formData.time_of_arrival
      ? ""
      : "Arrival Time is required";

    // Departure Time validation (required)
    tempErrors.time_of_departure = formData.time_of_departure
      ? ""
      : "Departure Time is required";

    // You can add additional validations here:

    // Station Name validation (optional, modify as needed)
    tempErrors.from_station =
      formData.from_station.length > 2
        ? ""
        : "Station name must be at least 3 characters";
    tempErrors.to_station =
      formData.to_station.length > 2
        ? ""
        : "Station name must be at least 3 characters";

    // Number of Seats validation (optional, modify as needed)
    const seatTypes = [
      "number_of_seats1a",
      "number_of_seats2a",
      "number_of_seats3a",
      "number_of_seatssl",
    ];
    for (const seatType of seatTypes) {
      if (formData[seatType] < 0 || isNaN(formData[seatType])) {
        tempErrors[seatType] = "Number of seats must be a positive number";
      }
    }
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validate()) {
        console.log(formData);
        // await addTrain(formData);
        navigate("/view-trains");
      }
    } catch (error) {
      console.error("Failed to add train:", error);
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
    <Container className="dark:bg-gray-900 min-h-screen p-8">
      <Box className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md mx-auto gap-6">
        <Typography
          variant="h4"
          component="h2"
          className="text-center mb-6 text-gray-800 dark:text-gray-100"
        >
          Add Train
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <TextField
              label="Train Name"
              name="train_name"
              variant="outlined"
              fullWidth
              value={formData.train_name}
              onChange={handleChange}
              error={!!errors.train_name}
              helperText={errors.train_name}
              className="mb-4"
            />
            <TextField
              label="Train Number"
              name="train_number"
              variant="outlined"
              fullWidth
              value={formData.train_number}
              onChange={handleChange}
              error={!!errors.train_number}
              helperText={errors.train_number}
              className="mb-4"
            />
            <TextField
              label="Arrival Time"
              name="time_of_arrival"
              type="time"
              variant="outlined"
              fullWidth
              value={formData.time_of_arrival}
              onChange={handleChange}
              error={!!errors.time_of_arrival}
              helperText={errors.time_of_arrival}
              className="mb-4"
            />
            <TextField
              label="Departure Time"
              name="time_of_departure"
              type="time"
              variant="outlined"
              fullWidth
              value={formData.time_of_departure}
              onChange={handleChange}
              error={!!errors.time_of_departure}
              helperText={errors.time_of_departure}
              className="mb-4"
            />
            <TextField
              label="From Station"
              name="from_station"
              variant="outlined"
              fullWidth
              value={formData.from_station}
              onChange={handleChange}
              className="mb-4"
              error={!!errors.train_name}
              helperText={errors.train_name}
            />
            <TextField
              label="To Station"
              name="to_station"
              variant="outlined"
              fullWidth
              value={formData.to_station}
              onChange={handleChange}
              className="mb-4"
              error={!!errors.train_name}
              helperText={errors.train_name}
            />
            <TextField
              label="1A Seats"
              name="number_of_seats1a"
              variant="outlined"
              fullWidth
              value={formData.number_of_seats1a}
              onChange={handleChange}
              error={!!errors.number_of_seats1a}
              helperText={errors.number_of_seats1a}
              className="mb-4"
            />
            <TextField
              label="2A Seats"
              name="number_of_seats2a"
              variant="outlined"
              fullWidth
              value={formData.number_of_seats2a}
              onChange={handleChange}
              error={!!errors.number_of_seats2a}
              helperText={errors.number_of_seats2a}
              className="mb-4"
            />
            <TextField
              label="3A Seats"
              name="number_of_seats3a"
              variant="outlined"
              fullWidth
              value={formData.number_of_seats3a}
              onChange={handleChange}
              error={!!errors.number_of_seats3a}
              helperText={errors.number_of_seats3a}
              className="mb-4"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              className="mt-4"
            >
              Add Train
            </Button>
          </div>
        </form>
      </Box>
    </Container>
  );
};

export default AddTrain;
