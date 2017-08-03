import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        return (
            <div className="menu-item">
                 <img src={this.props.data.image} />
                 <div className="menu-description">
                    <div className="menu-item-name">{this.props.data.name}</div>
                    <div>Price: {this.props.data.price}</div>
                    <div>{this.props.data.description}</div>
                </div>
            </div>
        );
    }
}

export default MenuItem;