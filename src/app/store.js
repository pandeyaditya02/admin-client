// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer, { userApi } from "../features/user/userSlice";
import trainReducer, { trainApi } from "../features/train/trainSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    trains: trainReducer,
    [trainApi.reducerPath]: trainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(trainApi.middleware),
});

export default store;
