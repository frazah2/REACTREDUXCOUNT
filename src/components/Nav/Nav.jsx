import './Nav.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Nav = () => {

    const {numOfItems} = useSelector((state)=> state)
    const dispatch = useDispatch();

    return(
        <div className="nav">{numOfItems}</div>
    )

}

export default Nav;