import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    data:"test",
}



export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        checkUser(state){
            if(state.login == false){
                state.login = true
            }else{
                state.login = false
            }
        }

    }
})

export const {checkUser} = authSlice.actions;

export default authSlice.reducer