import './main.css';

const Search = (props) => {
    const take = (e) => props.setvalue(e.target.value)
    return(
        <div>
            <input type="text" onInput={take} className='search' placeholder='search...'/>  
        </div>
    )
}

export default Search;