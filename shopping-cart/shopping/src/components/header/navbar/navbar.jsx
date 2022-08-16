import { useState } from 'react';
import CartProduct from './cartProduct';
import './navbar.css'
import { CartContext } from '../../../useContext';
import { useContext } from 'react';

const Navbar = () => {
    let [bool, setBool] = useState(false);
    let [cartBool, setCartBool] = useState(false)
    let { cartArr, setCartArr } = useContext(CartContext);
    const click = () => {
        setBool(!bool)
    }
    let total = () => {
        let total = 0;
        cartArr.forEach(el => {
            total += (el.cost * el.inCart);
        })
        return total;
    }
    const cartFun = () => {
        setCartBool(!cartBool);
    }
    return(
        <div className="navbar">
            <img src="https://logodix.com/logo/239878.jpg" alt="" />
            <ul className={bool ? "some-li active" : "some-li"}>
                <li>Home</li>
                <li>Contact us</li>
                <li>Actors</li>
                <li onClick={cartFun}>Cart</li>
                <li>IMDb</li>
            </ul>
            <button className='bar-btn' onClick={click}></button>
            <div className={cartBool ? "cart-section active-cart" : "cart-section"}>
                <div className='cart-product'>
                    <button className='close-cart-btn' onClick={cartFun}><img src="https://icon-library.com/images/close-icon-png/close-icon-png-19.jpg" alt="" /></button>
                    <h1>Your Cart</h1>
                    <nav className='your-cart-product'>
                        {cartArr.map(data => <CartProduct key={1} data={data}/>)}
                    </nav>
                    <div className='total-cart-product'><i className=''></i>{total()}</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;