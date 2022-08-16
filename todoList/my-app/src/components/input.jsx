import { useState } from "react"
import './main.css'
import { v4 as uuidv4 } from 'uuid';

const Input = (props) => {
    let [text, setText] = useState('');
    const take = (e) => {
        setText(e.target.value)
    }
    const give = () => {
        if(text.length === 0) alert('Sorry Input your text please');
        else
            props.setArr(arr => [...arr, {text: text, id: uuidv4()}])
    }
    return(
        <div className="style">
            <input className="inputStyle" type="text" onInput={take} placeholder="Enter your text..."/>
            <button className="btnStyle" onClick={give}>Add</button>
        </div>
    )
}

export default Input;