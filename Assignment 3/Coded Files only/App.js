import React from 'react';
import Todoitem from './components/todo-items';
import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newtodo: ' ',
        }
    }
    render() {
        return ( <
            div className = "main" >
            <
            h1 className = "heading" > Things To Do < /h1> <
            input type = "text"
            className = "inputArea"
            placeholder = "Add Items"
            onChange = {
                (event) => {
                    const value = event.target.value;
                    this.setState({
                        newtodo: value
                    })
                }
            }
            /> <
            br / > < br / >

            <
            button className = "btn"
            onClick = {
                () => {
                    this.setState({
                        todos: [...this.state.todos, this.state.newtodo]
                    })
                }
            } >
            Add < /button> 

            <
            ol > {
                this.state.todos.map(todo =>
                    <
                    Todoitem todo = {
                        todo
                    }
                    onDelete = {
                        () => {
                            this.setState((prevState) => {
                                return {
                                    todos: prevState.todos.filter(x => x !== todo)
                                }
                            })
                        }
                    }
                    />
                )
            } <
            /ol> < /
            div >
        );
    }
}

export default App;
