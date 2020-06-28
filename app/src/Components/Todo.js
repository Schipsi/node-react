import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Todo">
                <header className="App-header">
                    <p className="App-intro">
                        Todo List
                    </p>
                    <form onSubmit={this.props.addItem}>
                        <input/>
                        <button type="submit"> Add Task </button>
                    </form>
                    <a
                        className="App-link App-homepage"
                        href="/"
                    >
                        Go to home page
                    </a>
                </header>
            </div>
        );
    }
}

export default Todo;
