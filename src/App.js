import React from 'react'
import {connect} from "react-redux";

import {getAllTodoAction} from "./store/actionCreators";

import './index.css'
import Top from "./components/Top";
import List from "./components/List";
import Foot from "./components/Foot";


class App extends React.Component {
    render() {
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Top/>
                    <List/>
                    <Foot/>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.reqTodoList()
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        reqTodoList() {
            dispatch(getAllTodoAction())
        }
    }
}

export default connect(null, mapDispatchToProps)(App)
