import React, {Component} from 'react'
import {connect} from "react-redux";

import {addOneTodoAction} from "../store/actionCreators";


class Top extends Component {
    constructor(props) {
        super(props);
        this.myInputRef = React.createRef()
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

    _handleKeyEvent(e) {
        // 按回车
        if (e.keyCode === 13) {

            let title = this.myInputRef.current.value.trim()
            if (!title) {
                return alert('输入的内容为空')
            }

            const {todos} = this.props
            const {lastTodoId} = todos.length === 0 ? 0 : todos[todos.length - 1].id

            let todo = {
                id: lastTodoId,
                title,
                finished: false
            }

            this.props.addOneTodo(todo)

            this.myInputRef.current.value = ''
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addOneTodo(todo) {
            return dispatch(addOneTodoAction(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)
