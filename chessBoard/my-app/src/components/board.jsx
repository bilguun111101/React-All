// import WhiteBox from './white';
// import BlackBox from './black';

// const Board = () => {
//     const style = {
//         width: '100%',
//         display: 'flex'
//     }    
//     let arr = [], i = 0;
//     while (i < 10) {
//         arr.push(i);
//         i++;
//     }
//     return (
//         <div style={style}>{arr.map(a => a % 2 === 0 ? <WhiteBox /> : <BlackBox />)}</div>
//     )
// }

// export default Board;

import WhiteBox from './white';
// import BlackBox from './black';

const Board = () => {
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
        <div style={style}>{arr.map(a => a % 2 === 0 ? <WhiteBox /> : <WhiteBox  color="black" />)}</div>
    )
}

export default Board;
