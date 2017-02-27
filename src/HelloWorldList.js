import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';

class HelloWorldList extends Component {
    render() {
        return (
            <div className="HelloWorldList">
                <HelloWorld name="Mayank"/>
                <HelloWorld name="Maanas"/>
            </div>
        );
    }
}

export default HelloWorldList;