import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:27001",
});
export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await api.get("/cars");
  return response.data;
});
export const addCar = createAsyncThunk("cars/addCar", async (car) => {
  const response = await api.post("/cars", car);
  return response.data;
});
const CarSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.cars.push(action.payload);
      });
  },
});
export default CarSlice.reducer;
