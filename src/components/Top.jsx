import React, {Component} from 'react'
import PropTypes from 'prop-types'

import PubSub from 'pubsub-js'

export default class Top extends Component {
    static propTypes = {
        lastTodoId: PropTypes.number.isRequired,
    }

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

            const {lastTodoId} = this.props
            let todo = {
                id: lastTodoId,
                title,
                finished: false
            }

            PubSub.publish('addTodo', todo)

            this.myInputRef.current.value = ''
        }
    }
}