import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myLocation: null,
  searchedLocation: null,
  currentWeather: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMyLocation: (state, { payload }) => {
      state.myLocation = payload;
    },
    setSearchedLocation: (state, { payload }) => {
      state.searchedLocation = payload;
    },
    setCurrentWeather: (state, { payload }) => {
      state.currentWeather = payload;
    },
  },
});

export const { setCurrentWeather, setMyLocation, setSearchedLocation } =
  appSlice.actions;
