import React, { Component } from 'react';
import logo from '../logo.svg';

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Welcome">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="App-intro">
                        Page not found !
                    </p>
                    <a
                        className="App-link"
                        href="/"
                    >
                        Go to homepage
                    </a>
                </header>
            </div>
        );
    }
}

export default NotFound;
