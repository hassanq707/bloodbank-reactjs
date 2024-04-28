import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    isLoggedIn : false,
    loading : true
}

const User_detail = createSlice({
    name : 'user-data',
    initialState : initial_state,
    reducers : {
        set_user_auth : (state,actions) => {
            state.isLoggedIn = actions.payload;
            state.loading = false;
        }
    }
})

export const {set_user_auth} = User_detail.actions 

export default User_detail.reducer