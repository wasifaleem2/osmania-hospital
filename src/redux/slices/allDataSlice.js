import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { allDataAPI } from "@/utils/apis";

export const FetchData = createAsyncThunk("Data/Fetch", async (datafor) => {
  try {
    let response = await allDataAPI(datafor);
    return {
      data : response?.data,
      status: response?.status
    }
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
        console.log("data payload", action?.payload?.data?.blogs)
        state.loading = false;
        state.data = action?.payload?.data?.blogs;
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
