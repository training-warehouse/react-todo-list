import React from 'react'

import PubSub from 'pubsub-js'

import './index.css'
import Top from "./components/Top";
import List from "./components/List";
import Foot from "./components/Foot";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id: 1, title: '学习2个小时的react课程', finished: false},
                {id: 2, title: '学习2个小时的Vue课程', finished: false},
                {id: 3, title: '学习1个小时的Webpack课程', finished: true},
                {id: 4, title: '刷2小时抖音', finished: true},
            ],
            finishedCount: 0
        }
    }

    render() {
        let {todos, finishedCount} = this.state

        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Top
                        lastTodoId={todos.length === 0 ? 1 : todos[todos.length - 1].id + 1}
                    />
                    <List todos={todos}
                          changeFinished={this._changeFinished}
                          removeTodoWithId={this._removeTodoWithId}/>
                    <Foot finishedCount={finishedCount}
                          total={todos.length}
                          dealSelectedAllTodo={this._dealSelectedAllTodo}
                          removeAllFinishedTodos={this._removeAllFinishedTodos}
                    />
                </div>
            </div>
        )
    }

    _changeFinished = (todoId, flag) => {
        let tmpTodos = this.state.todos
        let tmpFinishedCount = 0

        tmpTodos.forEach((todo, index) => {
            if (todo.id === todoId) {
                todo.finished = flag
            }
        })

        tmpTodos.forEach((todo, index) => {
            if (todo.finished) {
                tmpFinishedCount += 1
            }
        })

        this.setState({
            todos: tmpTodos,
            finishedCount: tmpFinishedCount
        })
    }

    _removeTodoWithId = (todoId) => {
        let tmpTodos = this.state.todos
        let tmpFinishedCount = 0

        tmpTodos.forEach((todo, index) => {
            if (todo.id === todoId) {
                tmpTodos.splice(index, 1)
            }
        })

        tmpTodos.forEach((todo, index) => {
            if (todo.finished) {
                tmpFinishedCount += 1
            }
        })

        this.setState({
            todos: tmpTodos,
            finishedCount: tmpFinishedCount
        })
    }

    _dealSelectedAllTodo = (flag) => {
        let tmpTodos = this.state.todos
        let tmpFinishedCount = 0

        tmpTodos.forEach((todo, index) => {
            todo.finished = flag
            if (flag) {
                tmpFinishedCount = tmpTodos.length
            } else {
                tmpFinishedCount = 0
            }
        })

        this.setState({
            todos: tmpTodos,
            finishedCount: tmpFinishedCount
        })
    }

    _removeAllFinishedTodos = () => {
        let tmpTodos = this.state.todos
        let tmpArr = []
        tmpTodos.forEach((todo, index) => {
            if (!todo.finished) {
                tmpArr.push(todo)
            }
        })

        this.setState({
            todos: tmpArr,
        })
    }

    _addOneTodo = (todo) => {
        let tempTodos = this.state.todos
        tempTodos.push(todo)
        this.setState({
            todo: tempTodos
        })
    }

    componentDidMount() {
        PubSub.subscribe('addTodo', (msg, data) => {
            if (msg === 'addTodo') {
                this._addOneTodo(data)
            }
        })

        let tmpTodos = this.state.todos
        let tmpFinishedCount = 0

        tmpTodos.forEach((todo, index) => {
            if (todo.finished) {
                tmpFinishedCount += 1
            }
        })

        this.setState({
            finishedCount: tmpFinishedCount
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe('addTodo')
    }
}


export default App;
