import React, {Component} from 'react'
import PropTypes from 'prop-types'

import store from "../store";
import {
    delOneTodoAction,
    changeOneTodoAction,
} from "../store/actionCreators";

export default class Item extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            isShowDelBtn: false
        }
    }

    render() {
        let {todo} = this.props

        return (
            <li onMouseOver={() => this._hasShowBtn(true)}
                onMouseOut={() => this._hasShowBtn(false)}>
                <label>
                    <input type="checkbox" checked={todo.finished}
                           onChange={() => this._dealChange(todo.id, !todo.finished)}/>
                    <span>{todo.title}</span>
                </label>
                <button className='btn btn-warning'
                        style={{display: this.state.isShowDelBtn ? 'block' : 'none'}}
                        onClick={() => this._dealRemove(todo.id)}>
                    删除
                </button>
            </li>
        )
    }

    _dealChange = (toddId, isFinished) => {
        store.dispatch(changeOneTodoAction(toddId, isFinished))
    }

    _dealRemove(todoId) {
        store.dispatch(delOneTodoAction(todoId))
    }

    _hasShowBtn(flag) {
        this.setState({
            isShowDelBtn: flag
        })
    }
}