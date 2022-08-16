import React, { Component } from 'react';
import 'all.css'

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='navbar'>
                <button onClick={this.handle}></button>
            </div>
        );
    }
    handle() {
        console.log('clicked')
    }
}
 
export default Navbar;