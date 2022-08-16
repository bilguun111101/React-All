import './main.css'

const Search = (props) => {
    const search = (e) => {
        props.search(e.target.value);
    }
    return(
        <div className='search-div'>
            <input type="text" name="" onChange={search} className='search' placeholder='search name...'/>
        </div>
    )
}

export default Search;