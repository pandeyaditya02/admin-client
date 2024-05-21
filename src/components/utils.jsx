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

```

### Step 2: Setup Redux Store

**src/app/store.js**

```jsx

import { configureStore } from '@reduxjs/toolkit';

import { trainApi } from '../services/trainApi';

export const store = configureStore({

reducer: {

[trainApi.reducerPath]: trainApi.reducer,

},

middleware: (getDefaultMiddleware) =>

getDefaultMiddleware().concat(trainApi.middleware),

});

```

### Step 3: Train Search Page Component

**src/pages/TrainSearchPage.js**

```jsx

import React, { useState } from 'react';

import { useGetTrainsQuery } from '../services/trainApi';

import {

TextField,

Button,

Checkbox,

FormGroup,

FormControlLabel,

Typography,

Card,

CardContent,

CardActions

} from '@mui/material';

function TrainSearchPage() {

const [search, setSearch] = useState({ from: '', to: '', date: '', ladiesOnly: false, trainType: '' });

const { data: trains, isFetching } = useGetTrainsQuery(search);

const handleChange = (event) => {

const { name, value, checked, type } = event.target;

setSearch((prev) => ({

...prev,

[name]: type === 'checkbox' ? checked : value

}));

};

const handleSubmit = () => {

// Trigger the query

};

return (

<div>

<TextField name="from" label="From" onChange={handleChange} />

<TextField name="to" label="To" onChange={handleChange} />

<TextField name="date" label="Date" type="date" onChange={handleChange} />

<FormGroup>

<FormControlLabel control={<Checkbox name="ladiesOnly" onChange={handleChange} />} label="Ladies Only" />

</FormGroup>

<TextField name="trainType" label="Train Type" onChange={handleChange} />

<Button onClick={handleSubmit}>Search</Button>

{isFetching ? (

<Typography>Loading...</Typography>

) : (

trains?.map((train) => (

<Card key={train.id}>

<CardContent>

<Typography>{train.name}</Typography>

<Typography>From: {train.from} - To: {train.to}</Typography>

<Typography>Arrival: {train.arrivalTime} - Departure: {train.departureTime}</Typography>

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

```

### Step 4: Incorporate this into App and Provider.

**src/App.js**

```jsx

import React from 'react';

import { Provider } from 'react-redux';

import { store } from './app/store';

import TrainSearchPage from './pages/TrainSearchPage';

function App() {

return (

<Provider store={store}>

<TrainSearchPage />

</Provider>

);

}

export default App;
