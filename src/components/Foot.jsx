import React, {Component} from 'react'

import store from "../store";
import {
    isCheckedAllTodoAction,
    delFinishedTodoAction
} from "../store/actionCreators";

export default class Foot extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState()
    }

    componentDidMount() {
        store.subscribe(this._handleStateChange)
    }

    _handleStateChange = () => {
        this.setState(store.getState())
    }

    render() {
        const {todos, finishedCount} = this.state
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"
                           checked={todos.length > 0 && finishedCount === todos.length}
                           onChange={() => this._dealChange(finishedCount !== todos.length)}/>
                </label>
                <span>
                    <span>已完成 {finishedCount} 件</span> / 总计 {todos.length} 件
                </span>
                <button className='btn btn-warning'
                        onClick={() => this._dealRemove()}>清除已完成的任务
                </button>
            </div>
        )
    }

    _dealChange = (flag) => {
        store.dispatch(isCheckedAllTodoAction(flag))
    }

    _dealRemove = () => {
        store.dispatch(delFinishedTodoAction())
    }

}