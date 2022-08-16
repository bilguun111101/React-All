import Actors from './actors/actors';
import Email from './email/email';
import './footer.css'

const Footer = () => {
    return(
        <div className='class-of-footer'>
            <Actors />
            <Email />
        </div>
    )
}

export default Footer;