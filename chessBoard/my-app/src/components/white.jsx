const WhiteBox = (props) => {
    const styleWhite = {
        width: '50px',
        height: '50px',
        // border: '1px solid #000',
        background: props.color
    }
    return (
        <div style={styleWhite}></div>
    )
}

export default WhiteBox;