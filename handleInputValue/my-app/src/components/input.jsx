import { useButtonContext } from '../context';
import css from "./main.module.css"

const Input = () => {
    let { setIsClicked, isClicked } = useButtonContext();
    const handle = () => {
        // let checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        // if(!isClicked.name[0].toUpperCase()) {alert("Please Enter your name Correct!!!")}
        // if(!isClicked.email.match(checkEmail)) {alert('Please Enter your email Correct!!!')}
        // else if(isClicked.pass.length < 6) {alert('Please enter your email Correct!!!')}
        // else {alert("Success Enter")}
        if(isClicked.email.match())
        console.log(isClicked)
    }
    const input = e => {
        setIsClicked({...isClicked, [e.target.name]: e.target.value})
    }
    return(
        <div className={css.hello}>
            <form>
                <input type="text" name="name" id="" onChange={input} className="nice" placeholder="name..."/>
                <input type="password" name="pass" id="" onChange={input} placeholder="password..."/>
                <input type="number" name="age" id="" onChange={input} className="nice" placeholder="age..."/>
                <input type="email" name="email" id="email" onChange={input} className="nice" placeholder="email..."/>
            <button onClick={handle}>Submit</button>
            </form>
        </div>
    )
}

export default Input;