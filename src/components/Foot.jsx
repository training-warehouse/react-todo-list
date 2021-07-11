import React, {Component} from 'react'
import {connect} from "react-redux";

import {
    isCheckedAllTodoAction,
    delFinishedTodoAction
} from "../store/actionCreators";


class Foot extends Component {
    render() {
        const {todos, finishedCount, dealChange, dealRemove} = this.props
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"
                           checked={todos.length > 0 && finishedCount === todos.length}
                           onChange={() => dealChange(finishedCount !== todos.length)}/>
                </label>
                <span>
                    <span>已完成 {finishedCount} 件</span> / 总计 {todos.length} 件
                </span>
                <button className='btn btn-warning'
                        onClick={() => dealRemove()}>清除已完成的任务
                </button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        finishedCount: state.finishedCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dealChange(flag) {
            dispatch(isCheckedAllTodoAction(flag))
        },

        dealRemove() {
            dispatch(delFinishedTodoAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foot)