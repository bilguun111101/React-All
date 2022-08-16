import './middle.css'
import Shop from './shop/shop';

const Middle = (props) => {
    let data = props.data;
    return(
        <div>
            <Shop product={data}/>
        </div>
    )
}

export default Middle;