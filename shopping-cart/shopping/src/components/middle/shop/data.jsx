import './shop.css'
import { CartContext } from '../../../useContext';
import { useContext } from 'react';

const DataProductDraw = (props) => {
    let { cartArr, setCartArr } = useContext(CartContext);
    const buyThis = () => {
        let i = 0, negative;
        while(i < cartArr.length) {
            if(cartArr[i].id === props.data.id) {
                negative = -1;
                cartArr[i].inCart++;
                console.log(cartArr[i].inCart)
            }
            i++;
        }
        if(negative !== -1) {
            setCartArr(old => [...old, props.data]);
        }
    }
    return(
        <div className='shop-per'>
            <span>
                <img src={props.data.image} alt="" />
                <h1>{props.data.type}</h1>
                <span className='cost-impormation'>
                    <h4>size of wish</h4>
                    <h4>${props.data.cost}</h4>
                </span>
                <button onClick={buyThis}>Buy</button>
            </span>
        </div>
    )
}

export default DataProductDraw;