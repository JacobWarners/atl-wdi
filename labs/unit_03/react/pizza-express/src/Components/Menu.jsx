import React, { Component } from 'react';
import MenuData from '../pizzaData.js';
import MenuItem from './MenuItem'

class componentName extends Component {
    render() {
        return (
            <div className='menu' id='menu'>
                <h1>menu</h1>
                <div className="menu-container">
                    {MenuData.map((item, i) => {
                        return <MenuItem key={i} data={item}/>
                    })}
                </div>
            </div>
        );
    }
}

export default componentName;