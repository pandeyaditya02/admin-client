// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Register from './components/Register';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import AddTrain from './components/AddTrain';
import ViewTrains from './components/ViewTrains';
import SearchTrains from './components/SearchTrain';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/add-train" element={<AddTrain />} />
            <Route path="/view-trains" element={<ViewTrains />} />
            <Route path="/search-trains" element={<SearchTrains />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
