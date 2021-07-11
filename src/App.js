import React from 'react'

import store from "./store";
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
        const todos = [
            {id: 1, title: '学习2个小时的react课程', finished: false},
            {id: 2, title: '学习2个小时的Vue课程', finished: false},
            {id: 3, title: '学习1个小时的Webpack课程', finished: true},
            {id: 4, title: '刷2小时抖音', finished: true},
        ]
        const action = getAllTodoAction(todos)
        store.dispatch(action)
    }

}


export default App;
