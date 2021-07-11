import React, {Component} from 'react'
import {connect} from "react-redux";

import Item from "./Item";

class List extends Component {
    render() {
        let {todos} = this.props
        return (
            <ul className='todo-main'>
                {
                    todos.map((todo, index) => (
                        <Item key={todo.id} todo={todo}/>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(List)