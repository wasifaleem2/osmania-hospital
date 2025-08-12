import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reportsAPI } from '@/utils/apis'

export const FetchReports = createAsyncThunk("Reports/Fetch", async data => {
    try {
        let response = await reportsAPI(data)
        return response
    } catch (error) {

    }
}) 

const initialState = {
  reports: [],
  loading: false,
  error: "",
}

const ReportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(FetchReports.pending, state => {
            state.loading = true
        })
        .addCase(FetchReports.fulfilled, (state, action)=> {
            state.loading = false;
            state.reports = [
                { id: 1, name: "Monthly_Report_Jan_2023.pdf", date: "15 Jan 2023" },
                { id: 2, name: "Patient_Statistics_Q1.pdf", date: "30 Mar 2023" },
                { id: 3, name: "Annual_Report_2022.pdf", date: "15 Jan 2023" },
              ]
            state.error = ""
        })
        .addCase(FetchReports.rejected, (state, action)=> {
            state.loading = false;
            state.reports = []
            state.error = action.error.message
        })
        
  }
})

export const { } = ReportSlice.actions
export const reportsData = (state) => state.reports
export default ReportSlice.reducer
