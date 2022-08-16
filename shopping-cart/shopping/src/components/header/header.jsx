import Background from './background/backg';
import './header.css'
import Navbar from './navbar/navbar';

const Header = () => {
    return (
        <div className='header-top'>
            <Navbar />
            <Background />
        </div>
    )
}

export default Header;