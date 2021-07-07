import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Item from "./Item";

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeFinished: PropTypes.func.isRequired,
        removeTodoWithId: PropTypes.func.isRequired,
    }

    render() {
        let {todos, changeFinished, removeTodoWithId} = this.props
        return (
            <ul className='todo-main'>
                {
                    todos.map((todo, index) => (
                        <Item key={todo.id} todo={todo}
                              changeFinished={changeFinished}
                              removeTodoWithId={removeTodoWithId}/>
                    ))
                }
            </ul>
        )
    }

}