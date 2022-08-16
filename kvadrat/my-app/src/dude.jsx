import React, { Component } from 'react';
import Four from './four'

const Name = (props) => {
    let man = {
        width: '100vw', display: 'flex'
    }
    let arr = [];
    for(let i = 1; i <= 10; i++) {
        arr.push(i);
    }
    return (
        <div style={man}>
            {arr.map(a => <Four key={a} />)}
        </div>
    );
}
 
export default Name;