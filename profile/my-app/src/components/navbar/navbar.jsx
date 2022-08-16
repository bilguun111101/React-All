import './main.css'
// import Search from './search';

const Navbar = (props) => {
    const search = (e) => {
        props.search(e.target.value);
    }
    return(
        <header className='header-navbar'>
            {/* <Search/> */}
            <div className='search-div'>
                <input type="text" name="" onChange={search} className='search' placeholder='search name...'/>
            </div>
            <h1>Actors Pages</h1>
            <div className='end-boom'>
                <div className='end-boom-span'>
                    <h2>Criteria</h2>
                </div>
                <div className='end-boom-span'>
                    <h2>More actors</h2>
                </div>
            </div>
        </header>
    )
}

export default Navbar;