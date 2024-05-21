// src/features/train/trainSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const trainApi = createApi({
  reducerPath: "trainApi",

  baseQuery: fetchBaseQuery({ baseUrl: "https://your-api-url.com/" }),

  endpoints: (builder) => ({
    getTrains: builder.query({
      query: (params) => ({
        url: `/trains`,

        params: {
          from_station: params.from_station,

          to_station: params.to_station,

          time_of_arrival: params.time_of_arrival,

          time_of_departure: params.time_of_departure,
        },
      }),
    }),

    addTrain: builder.mutation({
      query: (trainDetails) => ({
        url: "/trains",

        method: "POST",

        body: trainDetails,
      }),
    }),
  }),
});

export const { useGetTrainsQuery, useAddTrainMutation } = trainApi;

const trainSlice = createSlice({
  name: "trains",
  initialState: trainData,
  reducers: {
    addTrain: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTrain } = trainSlice.actions;
export default trainSlice.reducer;
