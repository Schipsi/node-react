import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="App-intro">
                        { this.state.apiResponse }
                        <br/>
                        { this.state.dbResponse }
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
