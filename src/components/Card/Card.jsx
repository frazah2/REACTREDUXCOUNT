import { useSelector, useDispatch } from "react-redux";
import { increment,decrementFive, incrementFive, decrement, sendData, resetAll } from "../../store/card/cardReducer"; 
import { checkUser } from "../../store/authorisize/authReducer";
import './Card.css';

const Card = () => {
    const { numOfItems, text } = useSelector((state) => state.card);
    const { login } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    
    const handlePlus = () => {
        dispatch(increment());
    };

    const handleFivePlus = () => {
        dispatch(incrementFive());
    };
    const handleFiveMinus = () => {
        dispatch(decrementFive());
    };

    const incrementByAmount_data = () => {
        dispatch(sendData({
            name: "Fraz",
            password: "123"
        }));
    };

    const handleLogin = () => {
        dispatch(checkUser());
    };

    const handleReset = () => {
        dispatch(resetAll());
    };

    return (
        <div className="main">
            <div className="words">
            <p>Total: {numOfItems}</p>
            <p>Text: {text.name} {text.password}</p> 
            <p>Auth: {login ? "Active" : "Inactive"}</p> 
            </div>
            <div className="buttons">
            <button className="five" onClick={handleFivePlus}>+5</button>
            <button className="plus" onClick={handlePlus}>+1</button>
            <button className="minus" onClick={() => dispatch(decrement())}>-1</button>
            <button className="minusfive" onClick={handleFiveMinus}>-5</button>
            <button className="data" onClick={incrementByAmount_data}>Data</button>
            <button className="log" onClick={handleLogin}>Login</button>
            <button className="reset" onClick={handleReset}>Reset All</button>
            </div>
        </div>
    );
};

export default Card;
