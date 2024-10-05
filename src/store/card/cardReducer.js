import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfItems: 0,
    text: {
        name: '',
        password: ''
    },
}

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        increment(state) {
            state.numOfItems += 1;
        },
        incrementFive(state) {
            state.numOfItems += 5;
        },
        decrement(state) {
            if (state.numOfItems > 0) {
                state.numOfItems -= 1;
            }
        },
        decrementFive(state) {
            if (state.numOfItems >= 5) {
                state.numOfItems -= 5; 
            }
        },
        sendData(state, action) {
            state.text = {
                name: action.payload.name,
                password: action.payload.password
            };
        },
        resetAll(state) {
            state.numOfItems = 0;
            state.text = {          
                name: '',
                password: ''
            };
        }
    }
})

export const { increment, incrementFive, decrement, decrementFive, sendData, resetAll } = cardSlice.actions;

export default cardSlice.reducer;
