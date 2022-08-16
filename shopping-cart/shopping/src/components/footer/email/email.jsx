import './email.css';

const Email = (props) => {
    return (
        <div className='email-imformation'>
            <nav className='contact-email-us'>
                <h1>Our Organization</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, adipisci quaerat. Eius fugit, tempora iste nobis sunt debitis, minus aliquid labore vel porro repellendus illum consequatur praesentium culpa maiores doloribus!</p>
            </nav>
            <nav className='email-input-nav'>
                <h1>Some Poll</h1>
                <input type="text" name="" id="" placeholder='email...'/>
                <input type="text" name="" id="" placeholder='phone...'/>
            </nav>
        </div>
    )
}

export default Email;