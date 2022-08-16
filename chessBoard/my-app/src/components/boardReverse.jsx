import WhiteBox from './white';
// import BlackBox from './black';

const ReverseBoard = () => {
    const style = {
        width: '100%',
        display: 'flex'
    }
    let arr = [], i = 0;
    while (i < 10) {
        arr.push(i);
        i++;
    }
    return (
        <div style={style}>{arr.map(a => a % 2 === 0 ? <WhiteBox color="black" /> : <WhiteBox />)}</div>
    )
}

export default ReverseBoard;