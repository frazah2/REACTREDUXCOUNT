import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authorisize/authReducer";
import  cardReducer  from "./card/cardReducer";

const store = configureStore({
    reducer: {
        card: cardReducer,
        auth: authReducer,
}   
 })

export default store