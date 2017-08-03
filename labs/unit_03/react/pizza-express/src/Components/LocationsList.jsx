import React, { Component } from 'react';
import LocationData from '../locationData.js'
import LocationItem from './LocationItem'

class LocationsList extends Component {
    render() {
        return (
            <div id="locations">
                <h1>Locations</h1>
                    <div className="locations">
                        {LocationData.map((item, i) => {
                            return <LocationItem key={i} data={item}/>
                        })}
                    </div>
            </div>
        );
    }
}

export default LocationsList;