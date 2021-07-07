import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        changeFinished: PropTypes.func.isRequired,
        removeTodoWithId: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            isShowDelBtn: false
        }
    }

    render() {
        let {todo, changeFinished, removeTodoWithId} = this.props

        return (
            <li onMouseOver={() => this._hasShowBtn(true)}
                onMouseOut={() => this._hasShowBtn(false)}>
                <label>
                    <input type="checkbox" checked={todo.finished}
                           onChange={() => changeFinished(todo.id, !todo.finished)}/>
                    <span>{todo.title}</span>
                </label>
                <button className='btn btn-warning'
                        style={{display: this.state.isShowDelBtn ? 'block' : 'none'}}
                        onClick={() => removeTodoWithId(todo.id)}>
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