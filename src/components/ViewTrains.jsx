// src/ViewTrains.js
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useGetTrainsQuery } from "@/features/train/trainSlice.js";

const ViewTrains = () => {
  const trains = useSelector((state) => state.trains);
  // const { data: trains } = useGetTrainsQuery({
  //   from_station: "",

  //   to_station: "",

  //   time_of_arrival: "",

  //   time_of_departure: "",
  // });

  return (
    <Container className="dark:bg-gray-900 min-h-screen p-8">
      <Box className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full">
        <Typography
          variant="h4"
          component="h2"
          className="text-center mb-6 text-gray-800 dark:text-gray-100"
        >
          View Trains
        </Typography>
        <TableContainer component={Paper} className="dark:bg-gray-900">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="dark:text-gray-100">Train Name</TableCell>
                <TableCell className="dark:text-gray-100">
                  Train Number
                </TableCell>
                <TableCell className="dark:text-gray-100">
                  Arrival Time
                </TableCell>
                <TableCell className="dark:text-gray-100">
                  Departure Time
                </TableCell>
                <TableCell className="dark:text-gray-100">
                  From Station
                </TableCell>
                <TableCell className="dark:text-gray-100">To Station</TableCell>
                <TableCell className="dark:text-gray-100">
                  Total Seats
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trains.map((train) => (
                <TableRow key={train.train_name}>
                  <TableCell className="dark:text-gray-100">
                    {train.train_name}
                  </TableCell>
                  <TableCell className="dark:text-gray-100">
                    {train.train_number}
                  </TableCell>
                  <TableCell className="dark:text-gray-100">
                    {train.time_of_arrival}
                  </TableCell>
                  <TableCell className="dark:text-gray-100">
                    {train.time_of_departure}
                  </TableCell>
                  <TableCell className="dark:text-gray-100">
                    {train.from_station}
                  </TableCell>
                  <TableCell className="dark:text-gray-100">
                    {train.to_station}
                  </TableCell>
                  <TableCell className="dark:text-gray-100">
                    {train.number_of_seats1a +
                      train.number_of_seats2a +
                      train.number_of_seats3a}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ViewTrains;
