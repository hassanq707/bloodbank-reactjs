import { createSlice } from "@reduxjs/toolkit";

const initial_state = []

const Donors_data = createSlice({
    name : 'user-data',
    initialState : initial_state,
    reducers : {
        set_donor_data : (state,actions) => {
            state.push(actions.payload)
        }
    }
})

export const {set_donor_data} = Donors_data.actions 

export default Donors_data.reducer