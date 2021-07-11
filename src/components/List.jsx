import React, {Component} from 'react'

import store from "../store";


import Item from "./Item";

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState()
    }

    componentDidMount() {
        store.subscribe(this._handleStoreChange)
    }

    _handleStoreChange = () => {
        this.setState(store.getState())
    }

    render() {
        let {todos} = this.state
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