import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
let reg_url = 'https://wtsacademy.dedicateddevelopers.us/api/user/signup'
let login_url = 'https://wtsacademy.dedicateddevelopers.us/api/user/signin'
let profile_url = 'https://wtsacademy.dedicateddevelopers.us/api/user/profile-details'
const initial_value = {
    isLoading: false,
    status: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    profile_pic: '',
    message: '',
    errMsg: '',
    authToken: ''
}
export const sign_up = createAsyncThunk("user/sign_up",
    async (userdata) => {
        const res = await axios.post(reg_url, userdata, {
            headers: {
                "Content-Type": "application/form-data",
                "Access-Control-Allow-Origin": "*"
            }
        })
        return res?.data
    })
export const sign_in = createAsyncThunk('user/sign_in',
    async (userdata) => {
        const res = await axios.post(login_url, userdata, {
            headers: {
                "Content-Type": "appication/form-data",
                "Access-Control-Allow-Origin": "*"
            }
        })
        return res?.data
    })
let valid_token = window.localStorage.getItem("token")
export const user = createAsyncThunk('user/profile-details',
    async (userdata) => {
        const res = await axios.get(profile_url, userdata, {
            headers: {
                "x-access-token": valid_token,
                "Content-Type": "application/form-data",
                "Access-Control-Allow-Origin": "*"
            },
        })
        return res?.data
    })

export const authSlice = createSlice({
    name: "user",
    initialState: initial_value,
    extraReducers: (builder) => {
        builder.addCase(sign_up.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(sign_up.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log("Action :", action);
        })
        builder.addCase(sign_up.rejected, (state, action) => {
            state.isLoading = false;
            console.log("Action :", action);

        })
        builder.addCase(sign_in.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(sign_in.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log("Action :", action);
            if (action.payload.status === 200) {
                window.sessionStorage.setItem("token", action.payload.token)
                window.sessionStorage.setItem("userEmail", action.payload.data.email)
                state.first_name = action.payload.data.first_name;
                state.last_name = action.payload.data.last_name;
                state.email = action.payload.data.email;
                state.profile_pic = action.payload.data.profile_pic;
            }
            else {
                alert('Please login first')
                console.log("Action :", action.payload.message);

            }
        })
        builder.addCase(sign_in.rejected, (state, action) => {
            state.isLoading = false;
            console.log("Action :", action);
        })
        builder.addCase(user.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(user.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log("Action :", action);
            state.first_name = action.payload.data.first_name;
            state.last_name = action.payload.data.last_name;
            state.email = action.payload.data.email;
            state.profile_pic = action.payload.data.profile_pic;
        })
        builder.addCase(user.rejected, (state, action) => {
            state.isLoading = false;
            console.log("Action in error :", action.payload.errMsg);
        })
    }
})

export default authSlice.reducer