import { useState } from "react";

const Count = () => {
    const [count, hello] = useState(0)
    const style = {
        width: "500px",
        height: "300px",
        fontSize: '3rem'
    }
    let handle = () => {
        hello(count + 1)
    }
    return(
        <div style={style}>
            <div>You clicked {count} times</div>
            <button onClick={handle}>Clicke me</button>
        </div>
    )
}

export default Count;