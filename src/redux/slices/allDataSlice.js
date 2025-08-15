import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { allDataAPI } from "@/utils/apis";

export const FetchData = createAsyncThunk("Data/Fetch", async (data) => {
  try {
    let response = await allDataAPI(data);
    return response;
  } catch (error) {}
});

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const AllDataSlice = createSlice({
  name: "alldata",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = "";
      })
      .addCase(FetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export const {} = AllDataSlice.actions;
export const allData = (state) => state.alldata;
export default AllDataSlice.reducer;
