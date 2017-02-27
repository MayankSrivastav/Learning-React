import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = { greetings: ['Mayank', 'Maanas', 'Smriti'] };
    }

    // Return the render component based
    // on state
    renderGreetings() {
        // Use index of element in state as key
        // as there is no unique key available now
        return this.state.greetings.map((name, ind) => (
            <HelloWorld key={ind} name={name}/>
        ));
    }

    render() {
        return (
            <div className="HelloWorldList">
                {this.renderGreetings()}
            </div>
        );
    }
}

export default HelloWorldList;