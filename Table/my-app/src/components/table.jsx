import Person from "./network";

const Table = (props) => {
    const style = {
        width: 'auto',
        height: 'auto',
        padding: '2.4rem',
        border: '1px solid #fff',
        borderRadius: '2.8rem'
    }
    return(
        <div style={style}>
            <div style={props.style}>
                <span style={props.span}>ID</span>
                <span style={props.span}>First Name</span>
                <span style={props.span}>Last Name</span>
                <span style={props.span}>Age</span>
                <span style={props.span}>Full Name</span>
            </div>
            {props.data.map(p => <Person data={props} d={p} />)}
        </div>
    )
}

export default Table;