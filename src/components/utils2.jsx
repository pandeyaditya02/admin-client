import React, { useState } from "react";

import { useGetTrainsQuery } from "../services/trainApi";

import {
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

function TrainSearchPage() {
  const [search, setSearch] = useState({
    from_station: "",

    to_station: "",

    time_of_arrival: "",

    time_of_departure: "",
  });

  const { data: trains, isFetching } = useGetTrainsQuery(search);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSearch((prev) => ({
      ...prev,

      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Assume this triggers the query by re-invoking useGetTrainsQuery if needed
    // Typically might depend on RTK Query setup or similar API calling mechanism
  };

  return (
    <div>
      <TextField
        name="from_station"
        label="From Station"
        value={search.from_station}
        onChange={handleChange}
      />

      <TextField
        name="to_station"
        label="To Station"
        value={search.to_station}
        onChange={handleChange}
      />

      <TextField
        name="time_of_arrival"
        label="Time of Arrival"
        type="time"
        value={search.time_of_arrival}
        onChange={handleChange}
      />

      <TextField
        name="time_of_departure"
        label="Time of Departure"
        type="time"
        value={search.time_of_departure}
        onChange={handleChange}
      />

      <Button onClick={handleSubmit}>Search</Button>

      {isFetching ? (
        <Typography>Loading...</Typography>
      ) : (
        trains?.map((train) => (
          <Card key={train.id}>
            <CardContent>
              <Typography>{train.name}</Typography>

              <Typography>
                From: {train.from} - To: {train.to}
              </Typography>

              <Typography>
                Arrival: {train.arrivalTime} - Departure: {train.departureTime}
              </Typography>

              <Typography>Duration: {train.duration}</Typography>

              <Typography>Seats Available: {train.seatsAvailable}</Typography>
            </CardContent>

            <CardActions>
              <Button size="small">View Seats</Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
}

export default TrainSearchPage;
