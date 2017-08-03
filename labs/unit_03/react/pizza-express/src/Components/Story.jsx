import React, { Component } from 'react';
import PizzaOven from '../images/pizzaoven.jpg'

class OurStory extends Component {
    render() {
        return (
            <div className="description" id="description">
                <img src = {PizzaOven} alt='our pizza oven' />
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perferendis odit corrupti earum, maiores nihil eaque eius, alias quas quis omnis ut rerum optio perspiciatis mollitia, quasi veritatis odio totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi impedit iusto eum, qui recusandae velit necessitatibus, vel neque earum excepturi doloribus dolores assumenda molestiae, omnis nihil nemo perspiciatis illo quibusdam! </p>
            </div>
        );
    }
}

export default OurStory;