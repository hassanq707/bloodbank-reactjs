import { configureStore } from "@reduxjs/toolkit";
import  set_user_auth  from "./slices/User_detail";
import Donors_data from "./slices/Donors_data";

const store = configureStore({

    reducer : {
       user_data : set_user_auth,
       Donors_data : Donors_data,
    }

})

export {store}