import React, { Component } from 'react';
import './Learn.css';

class Learn extends Component {
    constructor(props) {
        super(props);

        // state used here as only this component gets affected
        // for binding events also use state
        this.state = { greeting: 'Hello' };
        this.frenchify = this.frenchify.bind(this);
    }

    frenchify() {
        this.setState({greeting: 'Bonjour'});
    }

    render() {
        return (
           <div className="Learn">
            {this.state.greeting} {this.props.name}
            <br/>
            <button onClick={this.frenchify}>Frenchify</button>
           </div>
        );
    }
}

export default Learn;