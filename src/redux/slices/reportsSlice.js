import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reportsAPI } from '@/utils/apis'

export const FetchReports = createAsyncThunk("Reports/Fetch", async ({data, nic}) => {
    try {
        let response = await reportsAPI({data, nic})
        const _response = {
          data: response?.data,
          status: response?.status,
        }
        return _response
    } catch (error) {
      console.log(error)
      return error
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
  reducers: {
    settingReportError: (state, action) => {
      return { ...state, error: action?.payload, reports: [] }
    },
  },
  extraReducers(builder) {
    builder
        .addCase(FetchReports.pending, state => {
            state.loading = true
            state.error = ""
        })
        .addCase(FetchReports.fulfilled, (state, action)=> {
            state.loading = false;
            console.log("payload received", action.payload?.data?.client)
            if(action?.payload?.data){
              state.reports = action.payload?.data?.data?.client
              state.error = ""
            } else {
              console.log("error in payload")
              state.reports = []
              state.error = action?.payload?.response?.data?.error || "Not found"
            }
          })
          .addCase(FetchReports.rejected, (state, action)=> {
            console.log("error received", action.error)
            state.loading = false;
            state.reports = []
            state.error = action.error?.message
        })
        
  }
})

export const { settingReportError } = ReportSlice.actions
export const reportsData = (state) => state.reports
export default ReportSlice.reducer
