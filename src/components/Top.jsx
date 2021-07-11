import React, {Component} from 'react'
import store from "../store";
import {addOneTodoAction} from "../store/actionCreators";

export default class Top extends Component {
    constructor(props) {
        super(props);

        this.myInputRef = React.createRef()

        this.state = store.getState()
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text"
                       ref={this.myInputRef}
                       placeholder="请输入任务，按回车键确认"
                       onKeyDown={(e) => this._handleKeyEvent(e)}/>
            </div>
        )
    }

    componentDidMount() {
        store.subscribe(this._handleStoreChange)
    }

    _handleStoreChange = () => {
        this.setState(store.getState())
    }

    _handleKeyEvent(e) {
        // 按回车
        if (e.keyCode === 13) {

            let title = this.myInputRef.current.value.trim()
            if (!title) {
                return alert('输入的内容为空')
            }

            const {todos} = this.state
            const {lastTodoId} = todos.length === 0 ? 0 : todos[todos.length - 1].id

            let todo = {
                id: lastTodoId,
                title,
                finished: false
            }

            store.dispatch(addOneTodoAction(todo))

            this.myInputRef.current.value = ''
        }
    }
}