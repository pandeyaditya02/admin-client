// import React, { useState } from "react";

// import { useGetTrainsQuery } from "@/features/train/trainSlice";

// import {
//   TextField,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   Grid,
//   CircularProgress,
// } from "@mui/material";

const trainData = [
    {
      id: 1,
      number_of_seats1a: 100,
      number_of_seats2a: 100,
      number_of_seats3a: 100,
      number_of_seatssl: 100,
      from_station: "Station A",
      to_station: "Station B",
      train_name: "Express 1",
      train_number: "12345",
      time_of_arrival: "10:00 AM",
      time_of_departure: "10:30 AM",
    },
    {
      id: 2,
      number_of_seats1a: 100,
      number_of_seats2a: 100,
      number_of_seats3a: 100,
      number_of_seatssl: 100,
      from_station: "Station C",
      to_station: "Station D",
      train_name: "Express 2",
      train_number: "12346",
      time_of_arrival: "11:00 AM",
      time_of_departure: "11:30 AM",
    },
    {
      id: 3,
      number_of_seats1a: 100,
      number_of_seats2a: 100,
      number_of_seats3a: 100,
      number_of_seatssl: 100,
      from_station: "Station E",
      to_station: "Station F",
      train_name: "Express 3",
      train_number: "12347",
      time_of_arrival: "12:00 PM",
      time_of_departure: "12:30 PM",
    },
    {
      id: 4,
      number_of_seats1a: 100,
      number_of_seats2a: 100,
      number_of_seats3a: 100,
      number_of_seatssl: 100,
      from_station: "Station G",
      to_station: "Station H",
      train_name: "Express 4",
      train_number: "12348",
      time_of_arrival: "1:00 PM",
      time_of_departure: "1:30 PM",
    },
    {
      id: 5,
      number_of_seats1a: 100,
      number_of_seats2a: 100,
      number_of_seats3a: 100,
      number_of_seatssl: 100,
      from_station: "Station I",
      to_station: "Station J",
      train_name: "Express 5",
      train_number: "12349",
      time_of_arrival: "2:00 PM",
      time_of_departure: "2:30 PM",
    },
    {
      id: 6,
      number_of_seats1a: 100,
      number_of_seats2a: 100,
      number_of_seats3a: 100,
      number_of_seatssl: 100,
      from_station: "Station K",
      to_station: "Station L",
      train_name: "Express 6",
      train_number: "12350",
      time_of_arrival: "3:00 PM",
      time_of_departure: "3:30 PM",
    },
    {
      id: 7,
      number_of_seats1a: 100,
      number_of_seats2a: 100,
      number_of_seats3a: 100,
      number_of_seatssl: 100,
      from_station: "Station M",
      to_station: "Station N",
      train_name: "Express 7",
      train_number: "12351",
      time_of_arrival: "4:00 PM",
      time_of_departure: "4:30 PM",
    },
    {
      id: 8,
      number_of_seats1a: 100,
      number_of_seats2a: 100,
      number_of_seats3a: 100,
      number_of_seatssl: 100,
      from_station: "Station O",
      to_station: "Station P",
      train_name: "Express 8",
      train_number: "12352",
      time_of_arrival: "5:00 PM",
      time_of_departure: "5:30 PM",
    },
    {
      id: 9,
      number_of_seats1a: 100,
      number_of_seats2a: 100,
      number_of_seats3a: 100,
      number_of_seatssl: 100,
      from_station: "Station Q",
      to_station: "Station R",
      train_name: "Express 9",
      train_number: "12353",
      time_of_arrival: "6:00 PM",
      time_of_departure: "6:30 PM",
    },
    {
      id: 10,
      number_of_seats1a: 100,
      number_of_seats2a: 100,
      number_of_seats3a: 100,
      number_of_seatssl: 100,
      from_station: "Station S",
      to_station: "Station T",
      train_name: "Express 10",
      train_number: "12354",
      time_of_arrival: "7:00 PM",
      time_of_departure: "7:30 PM",
    },
  ];

// function TrainSearchPage() {
//   const [search, setSearch] = useState({
//     from_station: "",

//     to_station: "",

//     time_of_arrival: "",

//     time_of_departure: "",
//   });

//   // RTK Query Hook for fetching trains

//   const {
//     data: trains,
//     isFetching,
//     refetch,
//   } = useGetTrainsQuery(search);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setSearch((prev) => ({
//       ...prev,

//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     refetch(); // Manually trigger the refetching of data using updated search state
//   };

//   return (
//     <div className="p-4">
//       <Typography variant="h5" className="mb-4 text-center">
//         Search Trains
//       </Typography>

//       <Grid container spacing={2} justifyContent="center">
//         <Grid item xs={12} md={3}>
//           <TextField
//             fullWidth
//             name="from_station"
//             label="From Station"
//             value={search.from_station}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12} md={3}>
//           <TextField
//             fullWidth
//             name="to_station"
//             label="To Station"
//             value={search.to_station}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12} md={3}>
//           <TextField
//             fullWidth
//             name="time_of_arrival"
//             label="Time of Arrival"
//             type="time"
//             value={search.time_of_arrival}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12} md={3}>
//           <TextField
//             fullWidth
//             name="time_of_departure"
//             label="Time of Departure"
//             type="time"
//             value={search.time_of_departure}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSubmit}
//             className="w-full md:w-auto"
//           >
//             Search
//           </Button>
//         </Grid>
//       </Grid>

//       <Grid container spacing={2} className="mt-4">
//         {filteredTrains.map((train) => (
//           <Grid item key={train.id} xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">{train.train_name}</Typography>

//                 <Typography>
//                   From: {train.from_station} - To: {train.to_station}
//                 </Typography>

//                 <Typography>
//                   Arrival: {train.time_of_arrival} - Departure:{" "}
//                   {train.time_of_departure}
//                 </Typography>

//                 {/* <Typography>Duration: {train.duration}</Typography> */}

//                 {/* <Typography>Seats Available: {train.seatsAvailable}</Typography> */}
//               </CardContent>

//               <CardActions>
//                 <Button size="small">View Seats</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default TrainSearchPage;

import React, { useState, useEffect } from "react";

import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";


function TrainSearchPage() {
  const [search, setSearch] = useState({
    from_station: "",

    to_station: "",

    time_of_arrival: "",

    time_of_departure: "",
  });

  const [filteredTrains, setFilteredTrains] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSearch((prev) => ({
      ...prev,

      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Implement filtering logic

    const results = trainData.filter(
      (train) =>
        (search.from_station
          ? train.from_station.toLowerCase().includes(search.from_station.toLowerCase())
          : true) &&
        (search.to_station
          ? train.to_station.toLowerCase().includes(search.to_station.toLowerCase())
          : true) &&
        (search.time_of_arrival
          ? train.time_of_arrival === search.time_of_arrival
          : true) &&
        (search.time_of_departure
          ? train.time_of_departure === search.time_of_departure
          : true)
    );

    setFilteredTrains(results);
  };

  useEffect(() => {
    setFilteredTrains(trainData); // Default to showing all trains on initial render
  }, []);

  return (
    <div className="p-4">
      <Typography variant="h5" className="mb-4 text-center">
        Search Trains
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            name="from_station"
            label="From Station"
            value={search.from_station}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            name="to_station"
            label="To Station"
            value={search.to_station}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            name="time_of_arrival"
            label="Time of Arrival"
            type="time"
            value={search.time_of_arrival}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            name="time_of_departure"
            label="Time of Departure"
            type="time"
            value={search.time_of_departure}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className="w-full md:w-auto"
          >
            Search
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="mt-4">
        {filteredTrains.map((train) => (
          <Grid item key={train.id} xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{train.train_name}</Typography>

                <Typography>
                  From: {train.from_station} - To: {train.to_station}
                </Typography>

                <Typography>
                  Arrival: {train.time_of_arrival} - Departure:{" "}
                  {train.time_of_departure}
                </Typography>

                {/* <Typography>Duration: {train.duration}</Typography> */}

                {/* <Typography>Seats Available: {train.seatsAvailable}</Typography> */}
              </CardContent>

              <CardActions>
                <Button size="small">View Seats</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TrainSearchPage;
