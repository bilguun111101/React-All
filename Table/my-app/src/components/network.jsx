const Person = (props) => {
    const data = props.data;
    const per = props.d
    return (
        <div style={data.style}>
            <span style={data.span}>{per.id}</span>
            <span style={data.span}>{per.firstName}</span>
            <span style={data.span}>{per.lastName}</span>
            <span style={data.span}>{per.age}</span>
            <span style={data.span}>{per.firstName + " " + per.lastName}</span>
        </div>
    )
}

export default Person;