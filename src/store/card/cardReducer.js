
const initialState = {
    numOfItems: 0,
    text:"-",
}

export const cardReducer = (state = initialState, action) => {
    // const {type, payload} = action

    // eslint-disable-next-line default-case
    switch (action.type){
        case "ADD_ITEM":{
            return{
                ...state,
                text: action.payload,
                numOfItems: state.numOfItems + 1
            }
        }  
        case "REMOVE_ITEM":{
            return{
                ...state,
                text: action.payload,
                numOfItems: state.numOfItems - 1
            }
        }
        case "ADD_FIVE":{
            return{
                ...state,
                text: action.payload,
                numOfItems: state.numOfItems + 5,
            }
        }
        case "RESET_ALL":{
            return{
                ...state,
                text: action.payload,
                numOfItems: state.numOfItems = 0,
            }
        }
        case "REMOVE_FIVE":{
            return{
                ...state,
                text: action.payload,
                numOfItems: state.numOfItems - 5,
            }
        }

        default:
            return state
        
    }
}