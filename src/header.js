import React from 'react';

import logocopy from './logocopy.png';
import './Header.css';


export default function(props) {
    return (
        <div className='Header'>
            <img className='Header-logo' src={logocopy} />
            <select onChange={props.changeCount}>
                <option>10</option>
                <option>20</option>
                <option>50</option>
            </select>
        </div>
    )
}
