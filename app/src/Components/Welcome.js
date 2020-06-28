import React, { Component } from 'react';
import logo from '../logo.svg';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiResponse: '',
            dbResponse: '',
        };
    }

    callApi() {
        fetch("http://localhost:3000/testApi")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    callDb() {
        fetch("http://localhost:3000/testDB")
            .then(res => res.text())
            .then(res => this.setState({ dbResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callApi();
        this.callDb();
    }

    render() {
        return (
            <div className="Welcome">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="App-intro">
                        { this.state.apiResponse }
                        <br/>
                        { this.state.dbResponse }
                    </p>
                    <a
                        className="App-link"
                        href="/todo"
                    >
                        Go to todo page
                    </a>
                </header>
            </div>
        );
    }
}

export default Welcome;
