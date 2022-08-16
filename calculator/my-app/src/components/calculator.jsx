import "./main.css"
import React, { useState } from 'react'

const Calculator = (props) => {
    let [stringNumber, setStringNumber] = useState('0')
    let [operation, setOperation] = useState('');
    let [number1, setNumber1] = useState('');
    const clickBtn = (e) => setStringNumber(stringNumber + e.target.textContent)
    const oper = (e) => {
        let action = e.target.textContent;
        setNumber1(stringNumber);
        setOperation(action);
        setStringNumber('0');
    }
    const equal = (e) => {
        switch (operation) {
            case "+":
                setStringNumber(parseInt(number1) + parseInt(stringNumber));
                break;
            case "-":
                setStringNumber(parseInt(number1) - parseInt(stringNumber));
                break;
            default:
                break;
        }
        setOperation('');
    }
    const clear = () => {
        setStringNumber('0');
        setNumber1('');
    }
    return(
        <div className="container">
            <div className="out">
                <div>{stringNumber}</div>
            </div>
            <div className="input">
                <button onClick={clear}>AC</button>
                <button onClick={clickBtn}>+/-</button>
                <button onClick={oper}>%</button>
                <button onClick={oper}>/</button>
                <button onClick={clickBtn}>7</button>
                <button onClick={clickBtn}>8</button>
                <button onClick={clickBtn}>9</button>
                <button onClick={oper}>*</button>
                <button onClick={clickBtn}>4</button>
                <button onClick={clickBtn}>5</button>
                <button onClick={clickBtn}>6</button>
                <button onClick={oper}>-</button>
                <button onClick={clickBtn}>1</button>
                <button onClick={clickBtn}>2</button>
                <button onClick={clickBtn}>3</button>
                <button onClick={oper}>+</button>
                <button onClick={clickBtn}>0</button>
                <button onClick={clickBtn}>.</button>
                <button onClick={equal}>=</button>
            </div>
        </div>
    )
}

export default Calculator;