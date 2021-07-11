import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";

import {
    delOneTodoAction,
    changeOneTodoAction,
} from "../store/actionCreators";


class Item extends Component {
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
        let {todo,dealChange,dealRemove} = this.props

        return (
            <li onMouseOver={() => this._hasShowBtn(true)}
                onMouseOut={() => this._hasShowBtn(false)}>
                <label>
                    <input type="checkbox" checked={todo.finished}
                           onChange={() => dealChange(todo.id, !todo.finished)}/>
                    <span>{todo.title}</span>
                </label>
                <button className='btn btn-warning'
                        style={{display: this.state.isShowDelBtn ? 'block' : 'none'}}
                        onClick={() => dealRemove(todo.id)}>
                    删除
                </button>
            </li>
        )
    }

    _hasShowBtn(flag) {
        this.setState({
            isShowDelBtn: flag
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dealChange(toddId, isFinished) {
            dispatch(changeOneTodoAction(toddId, isFinished))
        },
        dealRemove(todoId) {
            dispatch(delOneTodoAction(todoId))
        }
    }
}

export default connect(null, mapDispatchToProps)(Item)
