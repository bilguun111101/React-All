import './main.css'

const List = (props) => {
    const deletelist = (id) => {
        props.setArr(arr => arr.filter(el => el.id != id));
    }
    return(
        <div className="list-div">
            <input className="inputStyleList" type="text" name="" id="" value={props.mes}/>
            <button className='btnStyleList' onClick={() => deletelist(props.id)}>Delete</button>
        </div>
    )
}

export default List;