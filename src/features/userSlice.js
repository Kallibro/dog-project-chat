//REDUX is the way to mange state,we need to manage our state visitors 

import {createSlice} from '@reduxjs/toolkit';
import appApi from '../services/appApi';

export const userSlice = createSlice({
    name: 'user',
    initialState:null,
    //functions that will change user state
    reducers:{
        //actions
        addNotifications: (state,{payload})=>{},
        resetNotifications: (state,{payload})=>{},
    },

    extraReducers: (builder) => {
        //save user after signup in our storage
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state,{payload})=> payload);
        //save user after login
        builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state,{payload})=> payload);
        //logout: destroy user session
        builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, ()=> null);


    },
})


export const {addNotifications,resetNotifications} = userSlice.actions;

export default userSlice.reducer;