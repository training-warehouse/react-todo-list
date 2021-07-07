import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Foot extends Component {
    static propTypes = {
        finishedCount: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        dealSelectedAllTodo: PropTypes.func.isRequired,
        removeAllFinishedTodos: PropTypes.func.isRequired,
    }

    render() {
        const {
            finishedCount, total,
            dealSelectedAllTodo,
            removeAllFinishedTodos
        } = this.props

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"
                           checked={total > 0 && finishedCount === total}
                           onChange={() => dealSelectedAllTodo(finishedCount !== total)}/>
                </label>
                <span>
                    <span>已完成 {finishedCount} 件</span> / 总计 {total} 件
                </span>
                <button className='btn btn-warning'
                        onClick={() => removeAllFinishedTodos()}>清除已完成的任务
                </button>
            </div>
        )
    }

}