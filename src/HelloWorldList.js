import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';
import './HelloWorldList.css';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = { greetings: ['Mayank', 'Maanas', 'Smriti'] };
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    // Return the render component based
    // on state
    renderGreetings() {
        // Use index of element in state as key
        // as there is no unique key available now
        return this.state.greetings.map((name, ind) => (
            <HelloWorld 
             key={ind} 
             name={name}
             removeGreeting={this.removeGreeting}
            />
        ));
    }

    addGreeting(newName) {
        this.setState({ greetings: [...this.state.greetings, newName] });
    }

    removeGreeting(removeName) {
        const filteredGreeting = this.state.greetings.filter(name => name !== removeName);
        this.setState({ greetings: filteredGreeting });
    }

    render() {
        return (
            <div className="HelloWorldList">
                <AddGreeter addGreeting={this.addGreeting}/>
                {this.renderGreetings()}
            </div>
        );
    }
}

export default HelloWorldList;