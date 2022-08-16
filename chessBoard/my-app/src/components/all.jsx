import Board from './board';
import ReverseBoard from './boardReverse';

const All = () => {
    let arr = [], i = 0;
    const style = {
        border: '1px solid #000'
    }
    while (i < 10) {
        arr.push(i);
        i++;
    }
    return(
        <div style={style}>{arr.map(a => a % 2 === 0 ? <Board /> : <ReverseBoard />)}</div>
    )
}

export default All;