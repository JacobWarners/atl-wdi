import React, { Component } from 'react';

class LocationItem extends Component {
    render() {
        return (
            <div className="location">
                <p>{this.props.data.name}</p>
                <p>Address</p>
                <p>{this.props.data.address}</p>
                <p>Contact</p>
                <p>{this.props.data.phone}</p>
            </div>
        );
    }
}

export default LocationItem;