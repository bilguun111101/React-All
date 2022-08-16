import './shop.css';
import DataProductDraw from './data';


const Shop = (props) => {
    return(
        <div className='shop-imformation-div'>
            {props.product.map(pro => <DataProductDraw key={pro.id} data={pro}/>)}
        </div>
    )
}

export default Shop;