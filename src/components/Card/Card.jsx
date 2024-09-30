import './Card.css'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'




const Card = () => {


    const { numOfItems, text } = useSelector((state) => state)
    const dispatch = useDispatch();


    const handleAdd = () => {
        dispatch({ type: "ADD_ITEM", payload: { added: "1", }  })
    }

    const handleMinus = () => {
        dispatch({ type: "REMOVE_ITEM",  payload: { removed: "1", }  })
    }

    const handleAddFive = () => {
        dispatch({ type: "ADD_FIVE", payload: { added: "FIVE!", } })
    }
    const handleMinusFive = () => {
        dispatch({ type: "REMOVE_FIVE", payload: { removed: "5", } })
    }
    const handleReset = () => {
        dispatch({ type: "RESET_ALL", payload: { all: "RESET ALL!", } })
    }
    
    return (
        <div className='full container'>
            <div className='words'>
                  <p>Total: {numOfItems}</p>
                  <p>Added: {text.added}</p>
                  <p>Removed: {text.removed}</p>
                  <p>{text.all}</p>
            </div>
            <div className='butons'>
                <button className='minusfive' onClick={handleMinusFive}>-5</button>
                <button className='minus' onClick={handleMinus}>Minus</button>
                <button className='plus' onClick={handleAdd}>Plus</button>
                <button className='five' onClick={handleAddFive}>+5</button>
                <button className='reset' onClick={handleReset}>RESET</button>
            </div>
        </div>
    )
}

export default Card