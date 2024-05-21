// src/AdminDashboard.js
import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button, Typography, Box, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const data = [
  { name: 'Mon', revenue: 4000, categories: 2400 },
  { name: 'Tue', revenue: 3000, categories: 1398 },
  { name: 'Wed', revenue: 2000, categories: 9800 },
  { name: 'Thu', revenue: 2780, categories: 3908 },
  { name: 'Fri', revenue: 1890, categories: 4800 },
  { name: 'Sat', revenue: 2390, categories: 3800 },
  { name: 'Sun', revenue: 3490, categories: 4300 },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container className="dark:bg-gray-900 min-h-screen p-8">
      <Typography variant="h4" component="h2" className="text-center mb-6 text-gray-800 dark:text-gray-100">
        Admin Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Typography variant="h6" component="h3" className="mb-4 text-gray-800 dark:text-gray-100">
              Revenue Breakdown by Categories
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="categories" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Typography variant="h6" component="h3" className="mb-4 text-gray-800 dark:text-gray-100">
              Total Revenue Per Day
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
      </Grid>
      <Box className="flex justify-end mt-8">
        <Button variant="contained" color="primary" className="mr-4" onClick={() => navigate('/add-train')}>
          Add Train
        </Button>
        <Button variant="contained" color="secondary" onClick={() => navigate('/view-trains')}>
          View Trains
        </Button>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
