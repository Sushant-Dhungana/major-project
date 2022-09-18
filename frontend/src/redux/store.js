import { configureStore } from "@reduxjs/toolkit"; 
import AuthReducer from "./features/authSlice"
import SellReducer from "./features/sellSlice"


export default configureStore ({
    reducer: {
        auth: AuthReducer,
        sell: SellReducer,
    },
});